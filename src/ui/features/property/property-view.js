import './property-view.css';

let selectedFilterId = 'furniture';
let filterEditorDraft = null;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]));
}

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function formatNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value);
  return String(value ?? '—');
}

function createFilterDraft(data, existing = null) {
  if (existing) return clone({ ...existing, filterId: selectedFilterId });
  const order = Array.isArray(data?.customFiltersOrder) ? data.customFiltersOrder : [];
  return {
    id: '',
    filterId: selectedFilterId,
    name: 'Filter ' + Math.max(1, order.length + 1),
    condition: '',
    rules: [{ type: 'tag', object: selectedFilterId }],
    isPinned: true,
    sortIndex: order.length,
    isRequired: false,
  };
}

export function getPropertyQueries() {
  return [
    ['query-furnitures-data', { filterId: selectedFilterId }],
    ['query-general-property-stats', {}],
  ];
}

export function setPropertyFilter(filterId) {
  if (!['furniture', 'accessory', 'amplifier'].includes(filterId)) return;
  selectedFilterId = filterId;
  filterEditorDraft = null;
}

export function getPropertyFilter() {
  return selectedFilterId;
}

export function beginPropertyFilterCreate(data) {
  filterEditorDraft = createFilterDraft(data);
}

export function beginPropertyFilterEdit(filter) {
  filterEditorDraft = createFilterDraft(null, filter);
}

export function closePropertyFilterEditor() {
  filterEditorDraft = null;
}

export function getPropertyFilterEditorDraft() {
  return clone(filterEditorDraft);
}

export function patchPropertyFilterDraft(mutator, rerender = false) {
  if (!filterEditorDraft || typeof mutator !== 'function') return;
  const draft = clone(filterEditorDraft);
  mutator(draft);
  filterEditorDraft = draft;
  return rerender;
}

function renderStats(data) {
  const space = data?.space;
  if (!space || typeof space !== 'object') return '';
  const entries = [
    ['Space', space.total],
    ['Space cap', space.max],
    ['Space use', space.consumption],
  ].filter(([, value]) => value !== undefined && value !== null);
  if (!entries.length) return '';
  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>Property capacity</strong><span>Live effects</span></div></div>' +
    '<div class="ui-stat-grid">' +
    entries.map(([label, value]) => '<div class="ui-stat"><div class="ui-stat__label">' + escapeHtml(label) + '</div><div class="ui-stat__value">' + escapeHtml(formatNumber(value)) + '</div></div>').join('') +
    '</div>' +
    (space.breakDown ? '<pre class="ui-domain-json ui-property-breakdown">' + escapeHtml(JSON.stringify(space.breakDown, null, 2).slice(0, 5000)) + '</pre>' : '') +
    '</div></article>';
}

function renderFilters(data) {
  const filters = data?.customFilters && typeof data.customFilters === 'object' ? data.customFilters : {};
  const order = Array.isArray(data?.customFiltersOrder) ? data.customFiltersOrder.filter((id) => filters[id]) : Object.keys(filters);
  return '<div class="ui-property-filters">' + order.map((id, index) => {
    const filter = filters[id] || {};
    return '<div class="ui-property-filter" data-active="' + String(filter.id === data?.selectedCategory) + '">' +
      '<button class="ui-filter ' + (filter.id === data?.selectedCategory ? 'is-active' : '') + '" data-action="property-apply-filter" data-id="' + escapeHtml(filter.id) + '">' + escapeHtml(filter.name || filter.id) + '</button>' +
      '<button class="ui-btn ui-btn--subtle" data-action="property-toggle-pin" data-id="' + escapeHtml(filter.id) + '" data-flag="' + String(!filter.isPinned) + '" title="' + (filter.isPinned ? 'Unpin' : 'Pin') + '">' + (filter.isPinned ? '★' : '☆') + '</button>' +
      '<button class="ui-btn ui-btn--subtle" data-action="property-filter-edit" data-id="' + escapeHtml(filter.id) + '" title="Edit">✎</button>' +
      '<button class="ui-btn ui-btn--subtle" data-action="property-filter-move" data-id="' + escapeHtml(filter.id) + '" data-direction="up" ' + (index === 0 ? 'disabled' : '') + '>↑</button>' +
      '<button class="ui-btn ui-btn--subtle" data-action="property-filter-move" data-id="' + escapeHtml(filter.id) + '" data-direction="down" ' + (index === order.length - 1 ? 'disabled' : '') + '>↓</button>' +
      (filter.isRequired ? '' : '<button class="ui-btn ui-btn--subtle" data-action="property-filter-delete" data-id="' + escapeHtml(filter.id) + '">×</button>') +
      '</div>';
  }).join('') + '</div>';
}

function renderFilterEditor() {
  if (!filterEditorDraft) return '';
  const draft = filterEditorDraft;
  const rules = Array.isArray(draft.rules) && draft.rules.length ? draft.rules : [{ type: 'tag', object: selectedFilterId }];
  return '<div class="ui-modal-backdrop" data-action="property-filter-modal-backdrop">' +
    '<section class="ui-modal" role="dialog" aria-modal="true">' +
      '<div class="ui-modal__head"><div><div class="ui-kicker">Property</div><h2>' + (draft.id ? 'Edit property filter' : 'New property filter') + '</h2></div><button class="ui-btn" data-action="property-filter-close">Close</button></div>' +
      '<div class="ui-modal__body">' +
        '<div class="ui-filter-form-grid"><label><span>Name</span><input data-action="property-filter-name" value="' + escapeHtml(draft.name || '') + '"/></label><label class="ui-check"><input type="checkbox" data-action="property-filter-pinned" ' + (draft.isPinned ? 'checked' : '') + '/> Pinned</label></div>' +
        '<label class="ui-filter-condition"><span>Condition</span><input data-action="property-filter-condition" value="' + escapeHtml(draft.condition || '') + '" placeholder="Example: 1 AND 2"/><small>Rules are numbered in order. Supported words: AND, OR, NOT.</small></label>' +
        '<div class="ui-filter-rules-head"><strong>Rules</strong><button class="ui-btn" data-action="property-filter-rule-add">Add rule</button></div>' +
        '<div class="ui-filter-rules">' +
        rules.map((rule, index) =>
          '<div class="ui-filter-rule"><select data-action="property-filter-rule-type" data-index="' + index + '">' +
          ['tag', 'resource', 'attribute'].map((type) => '<option value="' + type + '" ' + (rule.type === type ? 'selected' : '') + '>' + type + '</option>').join('') +
          '</select><input data-action="property-filter-rule-object" data-index="' + index + '" value="' + escapeHtml(rule.object || '') + '" placeholder="Tag / resource / attribute"/>' +
          '<button class="ui-btn" data-action="property-filter-rule-remove" data-index="' + index + '" ' + (rules.length <= 1 ? 'disabled' : '') + '>Remove</button></div>'
        ).join('') +
        '</div>' +
      '</div>' +
      '<div class="ui-modal__foot"><button class="ui-btn" data-action="property-filter-close">Cancel</button><button class="ui-btn ui-btn--primary" data-action="property-filter-save">Save filter</button></div>' +
    '</section></div>';
}

function renderDetail(detail) {
  if (!detail) return '';
  const effects = Array.isArray(detail.currentEffects) ? detail.currentEffects : Array.isArray(detail.potentialEffects) ? detail.potentialEffects : [];
  const stats = [
    ['Level', detail.level],
    ['Max', detail.max],
    ['Affordable', detail.affordable],
    ['Space usage', detail.spaceUsage],
  ].filter(([, value]) => value !== undefined && value !== null);
  return '<article class="ui-card ui-domain-detail"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>' + escapeHtml(detail.name || detail.id || 'Property item') + '</strong><span>Details</span></div></div>' +
    '<p class="ui-muted">' + escapeHtml(detail.description || '') + '</p>' +
    '<div class="ui-stat-grid">' + stats.map(([label, value]) => '<div class="ui-stat"><div class="ui-stat__label">' + escapeHtml(label) + '</div><div class="ui-stat__value">' + escapeHtml(formatNumber(value)) + '</div></div>').join('') + '</div>' +
    (effects.length ? '<pre class="ui-domain-json">' + escapeHtml(JSON.stringify(effects, null, 2).slice(0, 7000)) + '</pre>' : '') +
    '</div></article>';
}

export function renderPropertyView(snapshot) {
  const data = snapshot?.raw?.['furnitures-data'] || {};
  const items = Array.isArray(data.available) ? data.available : [];
  const detail = snapshot?.raw?.['furniture-details'];
  const search = data.searchData?.search || '';
  const hideMaxed = Boolean(data.hideMaxed);
  const automationUnlocked = Boolean(data.isAutomationUnlocked);

  return '<section class="ui-page-head">' +
    '<div><div class="ui-kicker">Home & infrastructure</div><h1>Property</h1><p>Manage furniture, accessories, amplifiers, capacity and property automation.</p></div>' +
    '<div class="ui-status-pill">' + escapeHtml(selectedFilterId) + ' · ' + items.length + ' visible</div>' +
  '</section>' +
  '<section class="ui-card ui-domain-toolbar"><div class="ui-card__body">' +
    '<div class="ui-property-category-row">' +
      ['furniture', 'accessory', 'amplifier'].map((id) => '<button class="ui-filter ' + (selectedFilterId === id ? 'is-active' : '') + '" data-action="property-category" data-category="' + id + '">' + id + '</button>').join('') +
    '</div>' +
    '<div class="ui-property-toolbar-row">' +
      '<label class="ui-search"><span>Search</span><input data-action="property-search" value="' + escapeHtml(search) + '" placeholder="Name…"/></label>' +
      '<label class="ui-check"><input type="checkbox" data-action="property-hide-maxed" ' + (hideMaxed ? 'checked' : '') + '/> Hide maxed</label>' +
      '<button class="ui-btn" data-action="property-filter-new">New filter</button>' +
    '</div>' +
    '<div class="ui-property-filter-heading"><strong>Filters</strong><span>' + escapeHtml(data.selectedCategory || 'All') + '</span></div>' +
    renderFilters(data) +
  '</div></section>' +
  renderDetail(detail) +
  renderStats(data) +
  '<section class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>Available property items</strong><span>' + items.length + ' items</span></div><span class="ui-muted">' + (automationUnlocked ? 'Autopurchase available' : 'Autopurchase locked') + '</span></div>' +
    '<div class="ui-domain-list">' +
      items.map((item) => {
        const id = item?.id;
        if (!id) return '';
        const auto = Boolean(item.isAutoPurchase);
        const capped = Boolean(item.isCapped) || Number(item.level) >= Number(item.max);
        return '<article class="ui-domain-item"><div class="ui-domain-item__main">' +
          '<div class="ui-domain-item__title"><strong>' + escapeHtml(item.name || id) + '</strong><span>Lv ' + escapeHtml(formatNumber(item.level)) + ' / ' + escapeHtml(formatNumber(item.max)) + '</span></div>' +
          '<p>' + escapeHtml(item.description || '') + '</p>' +
          (item.spaceUsage !== undefined ? '<div class="ui-domain-item__sub">Space usage: ' + escapeHtml(formatNumber(item.spaceUsage)) + '</div>' : '') +
          '</div><div class="ui-domain-item__controls">' +
          '<button class="ui-btn ui-btn--primary" data-command="purchase-furniture" data-id="' + escapeHtml(id) + '" data-filter-id="' + escapeHtml(selectedFilterId) + '" ' + (capped || item.affordable === false ? 'disabled' : '') + '>' + (capped ? 'Maxed' : 'Upgrade') + '</button>' +
          (automationUnlocked && !capped ? '<button class="ui-btn ' + (auto ? 'ui-btn--primary' : '') + '" data-command="set-furniture-autopurchase" data-id="' + escapeHtml(id) + '" data-filter-id="' + escapeHtml(selectedFilterId) + '" data-flag="' + String(!auto) + '">' + (auto ? 'Auto on' : 'Auto off') + '</button>' : '') +
          '<button class="ui-btn" data-command="query-furniture-details" data-id="' + escapeHtml(id) + '">Details</button>' +
          '</div></article>';
      }).join('') +
      (items.length ? '' : '<div class="ui-empty-state"><span class="ui-empty-state__icon">◎</span><h2>No property items</h2><p>Try another category or filter.</p></div>') +
    '</div>' +
  '</div></section>' +
  renderFilterEditor();
}
