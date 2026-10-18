"""Build unofficial Kickbase API docs from the APK's Retrofit annotations."""
import json
import os
import re
import struct
import zipfile
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APK = Path(os.environ.get("KICKBASE_APK", ROOT.parent / "base.apk"))
OUT = ROOT
IFACES = {
    "Lkw2;", "Lyg6;", "Lo84;", "Lo13;", "Laz2;", "La3d;", "Ljv1;", "Lfe3;",
    "Lbx;", "Lozh;", "Lqyd;", "Lqy7;", "Lo8;", "Lf28;", "Lfki;", "Lmn3;", "Lqsh;",
}
JAVA_SCALAR = {
    "Ljava/lang/String;": ("string", None),
    "Ljava/lang/Integer;": ("integer", "int32"),
    "Ljava/lang/Long;": ("integer", "int64"),
    "Ljava/lang/Boolean;": ("boolean", None),
    "Ljava/lang/Double;": ("number", "double"),
    "Ljava/lang/Float;": ("number", "float"),
    "I": ("integer", "int32"),
    "J": ("integer", "int64"),
    "Z": ("boolean", None),
    "D": ("number", "double"),
    "F": ("number", "float"),
}


def u16(b, o):
    return struct.unpack_from("<H", b, o)[0]


def u32(b, o):
    return struct.unpack_from("<I", b, o)[0]


def uleb(b, o):
    result = 0
    shift = 0
    while True:
        value = b[o]
        o += 1
        result |= (value & 0x7F) << shift
        if value < 0x80:
            return result, o
        shift += 7


def mutf8(b, o):
    _, o = uleb(b, o)
    end = b.index(0, o)
    return b[o:end].decode("utf-8", "replace")


def read_value(b, o, strings):
    tag = b[o]
    o += 1
    value_arg = tag >> 5
    value_type = tag & 0x1F
    if value_type == 0x00:
        return b[o], o + 1
    if value_type in (0x02, 0x03, 0x04, 0x06):
        signed = value_type in (0x02, 0x04, 0x06)
        return int.from_bytes(b[o : o + value_arg + 1], "little", signed=signed), o + value_arg + 1
    if value_type in (0x17, 0x1C, 0x10, 0x11, 0x1A, 0x1B):
        nbytes = value_arg + 1
        index = int.from_bytes(b[o : o + nbytes], "little")
        o += nbytes
        if value_type == 0x17:
            return strings[index], o
        return ("ref", value_type, index), o
    if value_type == 0x1D:
        size, o = uleb(b, o)
        items = []
        for _ in range(size):
            item, o = read_value(b, o, strings)
            items.append(item)
        return items, o
    if value_type == 0x1E:
        annotation, o = read_annotation(b, o, strings)
        return annotation, o
    if value_type == 0x1F:
        return bool(value_arg), o
    return None, o + value_arg + 1


def read_annotation(b, o, strings):
    type_idx, o = uleb(b, o)
    size, o = uleb(b, o)
    elements = []
    for _ in range(size):
        name_idx, o = uleb(b, o)
        value, o = read_value(b, o, strings)
        elements.append((strings[name_idx], value))
    return (type_idx, elements), o


def load_dex(data):
    string_count = u32(data, 56)
    string_off = u32(data, 60)
    strings = [mutf8(data, u32(data, string_off + i * 4)) for i in range(string_count)]
    type_count = u32(data, 64)
    type_off = u32(data, 68)
    types = [strings[u32(data, type_off + i * 4)] for i in range(type_count)]
    field_count = u32(data, 80)
    field_off = u32(data, 84)
    fields = []
    for i in range(field_count):
        base = field_off + i * 8
        fields.append((types[u16(data, base)], types[u16(data, base + 2)], strings[u32(data, base + 4)]))
    return strings, types, fields


def class_name(descriptor):
    return descriptor[1:-1].replace("/", ".")


def simple_name(descriptor):
    name = class_name(descriptor).split(".")[-1]
    return name.replace("$", "_")


def schema_type(descriptor, models):
    if descriptor in JAVA_SCALAR:
        kind, fmt = JAVA_SCALAR[descriptor]
        schema = {"type": kind}
        if fmt:
            schema["format"] = fmt
        return schema
    if descriptor.startswith("Ljava/util/List") or descriptor.startswith("Ljava/util/ArrayList"):
        return {"type": "array", "items": {}}
    if descriptor.startswith("Lcom/kkstr/bundesliga/data/") and descriptor in models:
        return {"$ref": f"#/components/schemas/{simple_name(descriptor)}"}
    if descriptor.startswith("Lcom/kkstr/"):
        return {"type": "object", "description": class_name(descriptor)}
    if descriptor.startswith("["):
        return {"type": "array", "items": schema_type(descriptor[1:], models)}
    return {"type": "object", "description": descriptor}


def collect_models(dexes):
    models = {}
    for data in dexes:
        strings, types, fields = load_dex(data)
        class_count = u32(data, 96)
        class_off = u32(data, 100)
        for index in range(class_count):
            base = class_off + index * 32
            descriptor = types[u32(data, base)]
            if not descriptor.startswith("Lcom/kkstr/bundesliga/data/"):
                continue
            if "$" in descriptor and "$$" not in descriptor and descriptor.count("$") > 1:
                continue
            class_data = u32(data, base + 24)
            ann_off = u32(data, base + 20)
            if not class_data:
                continue
            cursor = class_data
            static_size, cursor = uleb(data, cursor)
            instance_size, cursor = uleb(data, cursor)
            _, cursor = uleb(data, cursor)
            _, cursor = uleb(data, cursor)
            field_index = 0
            properties = []
            for nth in range(static_size + instance_size):
                if nth == static_size:
                    field_index = 0
                diff, cursor = uleb(data, cursor)
                field_index += diff
                _, cursor = uleb(data, cursor)
                if nth < static_size:
                    continue
                _, field_type, field_name = fields[field_index]
                properties.append({"java": field_name, "type": field_type, "wire": field_name, "serialized": False})
            serialized = {}
            if ann_off:
                field_ann_count = u32(data, ann_off + 4)
                ann_cursor = ann_off + 16
                for nth in range(field_ann_count):
                    fidx = u32(data, ann_cursor + nth * 8)
                    set_off = u32(data, ann_cursor + nth * 8 + 4)
                    if not set_off:
                        continue
                    _, _, field_name = fields[fidx]
                    size = u32(data, set_off)
                    for item in range(size):
                        aoff = u32(data, set_off + 4 + item * 4)
                        type_idx, pointer = uleb(data, aoff + 1)
                        if types[type_idx] != "Lcom/google/gson/annotations/SerializedName;":
                            continue
                        count, pointer = uleb(data, pointer)
                        for _ in range(count):
                            name_idx, pointer = uleb(data, pointer)
                            if strings[name_idx] != "value":
                                _, pointer = read_value(data, pointer, strings)
                                continue
                            value, pointer = read_value(data, pointer, strings)
                            if isinstance(value, str):
                                serialized[field_name] = value
            if not properties:
                continue
            for prop in properties:
                if prop["java"] in serialized:
                    prop["wire"] = serialized[prop["java"]]
                    prop["serialized"] = True
            models[descriptor] = {
                "name": simple_name(descriptor),
                "qualified": class_name(descriptor),
                "properties": properties,
            }
    return models


def annotation_elements(data, aoff, strings, types):
    annotation, _ = read_annotation(data, aoff + 1, strings)
    return types[annotation[0]], dict(annotation[1])


def collect_operations(data):
    strings, types, _ = load_dex(data)
    proto_off = u32(data, 76)
    method_off = u32(data, 92)

    def proto(index):
        base = proto_off + index * 12
        params_off = u32(data, base + 8)
        params = []
        if params_off:
            size = u32(data, params_off)
            for i in range(size):
                params.append(types[u16(data, params_off + 4 + i * 2)])
        return params

    def method(index):
        base = method_off + index * 8
        return strings[u32(data, base + 4)], proto(u16(data, base + 2))

    operations = []
    class_count = u32(data, 96)
    class_off = u32(data, 100)
    for index in range(class_count):
        base = class_off + index * 32
        if types[u32(data, base)] not in IFACES:
            continue
        ann_off = u32(data, base + 20)
        if not ann_off:
            continue
        fields_size = u32(data, ann_off + 4)
        methods_size = u32(data, ann_off + 8)
        params_size = u32(data, ann_off + 12)
        method_base = ann_off + 16 + fields_size * 8
        by_method = {}
        for nth in range(methods_size):
            midx = u32(data, method_base + nth * 8)
            set_off = u32(data, method_base + nth * 8 + 4)
            name, params = method(midx)
            verbs = []
            if set_off:
                size = u32(data, set_off)
                for item in range(size):
                    aoff = u32(data, set_off + 4 + item * 4)
                    kind, elements = annotation_elements(data, aoff, strings, types)
                    verbs.append((kind, elements))
            by_method[midx] = {"name": name, "params": params, "verbs": verbs, "param_anns": []}
        param_base = method_base + methods_size * 8
        for nth in range(params_size):
            midx = u32(data, param_base + nth * 8)
            ref_off = u32(data, param_base + nth * 8 + 4)
            if midx not in by_method or not ref_off:
                continue
            size = u32(data, ref_off)
            anns = []
            for item in range(size):
                set_off = u32(data, ref_off + 4 + item * 4)
                if not set_off:
                    anns.append([])
                    continue
                count = u32(data, set_off)
                found = []
                for inner in range(count):
                    aoff = u32(data, set_off + 4 + inner * 4)
                    found.append(annotation_elements(data, aoff, strings, types))
                anns.append(found)
            by_method[midx]["param_anns"] = anns
        for record in by_method.values():
            http = None
            multipart = False
            for kind, elements in record["verbs"]:
                if kind in {
                    "Lretrofit2/http/GET;",
                    "Lretrofit2/http/POST;",
                    "Lretrofit2/http/PUT;",
                    "Lretrofit2/http/DELETE;",
                    "Lretrofit2/http/PATCH;",
                }:
                    path = elements.get("value")
                    if isinstance(path, str) and "v4/" in path:
                        http = (kind.split("/")[-1][:-1], "/" + path.lstrip("/"))
                if kind == "Lretrofit2/http/Multipart;":
                    multipart = True
            if not http:
                continue
            parameters = []
            body = None
            java_params = [item for item in record["params"] if item != "Lat4;"]
            annotations = record["param_anns"][: len(java_params)]
            for java_type, groups in zip(java_params, annotations):
                useful = [item for item in groups if item[0].startswith("Lretrofit2/http/")]
                if not useful:
                    continue
                kind, elements = useful[0]
                wire = elements.get("value")
                if kind.endswith("Path;"):
                    parameters.append({"in": "path", "name": wire if isinstance(wire, str) else "id", "type": java_type, "required": True})
                elif kind.endswith("Query;"):
                    parameters.append({
                        "in": "query",
                        "name": wire if isinstance(wire, str) else "query",
                        "type": java_type,
                        "required": False,
                        "encoded": bool(elements.get("encoded")),
                    })
                elif kind.endswith("Body;"):
                    body = java_type
                elif kind.endswith("Part;"):
                    parameters.append({"in": "part", "name": wire if isinstance(wire, str) else "file", "type": java_type, "required": True})
                    multipart = True
            verb, path = http
            operations.append({
                "method": verb.lower(),
                "path": path,
                "parameters": parameters,
                "body": body,
                "multipart": multipart,
            })
    return operations


def tag_for(path):
    parts = [part for part in path.split("/") if part and not part.startswith("{")]
    if len(parts) >= 2 and parts[0] == "v4":
        return parts[1]
    return "other"


def yaml_quote(value):
    text = str(value)
    if re.fullmatch(r"[A-Za-z0-9_.-]+", text):
        return text
    return json.dumps(text, ensure_ascii=False)


def dump_schema(schema, indent):
    lines = []
    pad = "  " * indent
    if "$ref" in schema:
        return [f"{pad}$ref: {yaml_quote(schema['$ref'])}"]
    if "type" in schema:
        lines.append(f"{pad}type: {schema['type']}")
    if schema.get("format"):
        lines.append(f"{pad}format: {schema['format']}")
    if schema.get("description"):
        lines.append(f"{pad}description: {yaml_quote(schema['description'])}")
    if schema.get("type") == "array":
        lines.append(f"{pad}items:")
        lines.extend(dump_schema(schema.get("items") or {"type": "object"}, indent + 1))
    if schema.get("type") == "object" and "properties" in schema:
        required = schema.get("required") or []
        if required:
            lines.append(f"{pad}required: [{', '.join(yaml_quote(item) for item in required)}]")
        lines.append(f"{pad}properties:")
        for name, prop in schema["properties"].items():
            lines.append(f"{pad}  {yaml_quote(name)}:")
            lines.extend(dump_schema(prop, indent + 2))
    if "oneOf" in schema:
        lines.append(f"{pad}oneOf:")
        for item in schema["oneOf"]:
            lines.append(f"{pad}  - $ref: {yaml_quote(item['$ref'])}")
    return lines


def build_openapi(operations, models):
    grouped = defaultdict(list)
    for operation in operations:
        grouped[(operation["method"], operation["path"])].append(operation)
    paths = {}
    for (method, path), variants in sorted(grouped.items(), key=lambda item: (item[0][1], item[0][0])):
        parameters = []
        seen = set()
        bodies = []
        multipart = False
        for variant in variants:
            multipart = multipart or variant["multipart"]
            if variant["body"]:
                bodies.append(variant["body"])
            for param in variant["parameters"]:
                key = (param["in"], param["name"])
                if key in seen or param["in"] == "part":
                    continue
                seen.add(key)
                parameters.append(param)
        operation = {
            "tags": [tag_for(path)],
            "summary": f"{method.upper()} {path}",
            "parameters": parameters,
            "bodies": bodies,
            "multipart": multipart,
        }
        paths.setdefault(path, {})[method] = operation

    lines = [
        "openapi: 3.0.3",
        "info:",
        "  title: Kickbase unofficial API",
        "  version: 4.9.1",
        "  description: |",
        "    Unofficial reference recovered from Kickbase Android 4.9.1 (versionCode 2509).",
        "    Static Retrofit annotations and Gson @SerializedName values. Not an official KKSTR document.",
        "servers:",
        "  - url: https://api.kickbase.com",
        "    description: Bootstrap host. Login may return a different apiurl.",
        "tags:",
    ]
    for tag in sorted({tag_for(path) for path in paths}):
        lines.append(f"  - name: {tag}")
    lines += [
        "security:",
        "  - bearerAuth: []",
        "paths:",
    ]
    for path, methods in paths.items():
        lines.append(f"  {path}:")
        for method, operation in methods.items():
            lines.append(f"    {method}:")
            lines.append(f"      tags: [{operation['tags'][0]}]")
            lines.append(f"      summary: {yaml_quote(operation['summary'])}")
            lines.append("      parameters:")
            if operation["parameters"]:
                for param in operation["parameters"]:
                    lines.append(f"        - name: {yaml_quote(param['name'])}")
                    lines.append(f"          in: {param['in']}")
                    lines.append(f"          required: {'true' if param['required'] else 'false'}")
                    lines.append("          schema:")
                    lines.extend(dump_schema(schema_type(param["type"], models), 6))
            else:
                lines.append("        []")
            if operation["bodies"] or operation["multipart"]:
                lines.append("      requestBody:")
                lines.append("        required: true")
                lines.append("        content:")
                if operation["multipart"]:
                    lines.append("          multipart/form-data:")
                    lines.append("            schema:")
                    lines.append("              type: object")
                else:
                    lines.append("          application/json:")
                    lines.append("            schema:")
                    unique = []
                    for body in operation["bodies"]:
                        if body not in unique:
                            unique.append(body)
                    if len(unique) == 1:
                        lines.extend(dump_schema(schema_type(unique[0], models), 7))
                    else:
                        lines.append("              oneOf:")
                        for body in unique:
                            ref = schema_type(body, models)
                            if "$ref" in ref:
                                lines.append(f"                - $ref: {yaml_quote(ref['$ref'])}")
                            else:
                                lines.append("                - type: object")
            lines.append("      responses:")
            lines.append("        '200':")
            lines.append("          description: Success. Many payloads are objects with an it or us array. Exact response schema was erased by R8 for Kotlin suspend calls.")
            lines.append("        '401':")
            lines.append("          description: Access denied or expired token.")
            lines.append("          content:")
            lines.append("            application/json:")
            lines.append("              schema:")
            lines.append("                $ref: '#/components/schemas/ErrorBody'")
    lines += [
        "components:",
        "  securitySchemes:",
        "    bearerAuth:",
        "      type: http",
        "      scheme: bearer",
        "  schemas:",
        "    ErrorBody:",
        "      type: object",
        "      properties:",
        "        err:",
        "          type: integer",
        "        errMsg:",
        "          type: string",
    ]
    used_names = {"ErrorBody"}
    for descriptor, model in sorted(models.items(), key=lambda item: item[1]["name"]):
        name = model["name"]
        if name in used_names:
            name = model["qualified"].replace(".", "_")
        used_names.add(name)
        model["schema_name"] = name
        lines.append(f"    {name}:")
        lines.append("      type: object")
        lines.append(f"      description: {yaml_quote(model['qualified'])}")
        if model["properties"]:
            lines.append("      properties:")
            for prop in model["properties"]:
                lines.append(f"        {yaml_quote(prop['wire'])}:")
                prop_schema = schema_type(prop["type"], models)
                if not prop["serialized"]:
                    prop_schema = dict(prop_schema)
                    prop_schema["description"] = "Java field name; no @SerializedName was recovered."
                lines.extend(dump_schema(prop_schema, 5))
    return "\n".join(lines) + "\n", paths


def pretty_type(descriptor):
    scalars = {
        "Ljava/lang/String;": "string",
        "Ljava/lang/Integer;": "int",
        "Ljava/lang/Long;": "long",
        "Ljava/lang/Boolean;": "boolean",
        "Ljava/lang/Double;": "double",
        "Ljava/lang/Float;": "float",
        "I": "int",
        "J": "long",
        "Z": "boolean",
        "D": "double",
        "F": "float",
    }
    if descriptor in scalars:
        return scalars[descriptor]
    if descriptor.startswith("Ljava/util/"):
        return "list"
    if descriptor.startswith("Lcom/kkstr/"):
        return simple_name(descriptor)
    if descriptor.startswith("["):
        return pretty_type(descriptor[1:]) + "[]"
    return descriptor


def markdown_reference(paths, models):
    lines = [
        "# Endpoint reference",
        "",
        "Paths are relative to `https://api.kickbase.com`. `{name}` is a path parameter.",
        "JSON property names are the app's Gson `@SerializedName` values.",
        "",
    ]
    by_tag = defaultdict(list)
    for path, methods in paths.items():
        for method, operation in methods.items():
            by_tag[operation["tags"][0]].append((path, method, operation))
    for tag in sorted(by_tag):
        lines.append(f"## {tag}")
        lines.append("")
        for path, method, operation in sorted(by_tag[tag]):
            lines.append(f"### `{method.upper()} {path}`")
            lines.append("")
            if operation["parameters"]:
                lines.append("| Name | In | Type | Required |")
                lines.append("| --- | --- | --- | --- |")
                for param in operation["parameters"]:
                    lines.append(f"| `{param['name']}` | {param['in']} | `{pretty_type(param['type'])}` | {param['required']} |")
                lines.append("")
            if operation["bodies"]:
                names = []
                for body in operation["bodies"]:
                    model = models.get(body)
                    names.append(f"`{model['schema_name']}`" if model and model.get("schema_name") else f"`{body}`")
                lines.append("Body: " + " or ".join(dict.fromkeys(names)) + ("; `multipart/form-data`" if operation["multipart"] else "; `application/json`"))
                lines.append("")
            elif operation["multipart"]:
                lines.append("Body: `multipart/form-data`.")
                lines.append("")
    return "\n".join(lines) + "\n"


def markdown_models(models):
    lines = [
        "# Models",
        "",
        "Only fields present on the decompiled model are listed. A short wire name such as `i` or `n` is intentional: that is the JSON key.",
        "",
    ]
    current = None
    for model in sorted(models.values(), key=lambda item: item["qualified"]):
        group = model["qualified"].split(".")[4] if model["qualified"].count(".") >= 4 else "other"
        if group != current:
            current = group
            lines.append(f"## {group}")
            lines.append("")
        lines.append(f"### `{model.get('schema_name', model['name'])}`")
        lines.append("")
        lines.append(f"`{model['qualified']}`")
        lines.append("")
        lines.append("| JSON | Java type |")
        lines.append("| --- | --- |")
        for prop in model["properties"]:
            marker = "" if prop["serialized"] else " (no SerializedName)"
            lines.append(f"| `{prop['wire']}`{marker} | `{pretty_type(prop['type'])}` |")
        lines.append("")
    return "\n".join(lines) + "\n"


def main():
    archive = zipfile.ZipFile(APK)
    dexes = [archive.read(info.filename) for info in archive.infolist() if info.filename.endswith(".dex")]
    models = collect_models(dexes)
    operations = []
    for data in dexes:
        if b"Lretrofit2/http/GET;" in data:
            operations.extend(collect_operations(data))
    spec, paths = build_openapi(operations, models)
    docs = OUT / "docs"
    docs.mkdir(exist_ok=True)
    (docs / "openapi.yaml").write_text(spec, encoding="utf-8")
    (docs / "endpoints.md").write_text(markdown_reference(paths, models), encoding="utf-8")
    (docs / "models.md").write_text(markdown_models(models), encoding="utf-8")
    summary = {
        "operations": len(operations),
        "paths": len(paths),
        "models": len(models),
    }
    print(summary)


if __name__ == "__main__":
    main()
