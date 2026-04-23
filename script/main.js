// ── MAIN.JS ───────────────────────────────────────────────────────────────
// Depends on (loaded before this in index.html):
//   tags.js          → window.TAGS
//   subjects/*.js    → window.PHY_DATA, window.CHEM_DATA, window.MATH_DATA
//   storage.js       → Storage  (localStorage cache only)
//   sync.js          → Sync     (Supabase source of truth)
//   auth.js          → Auth

// ── DATA MAP ──────────────────────────────────────────────────────────────
const DATA = {
  physics:   window.PHY_DATA,
  chemistry: window.CHEM_DATA,
  maths:     window.MATH_DATA,
};

// ── PROGRESS CONFIG ───────────────────────────────────────────────────────
const STATUS_CONFIG = {
  null:        { label: '—',  cls: '',                emoji: '' },
  theory:      { label: 'T',  cls: 'status--theory',   emoji: '📖' },
  practiced:   { label: 'P',  cls: 'status--practiced', emoji: '✏️' },
  adv:         { label: 'A',  cls: 'status--adv',       emoji: '⚡' },
};

// ── STATE ─────────────────────────────────────────────────────────────────
let activeSubject   = 'physics';
let searchQuery     = '';
let activeFilters   = new Set();
let progressFilter  = null;
let filterOpen      = false;
let activeView      = 'stats';

// The user whose data is currently being displayed.
// Defaults to last-viewed (localStorage) or Rishit if no history.
let viewingUserId   = null;

// ── VIEWER INIT ───────────────────────────────────────────────────────────
function initViewingUser() {
  const users     = Auth.getUserList();
  const lastViewed = Storage.getLastViewedUserId();

  // If we have a valid last-viewed id, use it
  if (lastViewed && users.some(u => u.id === lastViewed)) {
    viewingUserId = lastViewed;
    return;
  }

  // If the logged-in user is an editor, default to their own profile
  const editorId = Auth.getEditorId();
  if (editorId) {
    viewingUserId = editorId;
    return;
  }

  // Otherwise default to first user (Rishit)
  viewingUserId = users[0].id;
}

function setViewingUser(userId) {
  viewingUserId = userId;
  Storage.setLastViewedUserId(userId);
  // Invalidate test scores cache when switching users
  _testScoresCache = null;
}

// ── VIEWER PICKER (shown to non-editors / visitors) ───────────────────────
// Returns HTML for the picker modal overlay.
function buildPickerHTML() {
  const users = Auth.getUserList();

  const cards = users.map(u => {
    // Compute overall % for this user from cache
    const subjects = ['physics', 'chemistry', 'maths'];
    let total = 0, touched = 0;
    subjects.forEach(subj => {
      const chapters = DATA[subj];
      chapters.forEach((ch, chIdx) => {
        ch.topics.forEach((_, ti) => {
          total++;
          if (Storage.cacheGet(u.id, subj, chIdx, ti) !== null) touched++;
        });
      });
    });
    const pct = total > 0 ? Math.round(touched / total * 100) : 0;

    return `
      <button class="picker-card" data-user-id="${u.id}">
        <div class="picker-name">${u.name}</div>
        <div class="picker-pct">${pct}<span class="picker-pct-sym">%</span></div>
        <div class="picker-sub">overall progress</div>
      </button>`;
  }).join('');

  return `
    <div class="picker-overlay" id="pickerOverlay">
      <div class="picker-modal">
        <div class="picker-title">whose progress?</div>
        ${cards}
      </div>
    </div>`;
}

function showPicker() {
  // Remove existing if any
  document.getElementById('pickerOverlay')?.remove();
  document.body.insertAdjacentHTML('beforeend', buildPickerHTML());

  document.querySelectorAll('.picker-card').forEach(btn => {
    btn.addEventListener('click', () => {
      setViewingUser(btn.dataset.userId);
      document.getElementById('pickerOverlay')?.remove();
      renderView();
      updateViewerBadge();
    });
  });
}

// ── VIEWER BADGE (shown in header when viewing someone's profile) ──────────
function updateViewerBadge() {
  let badge = document.getElementById('viewerBadge');
  const users = Auth.getUserList();
  const user  = users.find(u => u.id === viewingUserId);
  if (!user) return;

  const editorId  = Auth.getEditorId();
  const isOwnView = editorId === viewingUserId;

  if (!badge) {
    // Inject badge after authBtn
    const authWrap = document.getElementById('authBtn');
    const el = document.createElement('div');
    el.id = 'viewerBadge';
    el.className = 'viewer-badge';
    authWrap.insertAdjacentElement('afterend', el);
    badge = el;
  }

  // Editors see a "switch" option; visitors see "change"
  const canSwitch = Auth.isEditor();
  badge.innerHTML = `
    <span class="viewer-badge-name">${user.name}</span>
    <button class="viewer-badge-switch" id="viewerSwitch">${canSwitch ? 'switch' : 'change'}</button>`;

  document.getElementById('viewerSwitch')?.addEventListener('click', showPicker);
}

// ── RENDER ROUTER ─────────────────────────────────────────────────────────
function renderView() {
  if (activeView === 'stats') {
    renderStats();
  } else {
    render();
  }
}

// ── MAIN RENDER ───────────────────────────────────────────────────────────
function render() {
  const main = document.getElementById('main');
  let chapters = DATA[activeSubject];
  const q = searchQuery.toLowerCase().trim();

  if (activeFilters.size > 0) {
    chapters = chapters.filter(ch => activeFilters.has(ch.tag));
  }

  if (progressFilter) {
    chapters = applyProgressFilter(chapters, activeSubject, progressFilter);
  }

  const filtered = q ? filterData(chapters, q) : chapters;

  if (filtered.length === 0) {
    main.innerHTML = `<div class="no-results">${q ? `no results for "${q}"` : 'nothing here'}</div>`;
    return;
  }

  const progress = Storage.cacheGetSubject(viewingUserId, activeSubject);
  main.innerHTML = filtered.map((ch, ci) => {
    const origIdx = DATA[activeSubject].indexOf(ch);
    return buildChapter(ch, ci, origIdx, q, progress);
  }).join('');
  attachEvents();
}

function applyProgressFilter(chapters, subject, pf) {
  return chapters.filter((ch) => {
    const origIdx = DATA[subject].indexOf(ch);
    const topics  = ch.topics;

    if (pf === 'fully-done') {
      return topics.every((_, ti) =>
        Storage.cacheGet(viewingUserId, subject, origIdx, ti) === 'adv'
      );
    }

    const needStatus  = pf.replace('-pending', '');
    const statusOrder = ['theory', 'practiced', 'adv'];
    const needIdx     = statusOrder.indexOf(needStatus);

    return topics.some((_, ti) => {
      const s    = Storage.cacheGet(viewingUserId, subject, origIdx, ti);
      const sIdx = statusOrder.indexOf(s);
      return sIdx < needIdx;
    });
  });
}

function buildChapter(ch, ci, origIdx, q, progress) {
  const forceOpen  = q !== '';
  const topicsHTML = ch.topics.map((t, ti) => {
    const status = progress[`${origIdx}:${ti}`] || null;
    return buildTopic(t, ti, origIdx, status, q);
  }).join('');

  const tagHTML = ch.tag
    ? `<span class="ch-tag ch-tag--${tagSlug(ch.tag)}">${ch.tag}</span>`
    : '';

  const total    = ch.topics.length;
  const doneAdv  = ch.topics.filter((_, ti) => progress[`${origIdx}:${ti}`] === 'adv').length;
  const donePrac = ch.topics.filter((_, ti) => progress[`${origIdx}:${ti}`] === 'practiced').length;
  const doneTh   = ch.topics.filter((_, ti) => progress[`${origIdx}:${ti}`] === 'theory').length;

  const progressBarHTML = buildProgressBar(total, doneTh, donePrac, doneAdv);

  return `
    <div class="chapter ${forceOpen ? 'open' : ''}" data-subject="${activeSubject}" data-ch-orig="${origIdx}">
      <div class="chapter-header">
        <span class="ch-num">${String(ci + 1).padStart(2,'0')}</span>
        <div class="ch-header-center">
          <span class="ch-name">${highlight(ch.chapter, q)}</span>
          ${progressBarHTML}
        </div>
        ${tagHTML}
        <span class="ch-badge">${doneAdv + donePrac + doneTh}/${total}</span>
        <span class="ch-arrow">▶</span>
      </div>
      <div class="chapter-body">
        <ul class="topic-list">${topicsHTML}</ul>
      </div>
    </div>`;
}

function buildProgressBar(total, th, prac, adv) {
  if (total === 0) return '';
  const thPct   = (th   / total * 100).toFixed(1);
  const pracPct = (prac / total * 100).toFixed(1);
  const advPct  = (adv  / total * 100).toFixed(1);
  return `
    <div class="ch-progress-bar">
      <div class="ch-progress-seg seg--theory"    style="width:${thPct}%"></div>
      <div class="ch-progress-seg seg--practiced" style="width:${pracPct}%"></div>
      <div class="ch-progress-seg seg--adv"       style="width:${advPct}%"></div>
    </div>`;
}

function buildTopic(t, ti, origIdx, status, q) {
  const hasSubs   = t.subtopics && t.subtopics.length > 0;
  const forceOpen = q !== '';
  const arrowHTML = hasSubs ? `<span class="topic-arrow">▶</span>` : '';
  const cfg       = STATUS_CONFIG[status] || STATUS_CONFIG[null];

  const subsHTML = hasSubs
    ? `<ul class="subtopic-list">
        ${t.subtopics.map(s => `<li>${highlight(s, q)}</li>`).join('')}
       </ul>`
    : '';

  return `
    <li class="topic-item ${hasSubs ? '' : 'leaf'} ${forceOpen && hasSubs ? 'open' : ''}"
        data-topic-idx="${ti}" data-ch-orig="${origIdx}">
      <div class="topic-header">
        <span class="topic-dot ${cfg.cls}"></span>
        <span class="topic-name">${highlight(t.name, q)}</span>
        <button class="status-btn ${cfg.cls}" data-topic-idx="${ti}" data-ch-orig="${origIdx}" title="cycle status">
          ${status ? cfg.label : '·'}
        </button>
        ${arrowHTML}
      </div>
      ${subsHTML}
    </li>`;
}

function highlight(text, q) {
  if (!q) return text;
  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="highlight">$1</mark>');
}

function filterData(chapters, q) {
  return chapters.map(ch => {
    const chMatch = ch.chapter.toLowerCase().includes(q);
    const filteredTopics = ch.topics.filter(t =>
      t.name.toLowerCase().includes(q) ||
      (t.subtopics && t.subtopics.some(s => s.toLowerCase().includes(q)))
    );
    if (chMatch) return ch;
    if (filteredTopics.length > 0) return { ...ch, topics: filteredTopics };
    return null;
  }).filter(Boolean);
}

function tagSlug(tag) {
  return tag.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

// ── STATS VIEW ────────────────────────────────────────────────────────────

// Per-user test scores cache: { [userId]: { mains: [], adv: [] } }
let _testScoresCache = null;

async function loadTestScores() {
  if (_testScoresCache) return _testScoresCache;
  const rows = await Sync.fetchScores(viewingUserId);
  const result = { mains: [], adv: [] };
  rows.forEach(r => {
    const entry = { date: r.taken_at.slice(0, 10), score: r.score, id: r.id };
    if (r.subject === 'full' || r.subject === 'adv') {
      result.adv.push(entry);
    } else if (r.subject === 'mains') {
      result.mains.push(entry);
    }
  });
  result.mains.sort((a, b) => a.date.localeCompare(b.date));
  result.adv.sort((a, b) => a.date.localeCompare(b.date));
  _testScoresCache = result;
  return result;
}

function invalidateTestScoresCache() {
  _testScoresCache = null;
}

async function renderStats() {
  const main = document.getElementById('main');

  const subjects     = ['physics', 'chemistry', 'maths'];
  const subjectNames  = { physics: 'Physics', chemistry: 'Chemistry', maths: 'Maths' };
  const subjectColors = { physics: '#5b9cf6', chemistry: '#f97316', maths: '#a78bfa' };

  let totalTopics = 0, totalTheory = 0, totalPrac = 0, totalAdv = 0;

  const subjectCards = subjects.map(subj => {
    const chapters = DATA[subj];
    const progress = Storage.cacheGetSubject(viewingUserId, subj);

    let th = 0, prac = 0, adv = 0, total = 0;
    chapters.forEach((ch, chIdx) => {
      ch.topics.forEach((_, ti) => {
        total++;
        const s = progress[`${chIdx}:${ti}`];
        if (s === 'theory')    th++;
        if (s === 'practiced') prac++;
        if (s === 'adv')       adv++;
      });
    });

    totalTopics += total;
    totalTheory += th;
    totalPrac   += prac;
    totalAdv    += adv;

    const untouched = total - th - prac - adv;
    const pct = total > 0 ? Math.round((adv + prac + th) / total * 100) : 0;

    return { subj, name: subjectNames[subj], color: subjectColors[subj], total, th, prac, adv, untouched, pct };
  });

  const overallPct = totalTopics > 0
    ? Math.round((totalAdv + totalPrac + totalTheory) / totalTopics * 100)
    : 0;

  const testScores     = await loadTestScores();
  const activeTestType = window._activeTestType || 'mains';
  const entriesOpen    = window._testEntriesOpen !== false;
  const dateFrom       = window._testDateFrom || '';
  const dateTo         = window._testDateTo   || '';

  const allEntries = testScores[activeTestType] || [];
  const filteredEntries = allEntries.filter(e => {
    if (dateFrom && e.date < dateFrom) return false;
    if (dateTo   && e.date > dateTo)   return false;
    return true;
  });
  const hasFilter = !!(dateFrom || dateTo);

  // Only show add/delete controls if logged-in user is viewing their OWN profile
  const canEdit = Auth.canEdit(viewingUserId);

  // Get the viewing user's display name for context
  const users = Auth.getUserList();
  const viewingUser = users.find(u => u.id === viewingUserId);

  main.innerHTML = `
    <div class="stats-wrap">

      <!-- ── OVERVIEW CARD ── -->
      <div class="stats-overview-card">
        <div class="stats-overview-top">
          <div class="stats-overview-left">
            <div class="stats-ov-label">overall progress</div>
            <div class="stats-ov-pct">${overallPct}<span class="stats-ov-pct-sym">%</span></div>
            <div class="stats-ov-sub">${totalAdv + totalPrac + totalTheory} of ${totalTopics} topics touched</div>
          </div>
          <div class="stats-ring-wrap">
            ${buildRingSVG(overallPct)}
          </div>
        </div>
        <div class="stats-ov-bar-row">
          <div class="stats-ov-bar">
            <div class="stats-ov-seg seg--theory"    style="width:${(totalTheory / totalTopics * 100).toFixed(1)}%"></div>
            <div class="stats-ov-seg seg--practiced" style="width:${(totalPrac   / totalTopics * 100).toFixed(1)}%"></div>
            <div class="stats-ov-seg seg--adv"       style="width:${(totalAdv    / totalTopics * 100).toFixed(1)}%"></div>
          </div>
        </div>
        <div class="stats-ov-legend">
          <span class="leg leg--theory">T ${totalTheory}</span>
          <span class="leg leg--practiced">P ${totalPrac}</span>
          <span class="leg leg--adv">A ${totalAdv}</span>
          <span class="leg leg--blank">· ${totalTopics - totalTheory - totalPrac - totalAdv}</span>
        </div>
      </div>

      <!-- ── SUBJECT MINI CARDS ── -->
      <div class="stats-subjects-row">
        ${subjectCards.map(c => `
          <div class="stats-subj-card" data-subject="${c.subj}">
            <div class="stats-subj-name">${c.name}</div>
            <div class="stats-subj-pct" style="color:${c.color}">${c.pct}%</div>
            <div class="stats-subj-bar">
              <div class="stats-subj-seg seg--theory"    style="width:${(c.th   / c.total * 100).toFixed(1)}%"></div>
              <div class="stats-subj-seg seg--practiced" style="width:${(c.prac / c.total * 100).toFixed(1)}%"></div>
              <div class="stats-subj-seg seg--adv"       style="width:${(c.adv  / c.total * 100).toFixed(1)}%"></div>
            </div>
            <div class="stats-subj-nums">
              <span class="leg leg--theory">${c.th}</span>
              <span class="leg leg--practiced">${c.prac}</span>
              <span class="leg leg--adv">${c.adv}</span>
              <span class="leg leg--blank">${c.untouched}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- ── TEST SCORES ── -->
      <div class="stats-test-card">
        <div class="stats-test-header">
          <span class="stats-test-title">test scores</span>
          <div class="stats-test-tabs">
            <button class="stats-test-tab ${activeTestType === 'mains' ? 'active' : ''}" data-type="mains">Mains</button>
            <button class="stats-test-tab ${activeTestType === 'adv'   ? 'active' : ''}" data-type="adv">Advanced</button>
          </div>
        </div>

        <!-- date filter row -->
        <div class="score-filter-row">
          <input type="date" id="filterFrom" class="score-input score-date score-filter-date" value="${dateFrom}" placeholder="from" />
          <span class="score-filter-sep">→</span>
          <input type="date" id="filterTo"   class="score-input score-date score-filter-date" value="${dateTo}"   placeholder="to" />
          ${hasFilter ? `<button class="score-filter-clear" id="filterClear">✕ clear</button>` : ''}
        </div>

        <div class="stats-test-graph-wrap">
          ${buildScoreGraph(filteredEntries, activeTestType)}
        </div>

        ${canEdit ? `
        <div class="stats-test-add">
          <input type="date"   id="scoreDate" class="score-input score-date" />
          <input type="number" id="scoreVal"  class="score-input score-val" placeholder="score" min="0" max="${activeTestType === 'mains' ? 300 : 360}" />
          <button class="score-add-btn" id="scoreAddBtn">+ add</button>
        </div>` : ''}

        ${allEntries.length > 0 ? `
        <div class="score-entries-section">
          <button class="score-entries-toggle" id="entriesToggle">
            <span>${filteredEntries.length} entr${filteredEntries.length === 1 ? 'y' : 'ies'}${hasFilter ? ' (filtered)' : ''}</span>
            <span class="score-entries-arrow ${entriesOpen ? 'open' : ''}">▶</span>
          </button>
          ${entriesOpen ? `
          <div class="stats-test-recent">
            ${filteredEntries.slice().reverse().map((e) => `
              <div class="score-entry">
                <span class="score-entry-date">${formatDate(e.date)}</span>
                <span class="score-entry-val">${e.score}</span>
                ${canEdit ? `<button class="score-del-btn" data-id="${e.id}">×</button>` : ''}
              </div>`).join('')}
          </div>` : ''}
        </div>` : ''}
      </div>

    </div>`;

  // ── test tab switching
  main.querySelectorAll('.stats-test-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      window._activeTestType = btn.dataset.type;
      renderStats();
    });
  });

  // ── date filter
  const filterFrom = main.querySelector('#filterFrom');
  const filterTo   = main.querySelector('#filterTo');
  if (filterFrom) filterFrom.addEventListener('change', () => {
    window._testDateFrom = filterFrom.value;
    renderStats();
  });
  if (filterTo) filterTo.addEventListener('change', () => {
    window._testDateTo = filterTo.value;
    renderStats();
  });

  // ── clear date filter
  const filterClear = main.querySelector('#filterClear');
  if (filterClear) filterClear.addEventListener('click', () => {
    window._testDateFrom = '';
    window._testDateTo   = '';
    renderStats();
  });

  // ── collapse toggle
  const entriesToggle = main.querySelector('#entriesToggle');
  if (entriesToggle) entriesToggle.addEventListener('click', () => {
    window._testEntriesOpen = !entriesOpen;
    renderStats();
  });

  // ── add score (own profile only)
  if (canEdit) {
    const addBtn = main.querySelector('#scoreAddBtn');
    if (addBtn) {
      addBtn.addEventListener('click', async () => {
        const dateEl  = main.querySelector('#scoreDate');
        const scoreEl = main.querySelector('#scoreVal');
        const date    = dateEl.value;
        const score   = parseFloat(scoreEl.value);
        if (!date || isNaN(score)) return;

        const type    = window._activeTestType || 'mains';
        const maxScore = type === 'mains' ? 300 : 360;

        addBtn.disabled = true;
        addBtn.textContent = '…';

        await Sync.saveScore(viewingUserId, type, score, maxScore, date);
        invalidateTestScoresCache();
        await renderStats();
      });
    }
  }

  // ── delete score (own profile only)
  if (canEdit) {
    main.querySelectorAll('.score-del-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        await Sync.deleteScore(viewingUserId, id);
        invalidateTestScoresCache();
        await renderStats();
      });
    });
  }
}

function buildRingSVG(pct) {
  const r = 28, cx = 36, cy = 36;
  const circ  = 2 * Math.PI * r;
  const filled = circ * pct / 100;
  return `<svg class="stats-ring" viewBox="0 0 72 72" width="72" height="72">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--surface2)" stroke-width="6"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="6"
      stroke-dasharray="${filled} ${circ}" stroke-dashoffset="${circ * 0.25}"
      stroke-linecap="round"/>
  </svg>`;
}

function buildScoreGraph(entries, type) {
  if (!entries || entries.length === 0) {
    return `<div class="score-graph-empty">no scores yet — add your first test result</div>`;
  }

  const maxScore = type === 'adv' ? 360 : 300;
  const W = 320, H = 110;
  const PAD = { t: 10, r: 16, b: 28, l: 36 };
  const gW = W - PAD.l - PAD.r;
  const gH = H - PAD.t - PAD.b;

  const scores = entries.map(e => e.score);
  const minS = Math.min(...scores);
  const maxS = Math.max(...scores);
  const range = maxS - minS || 1;

  const pts = entries.map((e, i) => {
    const x = PAD.l + (entries.length === 1 ? gW / 2 : i / (entries.length - 1) * gW);
    const y = PAD.t + gH - ((e.score - minS) / range * gH * 0.85 + gH * 0.075);
    return { x, y, score: e.score, date: e.date };
  });

  let pathD = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1], p1 = pts[i];
    const cpx = (p0.x + p1.x) / 2;
    pathD += ` C ${cpx},${p0.y} ${cpx},${p1.y} ${p1.x},${p1.y}`;
  }

  const fillD = pathD
    + ` L ${pts[pts.length-1].x},${PAD.t + gH}`
    + ` L ${pts[0].x},${PAD.t + gH} Z`;

  const gridY = [0, 0.25, 0.5, 0.75, 1].map(f => {
    const val = Math.round(minS + range * (1 - f));
    const y   = PAD.t + gH * f * 0.85 + gH * 0.075;
    return { val, y };
  });

  const xLabels = entries.length <= 3
    ? entries.map((e, i) => ({ i, label: formatDateShort(e.date) }))
    : [
        { i: 0, label: formatDateShort(entries[0].date) },
        { i: Math.floor((entries.length - 1) / 2), label: formatDateShort(entries[Math.floor((entries.length - 1) / 2)].date) },
        { i: entries.length - 1, label: formatDateShort(entries[entries.length - 1].date) },
      ];

  const latest      = pts[pts.length - 1];
  const latestScore = entries[entries.length - 1].score;

  return `
    <svg class="score-graph-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="var(--accent)" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${gridY.map(g => `
        <line x1="${PAD.l}" y1="${g.y}" x2="${W - PAD.r}" y2="${g.y}"
          stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
        <text x="${PAD.l - 4}" y="${g.y + 3}" text-anchor="end"
          font-family="'DM Mono',monospace" font-size="7" fill="var(--muted)">${g.val}</text>
      `).join('')}
      <path d="${fillD}" fill="url(#scoreGrad)"/>
      <path d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      ${pts.map(p => `<circle cx="${p.x}" cy="${p.y}" r="2.5" fill="var(--bg)" stroke="var(--accent)" stroke-width="1.5"/>`).join('')}
      <circle cx="${latest.x}" cy="${latest.y}" r="4" fill="var(--accent)"/>
      <text x="${latest.x + 6}" y="${latest.y + 3}" font-family="'DM Mono',monospace" font-size="8" fill="var(--accent)">${latestScore}</text>
      ${xLabels.map(xl => {
        const x = PAD.l + (entries.length === 1 ? gW / 2 : xl.i / (entries.length - 1) * gW);
        return `<text x="${x}" y="${H - 4}" text-anchor="middle" font-family="'DM Mono',monospace" font-size="7" fill="var(--muted)">${xl.label}</text>`;
      }).join('')}
    </svg>`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d} ${months[parseInt(m) - 1]} ${y}`;
}

function formatDateShort(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d} ${months[parseInt(m) - 1]}`;
}

// ── FILTER PANEL ──────────────────────────────────────────────────────────
function renderFilterPanel() {
  const panel = document.getElementById('filterPanel');
  const tags  = window.TAGS[activeSubject];

  const progressFilters = [
    { key: 'theory-pending',    label: 'Theory pending' },
    { key: 'practiced-pending', label: 'Practice pending' },
    { key: 'adv-pending',       label: 'Adv pending' },
    { key: 'fully-done',        label: '✓ Fully done' },
  ];

  panel.innerHTML = `
    <div class="filter-section-label">by tag</div>
    <div class="filter-row">
      <button class="filter-chip ${activeFilters.size === 0 ? 'active' : ''}" data-tag="__all__">All</button>
      ${tags.map(t => `
        <button class="filter-chip ${activeFilters.has(t) ? 'active' : ''} chip--${tagSlug(t)}" data-tag="${t}">${t}</button>
      `).join('')}
    </div>
    <div class="filter-section-label" style="margin-top:8px">by progress</div>
    <div class="filter-row">
      <button class="filter-chip ${progressFilter === null ? 'active' : ''}" data-pf="__all__">All</button>
      ${progressFilters.map(pf => `
        <button class="filter-chip pf-chip ${progressFilter === pf.key ? 'active pf-active' : ''}" data-pf="${pf.key}">${pf.label}</button>
      `).join('')}
    </div>`;

  panel.querySelectorAll('.filter-chip[data-tag]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (tag === '__all__') {
        activeFilters.clear();
      } else {
        activeFilters.has(tag) ? activeFilters.delete(tag) : activeFilters.add(tag);
      }
      renderFilterPanel();
      updateFilterBtn();
      render();
    });
  });

  panel.querySelectorAll('.filter-chip[data-pf]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pf = btn.dataset.pf;
      progressFilter = pf === '__all__' ? null : pf;
      renderFilterPanel();
      updateFilterBtn();
      render();
    });
  });
}

function updateFilterBtn() {
  const btn = document.getElementById('filterBtn');
  const hasActive = activeFilters.size > 0 || progressFilter !== null;
  btn.classList.toggle('active', hasActive || filterOpen);
  const countEl  = btn.querySelector('.filter-count');
  const count    = activeFilters.size + (progressFilter ? 1 : 0);
  countEl.textContent = count > 0 ? count : '';
}

function toggleFilterPanel() {
  filterOpen = !filterOpen;
  document.getElementById('filterPanel').classList.toggle('open', filterOpen);
  updateFilterBtn();
}

// ── ATTACH EVENTS ─────────────────────────────────────────────────────────
function attachEvents() {
  document.querySelectorAll('.chapter-header').forEach(h => {
    h.addEventListener('click', (e) => {
      if (e.target.closest('.status-btn')) return;
      h.closest('.chapter').classList.toggle('open');
    });
  });

  document.querySelectorAll('.topic-item:not(.leaf) .topic-header').forEach(h => {
    h.addEventListener('click', (e) => {
      if (e.target.closest('.status-btn')) return;
      h.closest('.topic-item').classList.toggle('open');
    });
  });

  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Only allow edit if viewing your own profile
      if (!Auth.canEdit(viewingUserId)) return;

      const chOrig    = parseInt(btn.dataset.chOrig);
      const topicIdx  = parseInt(btn.dataset.topicIdx);
      const newStatus = Sync.cycleAndSync(viewingUserId, activeSubject, chOrig, topicIdx);

      const cfg      = STATUS_CONFIG[newStatus] || STATUS_CONFIG[null];
      const topicItem = btn.closest('.topic-item');
      const dot       = topicItem.querySelector('.topic-dot');

      dot.className = `topic-dot ${cfg.cls}`;
      btn.className = `status-btn ${cfg.cls}`;
      btn.textContent = newStatus ? cfg.label : '·';

      updateChapterBar(chOrig);
    });
  });
}

function updateChapterBar(origIdx) {
  const chEl = document.querySelector(`.chapter[data-ch-orig="${origIdx}"]`);
  if (!chEl) return;

  const ch    = DATA[activeSubject][origIdx];
  const total = ch.topics.length;
  let th = 0, prac = 0, adv = 0;

  ch.topics.forEach((_, ti) => {
    const s = Storage.cacheGet(viewingUserId, activeSubject, origIdx, ti);
    if (s === 'theory')    th++;
    if (s === 'practiced') prac++;
    if (s === 'adv')       adv++;
  });

  const thPct   = (th   / total * 100).toFixed(1);
  const pracPct = (prac / total * 100).toFixed(1);
  const advPct  = (adv  / total * 100).toFixed(1);

  const bar = chEl.querySelector('.ch-progress-bar');
  if (bar) {
    bar.querySelector('.seg--theory').style.width    = `${thPct}%`;
    bar.querySelector('.seg--practiced').style.width = `${pracPct}%`;
    bar.querySelector('.seg--adv').style.width       = `${advPct}%`;
  }

  const badge = chEl.querySelector('.ch-badge');
  if (badge) badge.textContent = `${th + prac + adv}/${total}`;
}

// ── TABS ──────────────────────────────────────────────────────────────────
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    if (tab.dataset.subject === 'stats') {
      activeView = 'stats';
      renderStats();
      return;
    }

    activeView    = 'chapters';
    activeSubject = tab.dataset.subject;
    searchQuery   = '';
    activeFilters.clear();
    progressFilter = null;
    filterOpen    = false;
    document.getElementById('searchInput').value = '';
    document.getElementById('filterPanel').classList.remove('open');
    renderFilterPanel();
    updateFilterBtn();
    render();
  });
});

// ── SEARCH ────────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value;
  if (activeView === 'chapters') render();
});

// ── FILTER BUTTON ─────────────────────────────────────────────────────────
document.getElementById('filterBtn').addEventListener('click', toggleFilterPanel);

// ── THEME ─────────────────────────────────────────────────────────────────
const themeBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  themeBtn.textContent = isLight ? '☾' : '☀';
}

applyTheme(Storage.getTheme());

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  Storage.setTheme(newTheme);
  applyTheme(newTheme);
});

// ── INIT ──────────────────────────────────────────────────────────────────
document.querySelector('.tab[data-subject="stats"]').classList.add('active');
renderFilterPanel();

Auth.init().then(async () => {
  initViewingUser();           // determine who to show based on localStorage / auth
  await Sync.pullAll();        // fetch BOTH users' data from Supabase
  updateViewerBadge();         // show "viewing Rishit [switch]" in header
  renderStats();               // render with real data

  // If logged-in user is an editor viewing someone else's profile, auto-switch to their own
  const editorId = Auth.getEditorId();
  if (editorId && viewingUserId !== editorId) {
    // Don't force-switch — respect localStorage preference
    // They can manually switch via the badge
  }
});

Auth.onChange(async session => {
  // On login/logout: re-pull and re-render
  // If they just logged in as an editor, switch to their own profile
  const editorId = Auth.getEditorId();
  if (editorId) {
    setViewingUser(editorId);
  }
  await Sync.pullAll();
  updateViewerBadge();
  renderView();
});