import './statistics-view.css';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function number(value) {
  return Number.isFinite(Number(value)) ? new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 }).format(Number(value)) : '—';
}

function formatTime(seconds) {
  const total = Math.max(0, Number(seconds) || 0);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  return `${hours}h ${String(minutes).padStart(2, '0')}m`;
}

function renderRanking(title, items) {
  if (!Array.isArray(items) || !items.length) return `<div class="ui-domain-empty">No data yet.</div>`;
  return `<div class="ui-stat-ranking">${items.slice(0, 10).map((item, index) => `<div class="ui-stat-ranking__row"><span class="ui-stat-ranking__rank">${index + 1}</span><strong>${escapeHtml(item.name || item.id)}</strong><span>${escapeHtml(number(item.value))}</span></div>`).join('')}</div>`;
}

export function getStatisticsQueries() {
  return [['query-statistics', {}]];
}

export function renderStatisticsView(snapshot) {
  const data = snapshot?.raw?.statistics || {};
  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Long-term record</div><h1>Statistics</h1><p>Track play time, unlocked actions, XP earned and spell usage from the live game runtime.</p></div>
    <div class="ui-status-pill">Live worker data</div>
  </section>
  <section class="ui-stat-grid">
    <div class="ui-stat"><div class="ui-stat__label">Time played</div><div class="ui-stat__value">${escapeHtml(formatTime(data.totalTimePlayed))}</div></div>
    <div class="ui-stat"><div class="ui-stat__label">Mage level</div><div class="ui-stat__value">${escapeHtml(number(data.mageLevel))}</div></div>
    <div class="ui-stat"><div class="ui-stat__label">Actions unlocked</div><div class="ui-stat__value">${escapeHtml(number(data.actionsUnlocked))}</div></div>
  </section>
  <section class="ui-grid" style="margin-top:20px">
    <article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Action time</strong><span>Top 10</span></div></div>${renderRanking('Action time', data.actionTimes)}</div></article>
    <article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Action XP</strong><span>Top 10</span></div></div>${renderRanking('Action XP', data.actionXP)}</div></article>
  </section>
  <section class="ui-card" style="margin-top:20px"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Spells cast</strong><span>Top 10</span></div></div>${renderRanking('Spells cast', data.spellsCasted)}</div></section>`;
}
