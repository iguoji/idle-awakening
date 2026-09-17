import { renderActionCard } from '../../components/action-card.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function renderBreakdown(data) {
  if (!data || typeof data !== 'object') return '';
  const entries = Object.entries(data).filter(([key, value]) => key !== 'nextEtas' && value && typeof value === 'object' && typeof value.value !== 'undefined');
  const etas = data.nextEtas && typeof data.nextEtas === 'object' ? Object.entries(data.nextEtas).slice(0, 4) : [];
  if (!entries.length && !etas.length) return '';
  return `<div class="ui-action-breakdown">
    ${entries.slice(0, 8).map(([key, item]) => `<div class="ui-action-breakdown__row"><span>${escapeHtml(item.title || item.name || key)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join('')}
    ${etas.length ? `<div class="ui-action-breakdown__eta"><strong>Next levels</strong>${etas.map(([level, value]) => `<span>Lv ${escapeHtml(level)} · ${escapeHtml(value)}</span>`).join('')}</div>` : ''}
  </div>`;
}

export function renderActionsView(gameState) {
  const actions = gameState.actions || [];
  const meta = gameState.actionsMeta || {};
  const categories = Array.isArray(meta.actionCategories) ? meta.actionCategories : [];
  const selectedCategory = meta.selectedCategory || 'all';
  const searchData = meta.searchData || { search: '', selectedScopes: ['name', 'tags'] };
  const showHidden = Boolean(meta.showHidden);
  const nextAction = actions.find((action) => !action.active);
  const detailEntries = Object.entries(gameState.actionDetails || {});
  const detailEntry = detailEntries.length ? detailEntries[detailEntries.length - 1] : null;
  const detailId = detailEntry?.[0] || '';
  const detail = detailEntry?.[1] || null;
  const breakdown = detailId ? gameState.actionXpBreakdowns?.[detailId] : null;

  return `
    <section class="ui-page-head">
      <div><div class="ui-kicker">Active progression</div><h1>Actions</h1><p>Run work continuously while you explore the rest of the game.</p></div>
      ${nextAction ? `<button class="ui-btn ui-btn--primary" data-action="run-action" data-id="${escapeHtml(nextAction.id)}">Run next</button>` : ''}
    </section>
    <section class="ui-card ui-actions-toolbar">
      <div class="ui-card__body">
        <div class="ui-action-toolbar-row">
          <label class="ui-search"><span>Search</span><input data-action="action-search" value="${escapeHtml(searchData.search || '')}" placeholder="Name, tags…" /></label>
          <label class="ui-check"><input type="checkbox" data-action="toggle-show-hidden" ${showHidden ? 'checked' : ''}/> Show hidden</label>
        </div>
        <div class="ui-action-filters" role="tablist">
          <button class="ui-filter ${selectedCategory === 'all' ? 'is-active' : ''}" data-action="action-filter" data-filter-id="all">All</button>
          ${categories.map((category) => `<button class="ui-filter ${selectedCategory === category.id ? 'is-active' : ''}" data-action="action-filter" data-filter-id="${escapeHtml(category.id)}">${escapeHtml(category.name || category.id)}<span>${category.items?.length ?? 0}</span></button>`).join('')}
        </div>
      </div>
    </section>
    ${detail ? `<article class="ui-card ui-action-detail"><div class="ui-card__body"><div class="ui-section-title"><div><strong>${escapeHtml(detail.name || detail.id)}</strong><span>Details</span></div></div><p>${escapeHtml(detail.description || '')}</p><div class="ui-stat-grid"><div class="ui-stat"><div class="ui-stat__label">Level</div><div class="ui-stat__value">${escapeHtml(detail.level ?? '—')}</div></div><div class="ui-stat"><div class="ui-stat__label">XP</div><div class="ui-stat__value">${escapeHtml(detail.xp ?? 0)} / ${escapeHtml(detail.maxXP ?? 0)}</div></div><div class="ui-stat"><div class="ui-stat__label">XP rate</div><div class="ui-stat__value">${escapeHtml(detail.xpRate ?? '—')}</div></div></div>${breakdown ? renderBreakdown(breakdown) : `<button class="ui-btn" data-action="action-xp-breakdown" data-id="${escapeHtml(detailId)}">Show XP breakdown</button>`}</div></article>` : ''}
    <section class="ui-grid">
      <article class="ui-card">
        <div class="ui-card__body">
          <div class="ui-section-title"><div><strong>Available actions</strong><span> · ${actions.length} visible</span></div><span class="ui-muted">Persistent background progress</span></div>
          <div class="ui-action-list">
            ${actions.map(renderActionCard).join('') || '<div class="ui-empty-state"><span class="ui-empty-state__icon">◎</span><h2>Loading actions…</h2></div>'}
          </div>
        </div>
      </article>
      <aside class="ui-card">
        <div class="ui-card__body">
          <div class="ui-kicker">Runtime boundary</div>
          <h2>Engine → UI</h2>
          <p class="ui-muted">Search, filters, details and running state are backed by the original ActionsModule protocols; the page only issues commands through the adapter.</p>
          <div class="ui-boundary"><span>Worker snapshot</span><b>→</b><span>ActionsModule</span></div>
        </div>
      </aside>
    </section>
  `;
}
