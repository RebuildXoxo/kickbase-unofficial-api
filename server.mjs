import http from "node:http";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { playerNews } from "./ligainsider.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "public");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

function allowedHost(value) {
  const host = String(value || "api.kickbase.com").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (host === "api.kickbase.com" || host.endsWith(".kickbase.com")) return host;
  return null;
}

function skipRegion(pathname) {
  return /\/v4\/(user\/(login|register|refreshtokens)|config(\/|$)|onboarding)/.test(pathname)
    || pathname.includes("/onboarding");
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  if (url.pathname === "/ligainsider/news" && req.method === "GET") {
    playerNews({
      name: url.searchParams.get("name") || "",
      club: url.searchParams.get("club") || "",
      withItems: url.searchParams.get("items") !== "0",
    }).then((data) => {
      res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(data));
    }).catch((error) => {
      res.writeHead(502, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: error.message || "Ligainsider is unavailable." }));
    });
    return;
  }
  if (url.pathname.startsWith("/v4/")) {
    const host = allowedHost(req.headers["x-kickbase-host"]);
    if (!host) {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "Only kickbase.com hosts are proxied." }));
      return;
    }
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const body = Buffer.concat(chunks);
      const headers = {
        Accept: "application/json",
        "Accept-Language": req.headers["accept-language"] || "de-DE",
        "User-Agent": "Kickbase/4.9.1 (Android 14)",
      };
      if (!skipRegion(url.pathname)) {
        headers["KB-Region"] = req.headers["kb-region"] || "de";
        headers["KB-Store-Region"] = req.headers["kb-store-region"] || "de";
      }
      if (req.headers.authorization) headers.Authorization = req.headers.authorization;
      if (body.length) {
        headers["Content-Type"] = req.headers["content-type"] || "application/json";
        headers["Content-Length"] = Buffer.byteLength(body);
      }
      const upstream = https.request(
        { host, method: req.method, path: `${url.pathname}${url.search}`, headers },
        (upstreamResponse) => {
          const parts = [];
          upstreamResponse.on("data", (chunk) => parts.push(chunk));
          upstreamResponse.on("end", () => {
            res.writeHead(upstreamResponse.statusCode || 502, {
              "content-type": upstreamResponse.headers["content-type"] || "application/json",
            });
            res.end(Buffer.concat(parts));
          });
        },
      );
      upstream.on("error", (error) => {
        res.writeHead(502, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      });
      if (body.length) upstream.write(body);
      upstream.end();
    });
    return;
  }

  const relative = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
  const file = path.normalize(path.join(root, relative));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end();
    return;
  }
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": mime[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}`);
});
