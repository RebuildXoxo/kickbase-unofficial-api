# League desk

Unofficial Kickbase client and API reference for Android **4.9.1**.

This is not a KKSTR product. The HTTP API is private to the Kickbase app. These notes were recovered from that app's Retrofit interfaces and Gson models.

## API documentation

Start at [docs/README.md](docs/README.md).

| Document | Contents |
| --- | --- |
| [docs/authentication.md](docs/authentication.md) | Login, refresh, headers, errors |
| [docs/endpoints.md](docs/endpoints.md) | 182 paths / 199 calls |
| [docs/models.md](docs/models.md) | 360 request and response models |
| [docs/openapi.yaml](docs/openapi.yaml) | OpenAPI 3.0 file for Redoc, Swagger UI, or codegen |

## Local desk

`node server.mjs` serves the browser client at `http://127.0.0.1:4173`.

The page signs in with an email and password, then reads leagues, rankings, squads, the matchday eleven, the transfer market, fixtures, competitions, and challenges. Chat, ads, the shop, and purchases are not in the client. The browser talks to `/v4/…` on this server, which forwards the call to Kickbase, because the API does not allow a normal browser origin.

## Rebuild the reference

```bash
python scripts/build_docs.py
```

The script reads `base.apk` from the parent of this folder, or from the path in `KICKBASE_APK`.
