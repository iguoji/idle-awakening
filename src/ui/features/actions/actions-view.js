import './actions-view.css';
import { renderActionCard } from '../../components/action-card.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function defaultFilterDraft(filters = {}, order = []) {
  return {
    id: '',
    name: `Filter ${Math.max(1, order.length + 1)}`,
    condition: '',
    rules: [{ type: 'tag', object: '' }],
    isPinned: true,
    sortIndex: order.length,
    isRequired: false,
    ...filters,
  };
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

function renderFilterManager(meta) {
  const filters = meta?.customFilters && typeof meta.customFilters === 'object' ? meta.customFilters : {};
  const order = Array.isArray(meta?.customFiltersOrder) ? meta.customFiltersOrder.filter((id) => filters[id]) : Object.keys(filters);
  if (!order.length) return '';

  return `<section class="ui-card ui-filter-manager">
    <div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Custom filters</strong><span>${order.length} filters</span></div><button class="ui-btn ui-btn--primary" data-action="filter-new">New filter</button></div>
      <div class="ui-filter-manager__list">
        ${order.map((id, index) => {
          const filter = filters[id] || {};
          const isSelected = meta.selectedCategory === id;
          const isRequired = Boolean(filter.isRequired);
          return `<article class="ui-filter-manager__item" data-selected="${isSelected}">
            <div class="ui-filter-manager__main">
              <div class="ui-filter-manager__title"><strong>${escapeHtml(filter.name || id)}</strong><span>${filter.isPinned ? 'Pinned' : 'Unpinned'}${isRequired ? ' · Built-in' : ''}</span></div>
              <div class="ui-filter-manager__meta">${Array.isArray(filter.rules) ? filter.rules.length : 0} rules · ${escapeHtml(filter.condition || 'AND all rules')}</div>
            </div>
            <div class="ui-filter-manager__controls">
              <button class="ui-btn ${isSelected ? 'ui-btn--primary' : ''}" data-command="apply-actions-custom-filter" data-id="${escapeHtml(id)}">${isSelected ? 'Applied' : 'Apply'}</button>
              <button class="ui-btn" data-action="filter-edit" data-id="${escapeHtml(id)}">Edit</button>
              <button class="ui-btn" data-command="toggle-actions-custom-filter-pinned" data-id="${escapeHtml(id)}" data-flag="${!filter.isPinned}">${filter.isPinned ? 'Unpin' : 'Pin'}</button>
              <button class="ui-btn" data-command="actions-change-custom-filters-order" data-id="${escapeHtml(id)}" data-source-index="${index}" data-destination-index="${Math.max(0, index - 1)}" ${index === 0 ? 'disabled' : ''}>↑</button>
              <button class="ui-btn" data-command="actions-change-custom-filters-order" data-id="${escapeHtml(id)}" data-source-index="${index}" data-destination-index="${Math.min(order.length - 1, index + 1)}" ${index === order.length - 1 ? 'disabled' : ''}>↓</button>
              ${isRequired ? '' : `<button class="ui-btn ui-btn--danger" data-command="delete-actions-custom-filter" data-id="${escapeHtml(id)}">Delete</button>`}
            </div>
          </article>`;
        }).join('')}
      </div>
    </div>
  </section>`;
}

function renderFilterModal(modal) {
  if (!modal || modal.type !== 'actions-filter') return '';
  const draft = defaultFilterDraft({}, []).constructor === Object ? modal.draft || defaultFilterDraft() : defaultFilterDraft();
  const rules = Array.isArray(draft.rules) && draft.rules.length ? draft.rules : [{ type: 'tag', object: '' }];
  const ruleRows = rules.map((rule, index) => `<div class="ui-filter-rule" data-rule-index="${index}">
    <select data-action="filter-rule-type" data-index="${index}" aria-label="Rule type">
      ${['tag', 'resource', 'attribute'].map((type) => `<option value="${type}" ${rule.type === type ? 'selected' : ''}>${type}</option>`).join('')}
    </select>
    <input data-action="filter-rule-object" data-index="${index}" value="${escapeHtml(rule.object || '')}" placeholder="Tag / resource / attribute" />
    <button class="ui-btn" data-action="filter-rule-remove" data-index="${index}" ${rules.length <= 1 ? 'disabled' : ''}>Remove</button>
  </div>`).join('');

  return `<div class="ui-modal-backdrop" data-action="filter-modal-backdrop">
    <section class="ui-modal" role="dialog" aria-modal="true" aria-labelledby="ui-filter-title">
      <div class="ui-modal__head"><div><div class="ui-kicker">Actions</div><h2 id="ui-filter-title">${draft.id ? 'Edit filter' : 'New filter'}</h2></div><button class="ui-btn" data-action="filter-cancel">Close</button></div>
      <div class="ui-modal__body">
        <div class="ui-filter-form-grid">
          <label><span>Name</span><input data-action="filter-name" value="${escapeHtml(draft.name || '')}" /></label>
          <label class="ui-check ui-filter-pin"><input type="checkbox" data-action="filter-pinned" ${draft.isPinned ? 'checked' : ''}/> Pinned</label>
        </div>
        <label class="ui-filter-condition"><span>Condition</span><input data-action="filter-condition" value="${escapeHtml(draft.condition || '')}" placeholder="Example: 1 AND 2 OR 3" /><small>Rules are numbered in order. Supported words: AND, OR, NOT. Empty means all rules must match.</small></label>
        <div class="ui-filter-rules-head"><strong>Rules</strong><button class="ui-btn" data-action="filter-rule-add">Add rule</button></div>
        <div class="ui-filter-rules">${ruleRows}</div>
      </div>
      <div class="ui-modal__foot"><button class="ui-btn" data-action="filter-cancel">Cancel</button><button class="ui-btn ui-btn--primary" data-action="filter-save">Save filter</button></div>
    </section>
  </div>`;
}

export function renderActionsView(gameState, uiState = {}) {
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
          <button class="ui-btn" data-action="filter-new">New filter</button>
        </div>
        <div class="ui-action-filters" role="tablist">
          <button class="ui-filter ${selectedCategory === 'all' ? 'is-active' : ''}" data-action="action-filter" data-filter-id="all">All</button>
          ${categories.map((category) => `<button class="ui-filter ${selectedCategory === category.id ? 'is-active' : ''}" data-action="action-filter" data-filter-id="${escapeHtml(category.id)}">${escapeHtml(category.name || category.id)}<span>${category.items?.length ?? 0}</span></button>`).join('')}
        </div>
      </div>
    </section>
    ${renderFilterManager(meta)}
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
    ${renderFilterModal(uiState.modal)}`;
}
