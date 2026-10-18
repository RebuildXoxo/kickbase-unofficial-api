# Kickbase API reference (unofficial)

Documentation recovered from the Kickbase Android app **4.9.1** (versionCode **2509**). It is not published by KKSTR GmbH and it is not an official API contract.

| | |
| --- | --- |
| Package | `com.kkstr.bundesliga` |
| APK SHA-256 | `f72c144f6657dd99faebe25ee6e80b429889538b6bc9d74fb361ba7943bc998f` |
| Bootstrap host | `https://api.kickbase.com` |
| Operations | 199 Retrofit calls, 182 distinct paths |
| Models | 360 Gson models |

## Read this first

- [Authentication, headers, and errors](authentication.md)
- [Endpoints](endpoints.md) — method, path, path/query parameters, request body
- [Models](models.md) — JSON names from `@SerializedName`
- [openapi.yaml](openapi.yaml) — same reference as an OpenAPI 3.0 document

## What this is based on

The app declares its HTTP API with Retrofit. Paths, verbs, path parameters, and query names come from those annotations. JSON names come from Gson `@SerializedName` on the data classes.

Two calls were also observed against the live host while checking the local client:

- `GET /v4/config` returned `200`
- `POST /v4/user/login` with a rejected account returned `401` and `{"err":1,"errMsg":"AccessDenied"}`

Every other response body in this reference is from the static models, not from a captured response. Kotlin `suspend` functions had their return types erased, so most success payloads are not pinned to one schema. Where a screen is known to read a field, that field is still listed on the model.

## Regenerating

Place `base.apk` next to this folder, or set `KICKBASE_APK` to its path, then run:

```bash
python scripts/build_docs.py
```

That rewrites `docs/endpoints.md`, `docs/models.md`, and `docs/openapi.yaml`.
