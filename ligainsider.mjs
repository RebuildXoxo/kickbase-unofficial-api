import https from "node:https";

const ORIGIN = "https://www.ligainsider.de";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";
const cache = new Map();
const TTL_MS = 15 * 60 * 1000;

function fold(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&shy;/gi, "")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

function preview(text) {
  const clean = String(text || "").replace(/\s*\[…\]\s*$/u, "").replace(/\s*\[\.\.\.\]\s*$/u, "").trim();
  if (clean.length <= 280) return clean;
  return `${clean.slice(0, 280).replace(/\s+\S*$/, "")}…`;
}

function allowed(url) {
  return url.protocol === "https:" && (url.hostname === "www.ligainsider.de" || url.hostname === "ligainsider.de");
}

function getText(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    if (!allowed(target)) {
      reject(new Error("Unexpected news host."));
      return;
    }
    const request = https.get(target, {
      headers: {
        "User-Agent": UA,
        "Accept-Language": "de-DE,de;q=0.9",
        Accept: "text/html",
      },
    }, (response) => {
      const location = response.headers.location;
      if (response.statusCode >= 300 && response.statusCode < 400 && location && redirects < 3) {
        response.resume();
        const next = new URL(location, target);
        resolve(getText(next, redirects + 1));
        return;
      }
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => {
        resolve({
          status: response.statusCode || 0,
          body: Buffer.concat(chunks).toString("utf8"),
        });
      });
    });
    request.setTimeout(8000, () => request.destroy(new Error("Ligainsider timed out.")));
    request.on("error", reject);
  });
}

function playerCandidates(html) {
  const blocks = html.split(/<li class="title_search">/i).slice(1);
  const playerBlock = blocks.find((part) => /^\s*Spieler\b/i.test(part)) || "";
  const candidates = [];
  for (const match of playerBlock.matchAll(/<a href="(\/[a-z0-9-]+_\d+\/)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    const path = match[1];
    const inner = match[2];
    const name = decodeHtml(inner);
    const team = inner.match(/\/images\/teams\/[^"']+/i)?.[0] || "";
    if (name && /^\/[a-z0-9-]+_\d+\/$/.test(path)) candidates.push({ path, name, team });
  }
  return candidates;
}

function clubScore(teamFile, club) {
  const file = fold(teamFile);
  const ignored = new Set(["fc", "sv", "vfb", "tsv", "bsc", "sc", "fsv", "vfl"]);
  const tokens = fold(club).split(" ").filter((token) => token.length > 2 && !ignored.has(token));
  if (!tokens.length || !file) return 0;
  return tokens.filter((token) => file.includes(token)).length;
}

function choosePlayer(candidates, name, club) {
  const folded = fold(name);
  let pool = candidates.filter((item) => fold(item.name) === folded);
  if (!pool.length && candidates.length === 1) pool = candidates;
  if (pool.length > 1 && club) {
    const ranked = pool
      .map((item) => ({ ...item, score: clubScore(item.team, club) }))
      .sort((a, b) => b.score - a.score);
    if (ranked[0].score > 0 && ranked[0].score > (ranked[1]?.score || 0)) return ranked[0];
    return null;
  }
  return pool.length === 1 ? pool[0] : null;
}

function nationFrom(html) {
  const tag = html.match(/<img[^>]*\/images\/nations\/[^>]*>/i)?.[0] || "";
  const src = tag.match(/\ssrc="([^"]+)"/i)?.[1] || "";
  const name = tag.match(/\stitle="([^"]+)"/i)?.[1] || tag.match(/\salt="([^"]+)"/i)?.[1] || "";
  let flag = "";
  try {
    const url = new URL(src, ORIGIN);
    if (url.protocol === "https:" && url.hostname === "cdn.ligainsider.de") flag = url.href;
  } catch {
    flag = "";
  }
  if (!flag || !name) return null;
  return { name: decodeHtml(name), flag };
}

function newsRows(html, profilePath) {
  const section = html.split('id="news"')[1] || "";
  const rows = section.split('<div class="news_row">').slice(1, 6);
  const items = [];
  for (const row of rows) {
    const href = row.match(/<h3[^>]*>\s*<a href="([^"]+)"/i)?.[1] || "";
    const title = decodeHtml(row.match(/<h3[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] || "");
    const date = decodeHtml(row.match(/class="news_column_mid[\s\S]*?<span>([\s\S]*?)<\/span>/i)?.[1] || "");
    if (!title || !href.startsWith(profilePath)) continue;
    items.push({ title, date, path: href });
  }
  return items;
}

function articlePreview(html) {
  const description = decodeHtml(html.match(/property="og:description" content="([^"]*)"/i)?.[1] || "");
  const body = html.split('itemprop="articleBody"')[1] || "";
  const paragraph = decodeHtml(body.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");
  const image = html.match(/property="og:image" content="(https:\/\/cdn\.ligainsider\.[^"]+)"/i)?.[1] || "";
  return {
    excerpt: preview(paragraph || description),
    image,
  };
}

export async function playerNews({ name, club, withItems = true }) {
  const cleanName = String(name || "").replace(/\s+/g, " ").trim();
  const cleanClub = String(club || "").replace(/\s+/g, " ").trim();
  if (cleanName.length < 2 || cleanName.length > 80) {
    return { profile: null, matched: "", nation: null, items: [] };
  }
  const fullKey = `${fold(cleanName)}|${fold(cleanClub)}|full`;
  const flagKey = `${fold(cleanName)}|${fold(cleanClub)}|flag`;
  const fullHit = cache.get(fullKey);
  if (fullHit && Date.now() - fullHit.at < TTL_MS) return fullHit.data;
  if (!withItems) {
    const flagHit = cache.get(flagKey);
    if (flagHit && Date.now() - flagHit.at < TTL_MS) return flagHit.data;
  }

  const searchUrl = `${ORIGIN}/search/?${new URLSearchParams({
    searchstring: cleanName,
    mode: "pageview",
    searchtype: "player-verein-user",
  })}`;
  const search = await getText(searchUrl);
  if (search.status !== 200) throw new Error("Ligainsider search failed.");
  const player = choosePlayer(playerCandidates(search.body), cleanName, cleanClub);
  if (!player) {
    const empty = { profile: null, matched: "", nation: null, items: [] };
    cache.set(flagKey, { at: Date.now(), data: empty });
    cache.set(fullKey, { at: Date.now(), data: empty });
    return empty;
  }

  const profileUrl = `${ORIGIN}${player.path}`;
  const profile = await getText(profileUrl);
  if (profile.status !== 200) throw new Error("Ligainsider profile failed.");
  const nation = nationFrom(profile.body);
  if (!withItems) {
    const brief = { profile: profileUrl, matched: player.name, nation, items: [] };
    cache.set(flagKey, { at: Date.now(), data: brief });
    return brief;
  }
  const rows = newsRows(profile.body, player.path);
  const previews = await Promise.all(rows.map(async (row) => {
    try {
      const article = await getText(`${ORIGIN}${row.path}`);
      if (article.status !== 200) return { ...row, excerpt: "", image: "" };
      return { ...row, ...articlePreview(article.body) };
    } catch {
      return { ...row, excerpt: "", image: "" };
    }
  }));
  const data = {
    profile: profileUrl,
    matched: player.name,
    nation,
    items: previews.map((item) => ({
      title: item.title,
      date: item.date,
      url: `${ORIGIN}${item.path}`,
      excerpt: item.excerpt || "",
      image: item.image || "",
    })),
  };
  cache.set(fullKey, { at: Date.now(), data });
  return data;
}
