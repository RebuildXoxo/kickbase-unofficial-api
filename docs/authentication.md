# Authentication

All paths below are on `https://api.kickbase.com` unless login returns a different `apiurl`. Use that host for later calls.

## Login

`POST /v4/user/login` with `Content-Type: application/json`.

Email and password:

```json
{
  "em": "person@example.com",
  "pass": "secret"
}
```

The same path also accepts `LoginGoogleRequest`, `LoginFacebookRequest`, or `LoginAuth0Request`. Field names for those bodies are in [models.md](models.md).

A success body is `LoginResponseV4`:

| JSON | Meaning |
| --- | --- |
| `tkn` | Access token |
| `rtkn` | Refresh token |
| `tknex` | Access-token expiry |
| `apiurl` | Host for later calls. May differ from the bootstrap host. |
| `u` | `UserV4` profile. The user id is `u.id`. |
| `err` | Error code when the call fails inside a JSON body |
| `errMsg` | Error text |

## Refresh

`POST /v4/user/refreshtokens`

```json
{ "rtkn": "<refresh token>" }
```

The response is `RefreshTokenResponseV4` and again uses `tkn`, `rtkn`, and `tknex`.

## Calling an authenticated route

```http
GET /v4/leagues HTTP/1.1
Host: api.kickbase.com
Accept: application/json
Accept-Language: de-DE
User-Agent: Kickbase/4.9.1 (Android 14)
Authorization: Bearer <tkn>
KB-Region: <region>
KB-Store-Region: <store region>
```

`Authorization` is the access token from `tkn`, with a `Bearer ` prefix.

`KB-Region` and `KB-Store-Region` are sent on ordinary `/v4/` calls. The app skips them for:

- `/v4/user/login`
- `/v4/user/register`
- `/v4/user/refreshtokens`
- `/v4/config` and `/v4/config/version`
- paths that contain `onboarding`

The region values are chosen by the app's region helper. This reference does not fix them to a single code.

`User-Agent` in the shipped app is `Kickbase/4.9.1 (Android <release>)`. `Accept-Language` is the device locale, such as `de-DE`.

## Errors

Failed calls use `err` and `errMsg`. A rejected login looked like this:

```json
{ "err": 1, "errMsg": "AccessDenied" }
```

When `tkn` is expired, refresh it and repeat the call once.

## Lists

Several list payloads put the array on `it` (leagues, squads, table clubs, market players) or `us` (ranking managers). Other wrappers use a named list. The matching model in [models.md](models.md) is the place to check before assuming the key.
