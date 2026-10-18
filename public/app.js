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

function render() {
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
      await showPlayer(id, playerIdFromRoute, content);
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
    <td><div class="player">${user.uim ? `<img alt="" src="${escapeHtml(user.uim)}">` : ""}<span>${escapeHtml(user.n || user.unm || "Manager")}</span></div></td>
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

function playerCells(player, leagueId) {
  const id = playerId(player);
  const name = playerName(player);
  return `<tr>
    <td><span class="pos">${escapeHtml(positionLabel(player))}</span></td>
    <td><button class="ghost" data-go="#/league/${leagueId}/player/${escapeHtml(id)}">${escapeHtml(name)}</button></td>
    <td>${text(player.p ?? player.ap)}</td>
    <td>${money(player.mv ?? player.prc)}</td>
    <td>${text(player.st ?? player.mdst ?? player.lst)}</td>
  </tr>`;
}

async function showSquad(id, content) {
  const userId = state.session?.user?.id;
  const data = userId
    ? await api(`/v4/leagues/${id}/managers/${userId}/squad`)
    : await api(`/v4/leagues/${id}/squad`);
  const players = listsIn(data);
  content.innerHTML = playerTable(players, id, data.unm ? `${data.unm}'s squad` : "Squad");
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
              <strong>${escapeHtml(playerName(player))}</strong>
              <span>${escapeHtml(positionLabel(player))} · ${text(player.p)} pts</span>
            </button>`).join("")}
        </div>`).join("")}
    </div>
    ${playerTable(players, id, "Matchday eleven")}`;
  bindShell();
}

function playerTable(players, leagueId, title) {
  return `
    <div class="table-wrap" style="margin-top:14px">
      <h3>${escapeHtml(title)}</h3>
      <table>
        <thead><tr><th>Pos</th><th>Player</th><th>Points</th><th>Value</th><th>Status</th></tr></thead>
        <tbody>${players.map((player) => playerCells(player, leagueId)).join("") || `<tr><td colspan="5">No players.</td></tr>`}</tbody>
      </table>
    </div>`;
}

async function showMarket(id, content, me) {
  const data = await api(`/v4/leagues/${id}/market`);
  const players = listsIn(data);
  content.innerHTML = `
    <p class="muted">Budget ${money(me.b)}. Enter a price and place an offer. Selling and offer management stay on the same market endpoints as the phone app.</p>
    ${playerTable(players, id, "Transfer market")}
    <form id="offer-form" class="card">
      <h3>Place an offer</h3>
      <label for="offer-player">Player id</label>
      <input id="offer-player" required placeholder="From the player page">
      <label for="offer-price">Price</label>
      <input id="offer-price" type="number" min="1" required>
      <button class="primary" type="submit">Offer</button>
    </form>`;
  bindShell();
  document.querySelector("#offer-form").onsubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await api(`/v4/leagues/${id}/market/${encodeURIComponent(form.querySelector("#offer-player").value.trim())}/offers`, {
        method: "POST",
        body: { price: Number(form.querySelector("#offer-price").value) },
      });
      state.notice = "Offer sent.";
      state.cache = {};
      render();
    } catch (error) {
      state.error = error.message;
      render();
    }
  };
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
            <td><div class="player">${club.tim ? `<img class="crest" alt="" src="${escapeHtml(club.tim)}">` : ""}<span>${escapeHtml(club.tn || "Club")}</span></div></td>
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

async function showPlayer(leagueId, id, content) {
  const data = await api(`/v4/leagues/${leagueId}/players/${id}`);
  const player = data?.it && !Array.isArray(data.it) ? data.it : data;
  const name = playerName(player);
  document.querySelector("#league-title").textContent = name;
  content.innerHTML = `
    <article class="card">
      <div class="player">
        ${player.pim ? `<img alt="" src="${escapeHtml(player.pim)}">` : ""}
        <div>
          <h3>${escapeHtml(name)}</h3>
          <div class="stats">
            <span class="pos">${escapeHtml(positionLabel(player))}</span>
            <span>${money(player.mv)}</span>
            <span>${text(player.p)} pts</span>
            <span>Owner ${escapeHtml(player.onm || "–")}</span>
          </div>
        </div>
      </div>
      <form id="player-offer" class="offer">
        <input id="offer-price" type="number" min="1" placeholder="Offer price" required>
        <button class="primary" type="submit">Place offer</button>
      </form>
    </article>`;
  document.querySelector("#player-offer").onsubmit = async (event) => {
    event.preventDefault();
    try {
      await api(`/v4/leagues/${leagueId}/market/${id}/offers`, {
        method: "POST",
        body: { price: Number(document.querySelector("#offer-price").value) },
      });
      state.notice = "Offer sent.";
      render();
    } catch (error) {
      state.error = error.message;
      render();
    }
  };
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
