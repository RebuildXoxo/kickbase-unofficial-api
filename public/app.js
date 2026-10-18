const app = document.querySelector("#app");
const SESSION_KEY = "league-desk-session";
const POSITIONS = { 1: "GK", 2: "DEF", 3: "MID", 4: "FWD" };

const state = {
  session: loadSession(),
  route: location.hash || "#/leagues",
  error: "",
  notice: "",
  busy: false,
  cache: {},
  imageBase: "https://kickbase.b-cdn.net/",
};

window.addEventListener("hashchange", () => {
  state.route = location.hash || "#/leagues";
  state.error = "";
  state.notice = "";
  render();
});

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function saveSession(session) {
  state.session = session;
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
}

function hostOf(session) {
  const raw = session?.apiurl || "https://api.kickbase.com";
  return String(raw).replace(/^https?:\/\//, "").replace(/\/.*$/, "") || "api.kickbase.com";
}

function groupedDigits(value) {
  const digits = String(value ?? "").replace(/\D/g, "").replace(/^0+(?=\d)/, "");
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function priceNumber(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  return digits ? Number(digits) : NaN;
}

function bindPriceField(input) {
  if (!input) return;
  const format = () => {
    const digitsBefore = input.value.slice(0, input.selectionStart ?? 0).replace(/\D/g, "").length;
    const formatted = groupedDigits(input.value);
    if (formatted === input.value) return;
    input.value = formatted;
    let seen = 0;
    let caret = formatted.length;
    for (let index = 0; index < formatted.length; index += 1) {
      if (/\d/.test(formatted[index])) seen += 1;
      if (seen === digitsBefore) {
        caret = index + 1;
        break;
      }
    }
    input.setSelectionRange(caret, caret);
  };
  input.value = groupedDigits(input.value);
  input.addEventListener("input", format);
}

function money(value) {
  if (value == null || value === "") return "–";
  const number = Number(value);
  if (!Number.isFinite(number)) return "–";
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(number);
}

function text(value) {
  return value == null || value === "" ? "–" : String(value);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function listsIn(data) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== "object") return [];
  const preferred = ["it", "us", "players", "pls", "leaguesList"];
  for (const key of preferred) {
    if (Array.isArray(data[key])) return data[key];
  }
  const found = Object.values(data).find((value) => Array.isArray(value) && value.some((item) => item && typeof item === "object"));
  return found || [];
}

function playerName(player) {
  return player.pn || player.n || player.name || player.unm || "Player";
}

function playerId(player) {
  return player.pi || player.i || player.id || player.tid;
}

function positionLabel(player) {
  return POSITIONS[player.pos] || (player.pos ? `P${player.pos}` : "");
}

function imageUrl(path) {
  if (!path) return "";
  const value = String(path);
  if (/^https?:\/\//i.test(value)) return value;
  const base = state.imageBase || "https://kickbase.b-cdn.net/";
  return `${base.endsWith("/") ? base : `${base}/`}${value.replace(/^\//, "")}`;
}

function photo(path, className = "") {
  const src = imageUrl(path);
  if (!src) return "";
  return `<img class="${className}" alt="" src="${escapeHtml(src)}" onerror="this.remove()">`;
}

function signedMoney(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "–";
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    signDisplay: "exceptZero",
  }).format(number);
}

function relativeTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  const days = Math.round((Date.now() - date.getTime()) / 86400000);
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

function countdown(seconds) {
  const value = Number(seconds);
  if (!Number.isFinite(value) || value <= 0) return "";
  if (value < 3600) return `${Math.max(1, Math.round(value / 60))}m`;
  if (value < 86400) return `${Math.round(value / 3600)}h`;
  return `${Math.round(value / 86400)}d`;
}

function userId() {
  return String(state.session?.user?.id || "");
}

async function api(path, options = {}) {
  const session = state.session;
  const headers = {
    Accept: "application/json",
    "Accept-Language": "de-DE",
  };
  if (session?.tkn && options.auth !== false) headers.Authorization = `Bearer ${session.tkn}`;
  if (session) headers["X-Kickbase-Host"] = hostOf(session);
  let body;
  if (options.body != null) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(options.body);
  }
  const response = await fetch(path, { method: options.method || "GET", headers, body });
  const raw = await response.text();
  let data = null;
  try { data = raw ? JSON.parse(raw) : null; } catch { data = { raw }; }
  if (response.status === 401 && session?.rtkn && !options.retried && options.auth !== false) {
    const refreshed = await refresh(session);
    if (refreshed) return api(path, { ...options, retried: true });
  }
  if (!response.ok) {
    const message = data?.errMsg || data?.error || data?.message || `Request failed (${response.status})`;
    const error = new Error(message);
    error.status = response.status;
    error.data = data;
    throw error;
  }
  if (data?.err && data.errMsg && !data.tkn && !data.it && !data.us) throw new Error(data.errMsg);
  return data;
}

async function refresh(session) {
  try {
    const data = await api("/v4/user/refreshtokens", {
      method: "POST",
      auth: false,
      retried: true,
      body: { rtkn: session.rtkn },
    });
    saveSession({
      ...session,
      tkn: data.tkn || session.tkn,
      rtkn: data.rtkn || session.rtkn,
      tknex: data.tknex || session.tknex,
    });
    return true;
  } catch {
    saveSession(null);
    location.hash = "#/login";
    return false;
  }
}

function go(hash) {
  location.hash = hash;
}

function routeParts() {
  return state.route.replace(/^#/, "").split("/").filter(Boolean);
}

function ensureImageBase() {
  if (!state.session || state.configLoaded) return;
  state.configLoaded = true;
  api("/v4/config", { auth: false }).then((config) => {
    if (config?.ibp && config.ibp !== state.imageBase) {
      state.imageBase = config.ibp;
      render();
    }
  }).catch(() => {});
}

function render() {
  ensureImageBase();
  const parts = routeParts();
  if (!state.session && parts[0] !== "login") {
    location.hash = "#/login";
    return;
  }
  if (parts[0] === "login" || !state.session) {
    app.innerHTML = loginView();
    bindLogin();
    return;
  }
  const page = parts[0] === "league"
    ? leagueShell(parts)
    : parts[0] === "competitions"
      ? competitionsShell()
      : parts[0] === "challenges"
        ? challengesShell()
        : leaguesShell();
  app.innerHTML = shell(page);
  bindShell();
  if (parts[0] === "league") loadLeague(parts);
  else if (parts[0] === "competitions") loadCompetitions(parts);
  else if (parts[0] === "challenges") loadChallenges();
  else loadLeagues();
}

function shell(content) {
  const user = state.session?.user;
  return `
    <div class="shell">
      <header class="top">
        <div class="brand">
          <strong>League desk</strong>
          <span>${escapeHtml(user?.name || user?.email || "Kickbase account")}</span>
        </div>
        <nav class="nav">
          <button data-go="#/leagues" class="${state.route.startsWith("#/league") || state.route.startsWith("#/leagues") ? "active" : ""}">Leagues</button>
          <button data-go="#/competitions" class="${state.route.startsWith("#/competitions") ? "active" : ""}">Competitions</button>
          <button data-go="#/challenges" class="${state.route.startsWith("#/challenges") ? "active" : ""}">Challenges</button>
          <button id="logout" class="ghost">Log out</button>
        </nav>
      </header>
      <main class="page">
        ${state.error ? `<div class="banner">${escapeHtml(state.error)}</div>` : ""}
        ${state.notice ? `<div class="banner ok">${escapeHtml(state.notice)}</div>` : ""}
        ${content}
      </main>
    </div>`;
}

function bindShell() {
  document.querySelectorAll("[data-go]").forEach((button) => {
    button.onclick = () => go(button.dataset.go);
  });
  const logout = document.querySelector("#logout");
  if (logout) logout.onclick = () => { saveSession(null); go("#/login"); };
}

function loginView() {
  return `
    <form class="login" id="login-form">
      <h1>Sign in</h1>
      <p class="muted">Uses your Kickbase email login. Chat, ads, the shop, and purchases are not part of this desk.</p>
      ${state.error ? `<div class="banner">${escapeHtml(state.error)}</div>` : ""}
      <label for="email">Email</label>
      <input id="email" name="email" type="email" autocomplete="username" required>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <div class="row" style="margin-top:16px">
        <button class="primary" type="submit">Sign in</button>
      </div>
    </form>`;
}

function bindLogin() {
  document.querySelector("#login-form").onsubmit = async (event) => {
    event.preventDefault();
    state.error = "";
    const form = event.currentTarget;
    try {
      const data = await api("/v4/user/login", {
        method: "POST",
        auth: false,
        body: { em: form.email.value.trim(), pass: form.password.value },
      });
      if (!data?.tkn) throw new Error(data?.errMsg || "Login did not return a token.");
      saveSession({
        tkn: data.tkn,
        rtkn: data.rtkn,
        tknex: data.tknex,
        apiurl: data.apiurl || "https://api.kickbase.com",
        user: data.u || null,
      });
      go("#/leagues");
    } catch (error) {
      state.error = error.message;
      render();
    }
  };
}

function leaguesShell() {
  return `<section class="section"><h2>Your leagues</h2><div id="content" class="grid"><p class="muted">Loading leagues…</p></div></section>`;
}

async function loadLeagues() {
  const content = document.querySelector("#content");
  try {
    const data = await api("/v4/leagues");
    const leagues = listsIn(data);
    if (!leagues.length) {
      content.outerHTML = `<p class="muted">No leagues came back.</p>`;
      return;
    }
    content.innerHTML = leagues.map((league) => `
      <button class="card" data-go="#/league/${escapeHtml(league.i)}">
        <h3>${escapeHtml(league.n || "League")}</h3>
        <div class="stats">
          <span>Place ${text(league.pl)}</span>
          <span>Squad ${text(league.lpc)}/${text(league.clpc)}</span>
          <span>${money(league.tv)}</span>
        </div>
        <span class="muted">Budget ${money(league.b)}</span>
      </button>`).join("");
    bindShell();
  } catch (error) {
    state.error = error.message;
    render();
  }
}

function leagueShell(parts) {
  const id = parts[1];
  if (parts[2] === "player") {
    return `
      <section class="section">
        <button class="ghost" data-go="#/league/${id}/squad">Back to squad</button>
        <h2 id="league-title">Player</h2>
        <div id="content"><p class="muted">Loading player…</p></div>
      </section>`;
  }
  const tab = parts[2] || "overview";
  const tabs = ["overview", "ranking", "squad", "eleven", "market", "matches"];
  return `
    <section class="section">
      <h2 id="league-title">League</h2>
      <div class="tabs">
        ${tabs.map((name) => `<button data-go="#/league/${id}/${name}" class="${tab === name ? "active" : ""}">${name[0].toUpperCase()}${name.slice(1)}</button>`).join("")}
      </div>
      <div id="content"><p class="muted">Loading…</p></div>
    </section>`;
}

async function loadLeague(parts) {
  const id = parts[1];
  const tab = parts[2] || "overview";
  const playerIdFromRoute = parts[2] === "player" ? parts[3] : null;
  const content = document.querySelector("#content");
  try {
    if (playerIdFromRoute) {
      await showPlayer(id, playerIdFromRoute, parts[4] || "overview", content, parts[5]);
      return;
    }
    const me = await cached(`/v4/leagues/${id}/me`, `me:${id}`);
    const title = document.querySelector("#league-title");
    if (title) title.textContent = me.lnm || me.leagueName || "League";
    if (tab === "ranking") await showRanking(id, content);
    else if (tab === "squad") await showSquad(id, content);
    else if (tab === "eleven") await showEleven(id, content);
    else if (tab === "market") await showMarket(id, content, me);
    else if (tab === "matches") await showMatches(id, me, content);
    else await showOverview(id, me, content);
  } catch (error) {
    content.innerHTML = `<div class="banner">${escapeHtml(error.message)}</div>`;
  }
}

async function cached(path, key) {
  if (!state.cache[key]) state.cache[key] = await api(path);
  return state.cache[key];
}

async function showOverview(id, me, content) {
  const overview = await api(`/v4/leagues/${id}/overview`);
  const budget = await api(`/v4/leagues/${id}/me/budget`).catch(() => null);
  content.innerHTML = `
    <div class="split">
      <article class="card">
        <h3>${escapeHtml(overview.lnm || me.lnm || "League")}</h3>
        <p>${escapeHtml(overview.d || "")}</p>
        <div class="stats">
          <span>${escapeHtml(overview.cpn || "Competition")}</span>
          <span>${text(overview.mgc)} managers</span>
          <span>Lineup ${text(overview.clpc)}</span>
          <span>${overview.adm ? "You are admin" : "Member"}</span>
        </div>
      </article>
      <article class="card">
        <h3>Budget</h3>
        <strong>${money(budget?.b ?? me.b)}</strong>
        <span class="muted">If all offers accepted ${money(budget?.pbaa)}</span>
        <span class="muted">If all sold ${money(budget?.pbas)}</span>
      </article>
    </div>`;
}

function rankingRow(user, index) {
  return `<tr>
    <td>${text(user.spl || user.pl || index + 1)}</td>
    <td><div class="player">${photo(user.uim)}<span>${escapeHtml(user.n || user.unm || "Manager")}</span></div></td>
    <td>${text(user.sp)}</td>
    <td>${text(user.mdp)}</td>
    <td>${money(user.tv)}</td>
  </tr>`;
}

async function showRanking(id, content) {
  const data = await api(`/v4/leagues/${id}/ranking`);
  const users = listsIn(data);
  content.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Place</th><th>Manager</th><th>Season</th><th>Matchday</th><th>Team value</th></tr></thead>
        <tbody>${users.map(rankingRow).join("") || `<tr><td colspan="5">No ranking.</td></tr>`}</tbody>
      </table>
    </div>`;
}

function playerCells(player, leagueId, mode) {
  const id = playerId(player);
  const name = playerName(player);
  const listed = Boolean(player.iotm || player.iposl || player.ofc || (mode === "squad" && player.prc));
  const action = mode === "squad"
    ? `<button class="ghost" data-go="#/league/${leagueId}/player/${escapeHtml(id)}/transfer">${listed ? "Offers" : "Sell"}</button>`
    : mode === "market"
      ? `<button class="ghost" data-go="#/league/${leagueId}/player/${escapeHtml(id)}/transfer">Offer</button>`
      : "";
  return `<tr>
    <td><span class="pos">${escapeHtml(positionLabel(player))}</span></td>
    <td><button class="ghost player-link" data-go="#/league/${leagueId}/player/${escapeHtml(id)}">${photo(player.pim)}<span>${escapeHtml(name)}</span></button></td>
    <td>${text(player.p ?? player.tp ?? player.ap)}</td>
    <td>${money(player.mv ?? player.prc)}</td>
    <td>${action || text(player.stxt || player.st || player.mdst || player.lst)}</td>
  </tr>`;
}

async function showSquad(id, content) {
  const userId = state.session?.user?.id;
  const data = userId
    ? await api(`/v4/leagues/${id}/managers/${userId}/squad`)
    : await api(`/v4/leagues/${id}/squad`);
  const players = listsIn(data);
  content.innerHTML = playerTable(players, id, data.unm ? `${data.unm}'s squad` : "Squad", "squad");
  bindShell();
}

async function showEleven(id, content) {
  const data = await api(`/v4/leagues/${id}/teamcenter/myeleven`);
  const players = listsIn(data);
  const groups = { 1: [], 2: [], 3: [], 4: [] };
  for (const player of players) {
    const line = groups[player.pos] || groups[4];
    line.push(player);
  }
  const known = [1, 2, 3, 4].filter((pos) => groups[pos]?.length);
  if (!players.length) {
    content.innerHTML = `<p class="muted">No eleven was returned. Open Squad to see the full roster.</p>`;
    return;
  }
  content.innerHTML = `
    <div class="pitch">
      ${(known.length ? known : [0]).map((pos) => `
        <div class="line">
          ${(groups[pos] || players).map((player) => `
            <button class="chip" data-go="#/league/${id}/player/${escapeHtml(playerId(player))}">
              ${photo(player.pim, "chip-photo")}
              <strong>${escapeHtml(playerName(player))}</strong>
              <span>${escapeHtml(positionLabel(player))} · ${text(player.p)} pts</span>
            </button>`).join("")}
        </div>`).join("")}
    </div>
    ${playerTable(players, id, "Matchday eleven")}`;
  bindShell();
}

function playerTable(players, leagueId, title, mode) {
  return `
    <div class="table-wrap" style="margin-top:14px">
      <h3>${escapeHtml(title)}</h3>
      <table>
        <thead><tr><th>Pos</th><th>Player</th><th>Points</th><th>Value</th><th>Status</th></tr></thead>
        <tbody>${players.map((player) => playerCells(player, leagueId, mode)).join("") || `<tr><td colspan="5">No players.</td></tr>`}</tbody>
      </table>
    </div>`;
}

async function showMarket(id, content, me) {
  const data = await api(`/v4/leagues/${id}/market`);
  const players = listsIn(data);
  content.innerHTML = `
    <p class="muted">Budget ${money(me.b)}. These players belong to other managers. Open one to place a buy offer. To sell someone from your own squad, use Sell on the Squad tab.</p>
    ${playerTable(players, id, "Transfer market", "market")}`;
  bindShell();
}

async function showMatches(id, me, content) {
  const competitionId = me.cpi;
  if (!competitionId) {
    content.innerHTML = `<p class="muted">This league has no competition id.</p>`;
    return;
  }
  const [table, matchdays] = await Promise.all([
    api(`/v4/competitions/${competitionId}/table`),
    api(`/v4/competitions/${competitionId}/matchdays`).catch(() => null),
  ]);
  const clubs = listsIn(table);
  const fixtures = listsIn(matchdays);
  content.innerHTML = `
    <div class="table-wrap">
      <h3>Table</h3>
      <table>
        <thead><tr><th>#</th><th>Club</th><th>Pts</th><th>GD</th><th>Pld</th></tr></thead>
        <tbody>
          ${clubs.map((club, index) => `<tr>
            <td>${text(club.cpl || index + 1)}</td>
            <td><div class="player">${photo(club.tim, "crest")}<span>${escapeHtml(club.tn || "Club")}</span></div></td>
            <td>${text(club.cp ?? club.sp)}</td>
            <td>${text(club.gd)}</td>
            <td>${text(club.mc)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div class="table-wrap" style="margin-top:14px">
      <h3>Fixtures</h3>
      <table>
        <thead><tr><th>Day</th><th>Match</th><th>Score</th><th>Status</th></tr></thead>
        <tbody>
          ${fixtures.map((match) => `<tr>
            <td>${text(match.day)}</td>
            <td>${escapeHtml(match.t1sy || match.t1 || "")} – ${escapeHtml(match.t2sy || match.t2 || "")}</td>
            <td>${text(match.t1g)}:${text(match.t2g)}</td>
            <td>${escapeHtml(match.mtd || text(match.st))}</td>
          </tr>`).join("") || `<tr><td colspan="4">No fixtures in this payload.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function fullName(player) {
  const first = player.fn || "";
  const last = player.ln || "";
  return `${first} ${last}`.trim() || playerName(player);
}

function statCard(label, value, extra = "") {
  return `<article class="stat"><strong>${value}</strong><span>${escapeHtml(label)}</span>${extra}</article>`;
}

const STATUS_LABELS = {
  0: "Fit",
  1: "Injured",
  2: "Doubtful",
  4: "Rehab",
  8: "Red card",
  16: "Yellow-red",
  32: "Suspended",
  64: "Not in squad",
  128: "Not in league",
  256: "Absent",
};

function statusLabel(player) {
  if (player.stxt) return player.stxt;
  return STATUS_LABELS[player.st] || "Status";
}

function sideName(match, side, names) {
  const id = match[side];
  return names?.[String(id)] || match[`${side}sy`] || (Number.isNaN(Number(id)) ? id : "") || "";
}

function matchList(items, names) {
  const matches = (Array.isArray(items) ? items : []).filter((item) => item && (item.day != null || item.t1 || item.t1sy || item.mdln));
  if (!matches.length) return "";
  return `<div class="fixtures">${matches.slice(0, 6).map((match) => `
    <article class="fixture">
      <span>${escapeHtml(match.mdln || `Matchday ${text(match.day)}`)}</span>
      <strong>${photo(match.t1im, "crest")}<span>${escapeHtml(sideName(match, "t1", names))}</span> ${text(match.t1g)}:${text(match.t2g)} <span>${escapeHtml(sideName(match, "t2", names))}</span>${photo(match.t2im, "crest")}</strong>
    </article>`).join("")}</div>`;
}

function formDots(history) {
  const points = (Array.isArray(history) ? history : []).map((item) => Number(item?.p ?? item)).filter(Number.isFinite).slice(-5);
  if (!points.length) return "";
  return `<div class="form">${points.map((point) => `<span class="dot ${point >= 150 ? "high" : point >= 80 ? "mid" : "low"}" title="${point}"></span>`).join("")}</div>`;
}

function performanceView(data, player) {
  const seasons = listsIn(data);
  const season = [...seasons].reverse().find((item) => Array.isArray(item?.ph) && item.ph.length) || seasons.at(-1) || {};
  const allMatches = Array.isArray(season.ph) ? season.ph.filter((item) => item && typeof item === "object") : seasons.filter((item) => item && item.p != null);
  let lastPlayed = -1;
  allMatches.forEach((item, index) => {
    if (Number(item.p) > 0) lastPlayed = index;
  });
  const matches = lastPlayed >= 0 ? allMatches.slice(0, lastPlayed + 3) : allMatches.slice(0, 8);
  const scored = matches.map((item) => Number(item.p)).filter(Number.isFinite);
  const max = Math.max(1, ...scored);
  const minutes = allMatches.map((item) => Number(String(item.mp || "").replace(/[^\d]/g, ""))).filter((value) => value > 0 && value <= 130);
  const averageMinutes = minutes.length ? Math.round(minutes.reduce((sum, value) => sum + value, 0) / minutes.length) : null;
  return `
    <p class="muted">${escapeHtml(season.ti || season.n || "Season")}</p>
    <div class="bars">
      ${matches.map((item) => {
        const points = Number(item.p);
        const height = Number.isFinite(points) ? Math.max(8, Math.round((points / max) * 160)) : 8;
        const tone = points >= 150 ? "high" : points >= 80 ? "mid" : "low";
        return `<article class="bar">
          <span>${photo(item.t1im, "crest")}${photo(item.t2im, "crest")}</span>
          <div class="fill ${tone}" style="height:${height}px"></div>
          <strong>${Number.isFinite(points) ? points : "–"}</strong>
          <span>${escapeHtml(item.mp || item.pt || "")}</span>
        </article>`;
      }).join("") || `<p class="muted">No matchday points in this response.</p>`}
    </div>
    <div class="stat-grid">
      ${statCard("Avg points", text(player.ap))}
      ${statCard("Total points", text(player.tp ?? player.p))}
      ${statCard("Avg minutes", averageMinutes == null ? "–" : String(averageMinutes))}
    </div>`;
}

function valueChart(points) {
  const values = points.map((item) => Number(item.mv)).filter(Number.isFinite);
  if (values.length < 2) return `<p class="muted">No market-value history for this range.</p>`;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const width = 640;
  const height = 200;
  const pad = 12;
  const coords = values.map((value, index) => {
    const x = pad + (index / (values.length - 1)) * (width - pad * 2);
    const y = pad + (1 - (value - min) / span) * (height - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return `<svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Market value"><polyline fill="none" stroke="#ff7a3c" stroke-width="3" points="${coords.join(" ")}" /></svg>`;
}

function valueView(data, timeframe, leagueId, playerIdValue) {
  const points = listsIn(data);
  const ranges = [{ id: "92", label: "3M" }, { id: "365", label: "1Y" }];
  return `
    <div class="row">
      <strong>${money(points.at(-1)?.mv)}</strong>
      <div class="tabs">
        ${ranges.map((range) => `<button data-go="#/league/${leagueId}/player/${playerIdValue}/value/${range.id}" class="${String(timeframe) === range.id ? "active" : ""}">${range.label}</button>`).join("")}
      </div>
    </div>
    ${valueChart(points)}
    <div class="stat-grid">
      ${statCard("Low", money(data.lmv))}
      ${statCard("High", money(data.hmv))}
      ${data.trp ? statCard("Buy price", money(data.trp)) : ""}
      ${data.prlo != null ? statCard("Profit", signedMoney(data.prlo)) : ""}
    </div>`;
}

function transferView(player, transfer, owned) {
  const offers = Array.isArray(transfer?.ofs) ? transfer.ofs : [];
  const listed = Boolean(owned && (transfer?.iotm || transfer?.iposl || player?.iposl || transfer?.prc));
  const expires = countdown(transfer?.exs);
  const yourOffer = !owned && transfer?.uoid;
  const priceField = `<label for="offer-price">Price</label><input id="offer-price" inputmode="numeric" autocomplete="off" required value="${escapeHtml(groupedDigits(player?.mv || ""))}">`;
  let form = "";
  if (owned && listed) {
    form = `
      <p>Listed for <strong>${money(transfer?.prc)}</strong>${expires ? ` · ${escapeHtml(expires)} left` : ""}</p>
      <button class="danger" id="unlist" type="button">Remove from market</button>`;
  } else if (owned) {
    form = `<form id="sell-form">${priceField}<button class="primary" type="submit">List for sale</button></form>`;
  } else if (yourOffer) {
    form = `<p>Your offer: <strong>${money(transfer.uop)}</strong></p><button class="danger" id="withdraw" type="button">Withdraw offer</button>`;
  } else {
    form = `<form id="buy-form">${priceField}<button class="primary" type="submit">Place offer</button></form><p class="muted">Budget stays on the market. ${expires ? `${escapeHtml(expires)} left on this listing.` : ""}</p>`;
  }
  return `
    <div class="split">
      <article class="card">
        <h3>${owned ? "Sell player" : "Buy player"}</h3>
        <p class="muted">${owned ? "This player is in your squad, so the price is what other managers can offer." : `Owner ${escapeHtml(transfer?.onm || player?.onm || "–")}`}</p>
        ${form}
      </article>
      <article class="card">
        <h3>Offers</h3>
        ${offers.length ? offers.map((offer) => `
          <div class="offer-row">
            ${photo(offer.uim)}
            <span>${escapeHtml(String(offer.u || "") === userId() ? "You" : (offer.unm || "Manager"))}</span>
            <strong>${money(offer.uop)}</strong>
            ${owned && offer.uoid ? `<button class="primary" data-offer="accept" data-id="${escapeHtml(offer.uoid)}">Accept</button><button class="ghost" data-offer="decline" data-id="${escapeHtml(offer.uoid)}">Decline</button>` : ""}
          </div>`).join("") : `<p class="muted">No offers yet.</p>`}
      </article>
    </div>`;
}

function overviewView(player, names) {
  const change = signedMoney(player.tfhmvt);
  const changeClass = Number(player.tfhmvt) < 0 ? "down" : "up";
  const appearances = player.smc != null || player.smdc != null ? `${text(player.smc)}/${text(player.smdc)}` : "–";
  return `
    ${formDots(player.ph)}
    <div class="stat-grid">
      ${statCard("Points", text(player.tp ?? player.p), player.g != null ? `<em>×${text(player.g)} goals</em>` : "")}
      ${statCard("Market value", money(player.mv), `<em class="${changeClass}">${change} since yesterday</em>`)}
      ${statCard("Avg points", text(player.ap), player.a != null ? `<em>×${text(player.a)} assists</em>` : "")}
      ${statCard("Appearances", appearances, player.ismc != null ? `<em>×${text(player.ismc)} starts</em>` : "")}
    </div>
    ${matchList(player.mdsum, names)}
    <article class="card status-card">
      <h3>${escapeHtml(statusLabel(player))}</h3>
      <p class="muted">${escapeHtml(relativeTime(player.ts || player.dt))}</p>
      ${player.prob != null ? `<div class="meter"><span style="width:${Math.max(0, Math.min(100, Number(player.prob)))}%"></span></div><span class="muted">Start probability ${text(player.prob)}%</span>` : ""}
    </article>`;
}

async function showPlayer(leagueId, id, tab, content, range) {
  const actualTab = ["overview", "performance", "value", "transfer"].includes(tab) ? tab : "overview";
  const valueRange = ["92", "365"].includes(String(range)) ? String(range) : "92";
  const squadPath = userId()
    ? `/v4/leagues/${leagueId}/managers/${userId()}/squad`
    : `/v4/leagues/${leagueId}/squad`;
  const [data, performance, transfer, scouts, squad] = await Promise.all([
    cached(`/v4/leagues/${leagueId}/players/${id}`, `player:${leagueId}:${id}`),
    cached(`/v4/leagues/${leagueId}/players/${id}/performance`, `perf:${leagueId}:${id}`).catch((error) => ({ error })),
    cached(`/v4/leagues/${leagueId}/players/${id}/transfers`, `xfer:${leagueId}:${id}`).catch((error) => ({ error })),
    api(`/v4/leagues/${leagueId}/scoutedplayers`).catch(() => null),
    api(squadPath).catch(() => null),
  ]);
  const history = actualTab === "value"
    ? await cached(`/v4/leagues/${leagueId}/players/${id}/marketValue/${valueRange}`, `value:${leagueId}:${id}:${valueRange}`).catch((error) => ({ error }))
    : null;
  const me = await cached(`/v4/leagues/${leagueId}/me`, `me:${leagueId}`).catch(() => null);
  const table = me?.cpi
    ? await cached(`/v4/competitions/${me.cpi}/table`, `table:${me.cpi}`).catch(() => null)
    : null;
  const clubNames = {};
  for (const club of listsIn(table)) {
    if (club?.tid != null) clubNames[String(club.tid)] = club.tn || "";
  }
  const player = data?.it && !Array.isArray(data.it) ? data.it : data;
  const name = fullName(player);
  const title = document.querySelector("#league-title");
  if (title) title.textContent = player.ln || playerName(player);
  const owned = listsIn(squad).some((item) => String(playerId(item)) === String(id))
    || (userId() && String(player.oui || transfer?.oui || "") === userId());
  const scouted = listsIn(scouts).some((item) => String(item.pi || item.i || playerId(item)) === String(id));
  const tabs = [
    ["overview", "Overview"],
    ["performance", "Performance"],
    ["value", "Value"],
    ["transfer", "Transfer"],
  ];
  const panel = actualTab === "performance"
    ? (performance?.error ? `<div class="banner">${escapeHtml(performance.error.message)}</div>` : performanceView(performance, player))
    : actualTab === "value"
      ? (history?.error ? `<div class="banner">${escapeHtml(history.error.message)}</div>` : valueView(history, valueRange, leagueId, id))
      : actualTab === "transfer"
        ? `${transfer?.error ? `<div class="banner">${escapeHtml(transfer.error.message)}</div>` : ""}${transferView(player, transfer?.error ? {} : transfer, owned)}`
        : overviewView(player, clubNames);
  content.innerHTML = `
    <article class="hero">
      ${photo(player.pim || player.plpim, "portrait")}
      <div>
        <p class="muted">${escapeHtml(player.fn || "")}</p>
        <h3>${escapeHtml(player.ln || name)}</h3>
        <div class="stats">
          <span class="pos">${escapeHtml(positionLabel(player))}</span>
          ${player.shn ? `<span>No. ${escapeHtml(player.shn)}</span>` : ""}
          ${photo(player.tim, "crest")}
          <span>${escapeHtml(player.tn || "")}</span>
        </div>
      </div>
      <button class="ghost" id="scout">${scouted ? "Scouted" : "Scout"}</button>
    </article>
    <div class="tabs">
      ${tabs.map(([name, label]) => `<button data-go="#/league/${leagueId}/player/${id}/${name}" class="${actualTab === name ? "active" : ""}">${label}</button>`).join("")}
    </div>
    ${panel}`;
  bindShell();
  bindPlayerActions(leagueId, id, owned, scouted, transfer);
}

function forgetPlayer(leagueId, id) {
  for (const key of Object.keys(state.cache)) {
    if (key.includes(`:${leagueId}:${id}`) || key.includes(`:${id}`)) delete state.cache[key];
  }
}

function bindPlayerActions(leagueId, id, owned, scouted, transfer) {
  bindPriceField(document.querySelector("#offer-price"));
  const scout = document.querySelector("#scout");
  if (scout) {
    scout.onclick = async () => {
      try {
        await api(`/v4/leagues/${leagueId}/scoutedplayers/${id}`, { method: scouted ? "DELETE" : "POST" });
        state.notice = scouted ? "Removed from scouting." : "Added to scouting.";
        render();
      } catch (error) {
        state.error = error.message;
        render();
      }
    };
  }
  const sell = document.querySelector("#sell-form");
  if (sell) {
    sell.onsubmit = async (event) => {
      event.preventDefault();
      try {
        const price = priceNumber(document.querySelector("#offer-price").value);
        if (!Number.isFinite(price) || price < 1) throw new Error("Enter a price.");
        await api(`/v4/leagues/${leagueId}/market`, {
          method: "POST",
          body: { pi: id, prc: price },
        });
        forgetPlayer(leagueId, id);
        state.notice = "Listed on the market.";
        render();
      } catch (error) {
        state.error = error.message;
        render();
      }
    };
  }
  const buy = document.querySelector("#buy-form");
  if (buy) {
    buy.onsubmit = async (event) => {
      event.preventDefault();
      try {
        const price = priceNumber(document.querySelector("#offer-price").value);
        if (!Number.isFinite(price) || price < 1) throw new Error("Enter a price.");
        await api(`/v4/leagues/${leagueId}/market/${id}/offers`, {
          method: "POST",
          body: { price },
        });
        forgetPlayer(leagueId, id);
        state.notice = "Offer sent.";
        render();
      } catch (error) {
        state.error = error.message;
        render();
      }
    };
  }
  const unlist = document.querySelector("#unlist");
  if (unlist) {
    unlist.onclick = async () => {
      try {
        await api(`/v4/leagues/${leagueId}/market/${id}`, { method: "DELETE" });
        forgetPlayer(leagueId, id);
        state.notice = "Removed from the market.";
        render();
      } catch (error) {
        state.error = error.message;
        render();
      }
    };
  }
  const withdraw = document.querySelector("#withdraw");
  if (withdraw && transfer?.uoid) {
    withdraw.onclick = async () => {
      try {
        await api(`/v4/leagues/${leagueId}/market/${id}/offers/${transfer.uoid}`, { method: "DELETE" });
        forgetPlayer(leagueId, id);
        state.notice = "Offer withdrawn.";
        render();
      } catch (error) {
        state.error = error.message;
        render();
      }
    };
  }
  document.querySelectorAll("[data-offer]").forEach((button) => {
    button.onclick = async () => {
      try {
        await api(`/v4/leagues/${leagueId}/market/${id}/offers/${button.dataset.id}/${button.dataset.offer}`, { method: "POST" });
        forgetPlayer(leagueId, id);
        state.notice = button.dataset.offer === "accept" ? "Offer accepted." : "Offer declined.";
        render();
      } catch (error) {
        state.error = error.message;
        render();
      }
    };
  });
}

function competitionsShell() {
  return `<section class="section"><h2>Competitions</h2><div id="content"><p class="muted">Loading…</p></div></section>`;
}

async function loadCompetitions(parts) {
  const content = document.querySelector("#content");
  try {
    const data = await api("/v4/competitions");
    const competitions = listsIn(data);
    if (parts[1]) {
      const table = await api(`/v4/competitions/${parts[1]}/table`);
      content.innerHTML = `
        <button class="ghost" data-go="#/competitions">All competitions</button>
        ${clubsTable(listsIn(table))}`;
      bindShell();
      return;
    }
    content.innerHTML = `<div class="grid">${competitions.map((item) => `
      <button class="card" data-go="#/competitions/${escapeHtml(item.i)}">
        <h3>${escapeHtml(item.n || "Competition")}</h3>
        <span class="muted">${item.il ? "Live" : "Season"}</span>
      </button>`).join("") || `<p class="muted">No competitions.</p>`}</div>`;
    bindShell();
  } catch (error) {
    content.innerHTML = `<div class="banner">${escapeHtml(error.message)}</div>`;
  }
}

function clubsTable(clubs) {
  return `<div class="table-wrap"><table>
    <thead><tr><th>#</th><th>Club</th><th>Pts</th><th>GD</th></tr></thead>
    <tbody>${clubs.map((club, index) => `<tr><td>${text(club.cpl || index + 1)}</td><td>${escapeHtml(club.tn || "")}</td><td>${text(club.cp ?? club.sp)}</td><td>${text(club.gd)}</td></tr>`).join("")}</tbody>
  </table></div>`;
}

function challengesShell() {
  return `<section class="section"><h2>Challenges</h2><div id="content"><p class="muted">Loading lobby…</p></div></section>`;
}

async function loadChallenges() {
  const content = document.querySelector("#content");
  try {
    const [overview, live] = await Promise.all([
      api("/v4/challenges/lobby/overview"),
      api("/v4/challenges/lobby/overview/live").catch(() => null),
    ]);
    const cards = [...listsIn(overview), ...listsIn(live)];
    content.innerHTML = cards.length
      ? `<div class="grid">${cards.map((item) => `
          <article class="card">
            <h3>${escapeHtml(item.n || item.name || item.ti || "Challenge")}</h3>
            <div class="stats">
              <span>${escapeHtml(item.cpi || item.ch || "")}</span>
              <span>${text(item.sp || item.mdp || item.p)}</span>
            </div>
          </article>`).join("")}</div>`
      : `<pre class="card">${escapeHtml(JSON.stringify(overview, null, 2).slice(0, 4000))}</pre>`;
  } catch (error) {
    content.innerHTML = `<div class="banner">${escapeHtml(error.message)}</div>`;
  }
}

render();
