// ── MAIN.JS ───────────────────────────────────────────────────────────────
// Depends on (loaded before this in index.html):
//   tags.js          → window.TAGS
//   subjects/*.js    → window.PHY_DATA, window.CHEM_DATA, window.MATH_DATA
//   storage.js       → Storage

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
let activeFilters   = new Set();   // tag filters
let progressFilter  = null;        // null | 'theory-pending' | 'practiced-pending' | 'adv-pending' | 'fully-done'
let filterOpen      = false;
let activeView      = 'chapters';  // 'chapters' | 'stats'

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

  // Tag filter
  if (activeFilters.size > 0) {
    chapters = chapters.filter(ch => activeFilters.has(ch.tag));
  }

  // Progress filter
  if (progressFilter) {
    chapters = applyProgressFilter(chapters, activeSubject, progressFilter);
  }

  const filtered = q ? filterData(chapters, q) : chapters;

  if (filtered.length === 0) {
    main.innerHTML = `<div class="no-results">${q ? `no results for "${q}"` : 'nothing here'}</div>`;
    return;
  }

  const progress = Storage.getSubjectProgress(activeSubject);
  main.innerHTML = filtered.map((ch, ci) => {
    // find original index for storage key consistency
    const origIdx = DATA[activeSubject].indexOf(ch);
    return buildChapter(ch, ci, origIdx, q, progress);
  }).join('');
  attachEvents();
}

function applyProgressFilter(chapters, subject, pf) {
  return chapters.filter((ch, chIdx) => {
    const origIdx = DATA[subject].indexOf(ch);
    const topics  = ch.topics;

    if (pf === 'fully-done') {
      return topics.every((_, ti) =>
        Storage.getProgress(subject, origIdx, ti) === 'adv'
      );
    }

    const needStatus = pf.replace('-pending', ''); // 'theory' | 'practiced' | 'adv'
    const statusOrder = ['theory', 'practiced', 'adv'];
    const needIdx = statusOrder.indexOf(needStatus);

    return topics.some((_, ti) => {
      const s = Storage.getProgress(subject, origIdx, ti);
      const sIdx = statusOrder.indexOf(s);
      // pending = hasn't reached this level yet
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

  // Chapter progress summary
  const total    = ch.topics.length;
  const doneAdv  = ch.topics.filter((_, ti) => progress[`${origIdx}:${ti}`] === 'adv').length;
  const donePrac = ch.topics.filter((_, ti) => progress[`${origIdx}:${ti}`] === 'practiced').length;
  const doneTh   = ch.topics.filter((_, ti) => progress[`${origIdx}:${ti}`] === 'theory').length;
  const untouched = total - doneAdv - donePrac - doneTh;

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
function renderStats() {
  const main = document.getElementById('main');

  const subjects = ['physics', 'chemistry', 'maths'];
  const subjectNames = { physics: 'Physics', chemistry: 'Chemistry', maths: 'Maths' };

  let totalTopics = 0, totalTheory = 0, totalPrac = 0, totalAdv = 0;

  const subjectCards = subjects.map(subj => {
    const chapters = DATA[subj];
    const progress = Storage.getSubjectProgress(subj);

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

    return { subj, name: subjectNames[subj], total, th, prac, adv, untouched, pct };
  });

  // Overall paani level
  const overallPct = totalTopics > 0
    ? Math.round((totalAdv + totalPrac + totalTheory) / totalTopics * 100)
    : 0;

  const paaniLevel = getPaaniLevel(overallPct);

  main.innerHTML = `
    <div class="stats-wrap">
      <div class="paani-card">
        <div class="paani-label">kitne paani mein ho?</div>
        <div class="paani-level">${paaniLevel.hindi}</div>
        <div class="paani-sub">${paaniLevel.sub}</div>
        <div class="paani-pct">${overallPct}% touched</div>
        <div class="paani-bar">
          <div class="paani-fill" style="width:${overallPct}%"></div>
        </div>
      </div>

      ${subjectCards.map(c => `
        <div class="stat-card" data-subject="${c.subj}">
          <div class="stat-card-top">
            <span class="stat-subject">${c.name}</span>
            <span class="stat-pct">${c.pct}%</span>
          </div>
          <div class="stat-bar">
            <div class="stat-seg seg--theory"    style="width:${(c.th   / c.total * 100).toFixed(1)}%"></div>
            <div class="stat-seg seg--practiced" style="width:${(c.prac / c.total * 100).toFixed(1)}%"></div>
            <div class="stat-seg seg--adv"       style="width:${(c.adv  / c.total * 100).toFixed(1)}%"></div>
          </div>
          <div class="stat-legend">
            <span class="leg leg--theory">T ${c.th}</span>
            <span class="leg leg--practiced">P ${c.prac}</span>
            <span class="leg leg--adv">A ${c.adv}</span>
            <span class="leg leg--blank">· ${c.untouched}</span>
            <span class="leg leg--total">/ ${c.total}</span>
          </div>
        </div>
      `).join('')}

      <div class="stat-legend-key">
        <span class="leg leg--theory">T = Theory</span>
        <span class="leg leg--practiced">P = Practiced</span>
        <span class="leg leg--adv">A = Advanced</span>
      </div>
    </div>`;
}

function getPaaniLevel(pct) {
  if (pct === 0)   return { hindi: 'सूखा रेगिस्तान',    sub: 'bhai start toh kar' };
  if (pct < 15)    return { hindi: 'पैर गीले हुए',       sub: 'bas shuru hua hai' };
  if (pct < 30)    return { hindi: 'घुटनों तक पानी',    sub: 'thoda aur' };
  if (pct < 50)    return { hindi: 'कमर तक पानी',       sub: 'halfway there' };
  if (pct < 70)    return { hindi: 'सीने तक पानी',      sub: 'serious ho gaye' };
  if (pct < 85)    return { hindi: 'गले तक पानी',       sub: 'almost there bhai' };
  if (pct < 100)   return { hindi: 'डूबने वाले हो',     sub: 'last stretch' };
  return           { hindi: 'पार हो गए 🔥',             sub: 'IIT locked in' };
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
  const countEl = btn.querySelector('.filter-count');
  const count = activeFilters.size + (progressFilter ? 1 : 0);
  countEl.textContent = count > 0 ? count : '';
}

function toggleFilterPanel() {
  filterOpen = !filterOpen;
  document.getElementById('filterPanel').classList.toggle('open', filterOpen);
  updateFilterBtn();
}

// ── ATTACH EVENTS ─────────────────────────────────────────────────────────
function attachEvents() {
  // Chapter expand/collapse
  document.querySelectorAll('.chapter-header').forEach(h => {
    h.addEventListener('click', (e) => {
      if (e.target.closest('.status-btn')) return;
      h.closest('.chapter').classList.toggle('open');
    });
  });

  // Topic expand/collapse (not on status btn)
  document.querySelectorAll('.topic-item:not(.leaf) .topic-header').forEach(h => {
    h.addEventListener('click', (e) => {
      if (e.target.closest('.status-btn')) return;
      h.closest('.topic-item').classList.toggle('open');
    });
  });

  // Status cycle buttons
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chOrig  = parseInt(btn.dataset.chOrig);
      const topicIdx = parseInt(btn.dataset.topicIdx);
      const newStatus = Sync.cycleAndSync(activeSubject, chOrig, topicIdx);

      // Update just this button + dot without full re-render
      const cfg = STATUS_CONFIG[newStatus] || STATUS_CONFIG[null];
      const topicItem = btn.closest('.topic-item');
      const dot = topicItem.querySelector('.topic-dot');

      // Update dot class
      dot.className = `topic-dot ${cfg.cls}`;
      // Update btn class + text
      btn.className = `status-btn ${cfg.cls}`;
      btn.textContent = newStatus ? cfg.label : '·';

      // Update chapter progress bar
      updateChapterBar(chOrig);
    });
  });
}

function updateChapterBar(origIdx) {
  const chEl = document.querySelector(`.chapter[data-ch-orig="${origIdx}"]`);
  if (!chEl) return;

  const ch      = DATA[activeSubject][origIdx];
  const total   = ch.topics.length;
  let th = 0, prac = 0, adv = 0;

  ch.topics.forEach((_, ti) => {
    const s = Storage.getProgress(activeSubject, origIdx, ti);
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
  themeBtn.textContent = isLight ? '☾ dark' : '☀ light';
}

applyTheme(Storage.getTheme());

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  Storage.setTheme(newTheme);
  applyTheme(newTheme);
});

// ── INIT ──────────────────────────────────────────────────────────────────
renderFilterPanel();
render();

// Auth: init session, pull from Supabase if logged in
Auth.init().then(() => {
  if (Auth.isLoggedIn()) {
    Sync.pull().then(() => render());
  }
});

// On login: pull fresh data and re-render
Auth.onChange(session => {
  if (session) {
    Sync.pull().then(() => render());
  }
});