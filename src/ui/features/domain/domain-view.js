import './domain-view.css';

const PAGE_CONFIG = {
  shop: {
    title: 'Shop',
    kicker: 'Economy',
    description: 'Purchase permanent upgrades and resources from the game economy.',
    queries: [['query-items-data', {}]],
    responses: ['items-data'],
    primary: { command: 'purchase-item', label: 'Purchase' },
  },
  inventory: {
    title: 'Inventory',
    kicker: 'Storage',
    description: 'Inspect carried items and perform item actions without exposing engine internals to the UI.',
    queries: [['query-inventory-data', {}]],
    responses: ['inventory-data'],
    actions: [
      { command: 'consume-inventory', label: 'Use', amount: 1 },
      { command: 'sell-inventory', label: 'Sell', amount: 1 },
    ],
  },
  property: {
    title: 'Property',
    kicker: 'Home',
    description: 'Manage furniture, permanent effects and property progression.',
    queries: [['query-furnitures-data', { filterId: 'furniture' }], ['query-general-property-stats', {}]],
    responses: ['furnitures-data', 'general-property-stats'],
    primary: { command: 'purchase-furniture', label: 'Upgrade' },
  },
  workshop: {
    title: 'Workshop',
    kicker: 'Production',
    description: 'Run crafting and alchemy recipes through the extracted worker runtime.',
    queries: [['query-crafting-data', { filterId: 'crafting' }], ['query-crafting-data', { filterId: 'alchemy' }]],
    responses: ['crafting-data-crafting', 'crafting-data-alchemy'],
    primary: { command: 'set-crafting-level', label: 'Run +1' },
  },
  spellbook: {
    title: 'Spellbook',
    kicker: 'Magic',
    description: 'Cast unlocked spells and inspect magical progression.',
    queries: [['query-spell-data', {}]],
    responses: ['spell-data'],
    primary: { command: 'use-spell', label: 'Cast' },
  },
  social: {
    title: 'Social',
    kicker: 'Guilds',
    description: 'Choose a guild and purchase unlocked guild upgrades.',
    queries: [['query-guild-items-data', {}]],
    responses: ['guild-items-data'],
    primary: { command: 'select-guild', label: 'Join' },
  },
  world: {
    title: 'World',
    kicker: 'Exploration',
    description: 'Explore the generated map and inspect the current exploration state.',
    queries: [['query-map-data', {}], ['map-query-general-data', {}]],
    responses: ['map-data', 'map-general-data'],
    primary: { command: 'map-generate-map', label: 'Generate Map' },
  },
};

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatNumber(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return value;
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value);
}

function pickCollection(data) {
  if (!data || typeof data !== 'object') return [];
  for (const key of ['available', 'items', 'spells', 'guilds', 'recipes', 'tiles', 'list']) {
    if (Array.isArray(data[key])) return data[key];
  }
  return Array.isArray(data) ? data : [];
}

function itemId(item) {
  return item?.id ?? item?.key ?? item?.name;
}

function renderMeta(item) {
  const level = item?.level ?? item?.actualLevel;
  const max = item?.max ?? item?.maxLevel;
  const parts = [];
  if (level !== undefined) parts.push(`Lv ${escapeHtml(formatNumber(level))}${max !== undefined ? ` / ${escapeHtml(formatNumber(max))}` : ''}`);
  if (item?.category) parts.push(escapeHtml(item.category));
  if (item?.tier !== undefined) parts.push(`Tier ${escapeHtml(item.tier)}`);
  if (item?.isRunning || item?.active) parts.push('Running');
  return parts.join(' · ');
}

function renderButton(command, label, item, extra = {}) {
  const id = itemId(item);
  if (!id) return '';
  return `<button class="ui-btn ui-btn--primary" data-command="${escapeHtml(command)}" data-id="${escapeHtml(id)}"${extra.filterId ? ` data-filter-id="${escapeHtml(extra.filterId)}"` : ''}${extra.amount ? ` data-amount="${extra.amount}"` : ''}>${escapeHtml(label)}</button>`;
}

function renderItemCard(item, config) {
  const id = itemId(item);
  const title = item?.name || id || 'Unknown';
  const description = item?.description || item?.text || '';
  const primary = config.primary;
  let controls = '';

  if (primary?.command === 'purchase-furniture') controls = renderButton(primary.command, primary.label, item, { filterId: 'furniture' });
  else if (primary?.command) controls = renderButton(primary.command, primary.label, item, { amount: 1 });

  if (config.actions) {
    controls = config.actions.map((action) => renderButton(action.command, action.label, item, { amount: action.amount })).join('');
  }

  if (config.title === 'Workshop') {
    const filterId = item?.tags?.includes?.('alchemy') || item?.category === 'alchemy' ? 'alchemy' : 'crafting';
    const running = Boolean(item?.isRunning || item?.level > 0);
    const label = running ? 'Stop' : 'Run +1';
    controls = renderButton('set-crafting-level', label, item, { filterId, amount: running ? 0 : Math.max(1, Number(item?.level || 0) + 1) });
  }

  return `<article class="ui-domain-item">
    <div class="ui-domain-item__main">
      <div class="ui-domain-item__title"><strong>${escapeHtml(title)}</strong><span>${renderMeta(item)}</span></div>
      ${description ? `<p>${escapeHtml(description)}</p>` : ''}
      ${item?.resourceAmount !== undefined ? `<div class="ui-domain-item__sub">Resource: ${escapeHtml(formatNumber(item.resourceAmount))}</div>` : ''}
    </div>
    <div class="ui-domain-item__controls">${controls}</div>
  </article>`;
}

function renderDataBlock(label, data, config) {
  if (data == null) {
    return `<article class="ui-card"><div class="ui-card__body ui-domain-empty"><span>No data yet.</span><small>Enter this page after the game is initialized to request its live worker snapshot.</small></div></article>`;
  }

  const collection = pickCollection(data);
  if (collection.length) {
    return `<article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>${collection.length} entries</span></div></div>
      <div class="ui-domain-list">${collection.slice(0, 100).map((item) => renderItemCard(item, config)).join('')}</div>
      ${collection.length > 100 ? '<p class="ui-muted">Showing the first 100 entries.</p>' : ''}
    </div></article>`;
  }

  const stats = Object.entries(data).filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value));
  if (stats.length) {
    return `<article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>Live worker state</span></div></div>
      <div class="ui-stat-grid">${stats.slice(0, 12).map(([key, value]) => `<div class="ui-stat"><div class="ui-stat__label">${escapeHtml(key)}</div><div class="ui-stat__value">${escapeHtml(formatNumber(value))}</div></div>`).join('')}</div>
    </div></article>`;
  }

  return `<article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>Structured response</span></div></div><pre class="ui-domain-json">${escapeHtml(JSON.stringify(data, null, 2).slice(0, 12000))}</pre></div></article>`;
}

function renderWorldMap(data) {
  if (!data) return '';
  const tiles = data.tiles || data.mapTiles || data.mapTilesProcessed;
  if (!Array.isArray(tiles) || !Array.isArray(tiles[0])) return '';
  return `<article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Map</strong><span>${tiles.length} × ${tiles[0].length}</span></div></div><div class="ui-map-grid">${tiles.flat().map((tile) => `<span title="${escapeHtml(tile?.metaData?.name || 'Unknown')}">${tile?.isRunning ? '●' : '·'}</span>`).join('')}</div></div></article>`;
}

export function getDomainQueryConfig(view) {
  return PAGE_CONFIG[view] || null;
}

export function renderDomainView(view, snapshot) {
  const config = PAGE_CONFIG[view];
  if (!config) return '';

  const raw = snapshot?.raw || {};
  const readiness = snapshot?.initialized ? 'Live worker data' : 'Waiting for game runtime';
  const responseData = config.responses.map((key) => [key, raw[key]]);
  const blocks = responseData.map(([key, data]) => renderDataBlock(key.replaceAll('-', ' '), data, config));
  if (view === 'world') blocks.unshift(renderWorldMap(raw['map-data']));

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">${escapeHtml(config.kicker)}</div><h1>${escapeHtml(config.title)}</h1><p>${escapeHtml(config.description)}</p></div>
    <div class="ui-status-pill">${escapeHtml(readiness)}</div>
  </section>
  <section class="ui-grid ui-grid--single">${blocks.filter(Boolean).join('')}</section>`;
}
