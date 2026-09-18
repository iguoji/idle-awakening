import { escapeHtml, formatNumber, itemId, pickCollection, renderButton, renderMeta } from './format.js';

export function renderItemCard(item, config, context = {}) {
  const id = itemId(item);
  const title = item?.name || id || 'Unknown';
  const description = item?.description || item?.text || '';
  let controls = '';

  if (context.type === 'plantation') {
    controls = renderButton('purchase-plantation', 'Upgrade', item);
    if (context.wateringUnlocked) {
      controls += renderButton('set-plantation-watering', 'Water', item, {
        amount: Math.max(0, Number(item?.wateringLevel || 0) + 1),
      });
    }
    if (context.automationUnlocked && item?.isAutoPurchase !== undefined && !item?.isCapped) {
      controls += `<button class="ui-btn ${item.isAutoPurchase ? 'ui-btn--primary' : ''}" data-command="set-plantation-autopurchase" data-id="${escapeHtml(id)}" data-flag="${!item.isAutoPurchase}">${item.isAutoPurchase ? 'Auto on' : 'Auto off'}</button>`;
    }
    if (context.showRemove && Number(item?.level || 0) > 0) {
      controls += `<button class="ui-btn" data-command="remove-plantation" data-id="${escapeHtml(id)}">Remove</button>`;
    }
    controls += `<button class="ui-btn" data-command="query-plantation-details" data-id="${escapeHtml(id)}">Details</button>`;
  } else if (context.type === 'shop-resource') {
    const amount = Math.max(1, Number(item?.purchaseMultiplier || context.purchaseMultiplier || 1));
    controls = renderButton('purchase-resource', `Buy ×${amount}`, item, { amount });
    controls += `<button class="ui-btn" data-command="query-item-resource-details" data-id="${escapeHtml(id)}">Details</button>`;
  } else if (config.primary?.command === 'purchase-furniture') {
    controls = renderButton(config.primary.command, config.primary.label, item, { filterId: 'furniture' });
  } else if (config.primary?.command === 'set-crafting-level') {
    const filterId = context.filterId || (item?.tags?.includes?.('alchemy') || item?.category === 'alchemy' ? 'alchemy' : 'crafting');
    const running = Boolean(item?.isRunning || item?.level > 0);
    controls = renderButton('set-crafting-level', running ? 'Stop' : 'Run +1', item, {
      filterId,
      amount: running ? 0 : Math.max(1, Number(item?.level || 0) + 1),
    });
    controls += `<button class="ui-btn" data-command="query-crafting-details" data-id="${escapeHtml(id)}">Details</button>`;
  } else if (config.primary?.command) {
    controls = renderButton(config.primary.command, config.primary.label, item, { amount: 1 });
    if (config.title === 'Spellbook') {
      controls += `<button class="ui-btn" data-command="query-spell-details" data-id="${escapeHtml(id)}">Details</button>`;
    }
  }

  if (config.title === 'Shop' && context.automationUnlocked && item?.isAutoPurchase !== undefined && !item?.isCapped) {
    controls += `<button class="ui-btn ${item.isAutoPurchase ? 'ui-btn--primary' : ''}" data-command="set-shop-autopurchase" data-id="${escapeHtml(id)}" data-flag="${!item.isAutoPurchase}">${item.isAutoPurchase ? 'Auto on' : 'Auto off'}</button>`;
  }

  if (context.guildUpgrade && id) {
    controls += `<button class="ui-btn" data-command="query-guild-item-details" data-id="${escapeHtml(id)}">Details</button>`;
  }
  if (config.actions && context.type !== 'shop-resource') {
    controls = config.actions.map((action) => renderButton(action.command, action.label, item, { amount: action.amount })).join('');
  }
  if (config.detailsCommand && context.type !== 'shop-resource' && id) {
    controls += `<button class="ui-btn" data-command="${escapeHtml(config.detailsCommand)}" data-id="${escapeHtml(id)}">Details</button>`;
  }

  return `<article class="ui-domain-item">
    <div class="ui-domain-item__main">
      <div class="ui-domain-item__title"><strong>${escapeHtml(title)}</strong><span>${renderMeta(item)}</span></div>
      ${description ? `<p>${escapeHtml(description)}</p>` : ''}
      ${item?.resourceAmount !== undefined ? `<div class="ui-domain-item__sub">Resource: ${escapeHtml(formatNumber(item.resourceAmount))}</div>` : ''}
      ${item?.stock !== undefined ? `<div class="ui-domain-item__sub">Stock: ${escapeHtml(formatNumber(item.stock))}</div>` : ''}
    </div>
    <div class="ui-domain-item__controls">${controls}</div>
  </article>`;
}

export function renderListBlock(label, list, config, context = {}, limit = 100) {
  return `<article class="ui-card"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>${list.length} entries</span></div></div>
    <div class="ui-domain-list">${list.slice(0, limit).map((item) => renderItemCard(item, config, context)).join('')}</div>
    ${list.length > limit ? '<p class="ui-muted">Showing the first 100 entries.</p>' : ''}
  </div></article>`;
}

export function renderSocial(data) {
  if (!data) return `<article class="ui-card"><div class="ui-card__body ui-domain-empty">No guild data yet.</div></article>`;
  const guilds = Array.isArray(data.guilds) ? data.guilds : [];
  const upgrades = Array.isArray(data.availableUpgrades)
    ? data.availableUpgrades.flat?.(2) || data.availableUpgrades
    : [];
  const selected = data.current?.id;
  const guildBlock = guilds.length
    ? `<article class="ui-card"><div class="ui-card__body">
        <div class="ui-section-title"><div><strong>Guilds</strong><span>${guilds.length} available</span></div></div>
        <div class="ui-domain-list">${guilds.map((guild) => `<article class="ui-domain-item">
          <div class="ui-domain-item__main">
            <div class="ui-domain-item__title"><strong>${escapeHtml(guild.name || guild.id)}</strong><span>${guild.id === selected ? 'Selected' : 'Available'}</span></div>
            <p>${escapeHtml(guild.description || '')}</p>
          </div>
          <div class="ui-domain-item__controls">${guild.id === selected ? '<button class="ui-btn" data-command="leave-guild" data-id="' + escapeHtml(guild.id) + '">Leave</button>' : renderButton('select-guild', 'Join', guild)}</div>
        </article>`).join('')}</div>
      </div></article>`
    : '';
  const upgradeBlock = upgrades.length
    ? renderListBlock('Guild upgrades', upgrades, { primary: { command: 'purchase-guild-item', label: 'Upgrade' } }, { guildUpgrade: true })
    : '';
  return guildBlock + upgradeBlock;
}

export function renderWorldToolbar(data) {
  const generation = data?.['map-general-data']?.mapGeneration || data?.mapGeneration || {};
  const mapLevel = Number(generation.level ?? 0);
  const maxLevel = Number(generation.maxLevel ?? mapLevel);
  const affordable = generation.affordable !== false;
  const filter = data?.['map-data']?.highlightFilters || data?.highlightFilters || {};
  const loot = Array.isArray(data?.['map-data']?.filterableLoot) ? data['map-data'].filterableLoot : Array.isArray(data?.filterableLoot) ? data.filterableLoot : [];
  return '<article class="ui-card ui-domain-toolbar"><div class="ui-card__body">' +
    '<div class="ui-domain-toolbar__row"><div><strong>World generation</strong><span class="ui-muted">Level ' + escapeHtml(mapLevel) + ' / ' + escapeHtml(maxLevel) + (affordable ? '' : ' · insufficient fragments') + '</span></div>' +
    '<button class="ui-btn ui-btn--primary" data-command="map-generate-map" ' + (affordable ? '' : 'disabled') + '>Generate map</button></div>' +
    '<div class="ui-world-controls">' +
      '<label><span>Generation level</span><input type="number" min="0" max="' + escapeHtml(maxLevel) + '" step="1" value="' + escapeHtml(mapLevel) + '" data-action="world-map-level"/></label>' +
      '<label class="ui-check"><input type="checkbox" data-action="world-highlight-unexplored" ' + (filter.highlightUnexplored ? 'checked' : '') + '/> Highlight unexplored</label>' +
      '<label><span>Effort min</span><input type="number" min="0" step="1" value="' + escapeHtml(filter.effortMin ?? '') + '" data-action="world-effort-min"/></label>' +
      '<label><span>Effort max</span><input type="number" min="0" step="1" value="' + escapeHtml(filter.effortMax ?? '') + '" data-action="world-effort-max"/></label>' +
    '</div>' +
    (loot.length ? '<div class="ui-world-loot"><strong>Highlight resources</strong>' + loot.slice(0, 32).map((resource) => '<label class="ui-check"><input type="checkbox" data-action="world-highlight-resource" data-id="' + escapeHtml(resource.id) + '" ' + (resource.isSelected ? 'checked' : '') + '/> ' + escapeHtml(resource.name || resource.id) + '</label>').join('') + '</div>' : '') +
  '</div></article>';
}

export function renderShopToolbar(data) {
  const multiplier = Number(data?.purchaseMultiplier) || 1;
  const showMaxed = Boolean(data?.showMaxed);
  return `<article class="ui-card ui-domain-toolbar"><div class="ui-card__body">
    <div class="ui-domain-toolbar__row">
      <div><strong>Purchase multiplier</strong><span class="ui-muted">Current ×${escapeHtml(multiplier)}</span></div>
      <div class="ui-actions ui-actions--compact">
        ${[1, 5, 10, 25].map((value) => `<button class="ui-btn ${multiplier === value ? 'ui-btn--primary' : ''}" data-command="set-purchase-multiplier" data-amount="${value}">×${value}</button>`).join('')}
      </div>
    </div>
    <label class="ui-check"><input type="checkbox" data-action="shop-show-maxed" ${showMaxed ? 'checked' : ''}/> Show maxed upgrades</label>
  </div></article>`;
}

export function renderInventoryToolbar(data) {
  const categories = Array.isArray(data?.itemCategories) ? data.itemCategories : [];
  const selected = data?.selectedFilterId || 'all';
  const search = data?.searchData?.search || '';
  return `<article class="ui-card ui-domain-toolbar"><div class="ui-card__body">
    <div class="ui-action-toolbar-row">
      <label class="ui-search"><span>Search</span><input data-action="inventory-search" value="${escapeHtml(search)}" placeholder="Name, tags…" /></label>
    </div>
    <div class="ui-action-filters">
      ${categories.map((category) => `<button class="ui-filter ${selected === category.id ? 'is-active' : ''}" data-action="inventory-filter" data-filter-id="${escapeHtml(category.id)}">${escapeHtml(category.name || category.id)}<span>${category.items?.length ?? 0}</span></button>`).join('')}
    </div>
  </div></article>`;
}

export function renderDetailBlock(data) {
  const stats = [
    ['Level', data.level],
    ['Max', data.max],
    ['Amount', data.amount],
    ['Sell price', data.sellPrice],
    ['Purchase multiplier', data.purchaseMultiplier],
  ].filter(([, value]) => value !== undefined && value !== null);
  const effects = Array.isArray(data.effects) ? data.effects : Array.isArray(data.potentialEffects) ? data.potentialEffects : [];
  return `<article class="ui-card ui-domain-detail"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>${escapeHtml(data.name || data.id || 'Item')}</strong><span>Details</span></div></div>
    ${data.description ? `<p class="ui-muted">${escapeHtml(data.description)}</p>` : ''}
    <div class="ui-stat-grid">${stats.map(([label, value]) => `<div class="ui-stat"><div class="ui-stat__label">${escapeHtml(label)}</div><div class="ui-stat__value">${escapeHtml(formatNumber(value))}</div></div>`).join('')}</div>
    ${effects.length ? `<div class="ui-detail-effects"><strong>Effects</strong><pre class="ui-domain-json">${escapeHtml(JSON.stringify(effects, null, 2).slice(0, 8000))}</pre></div>` : ''}
  </div></article>`;
}

export function renderWorldMap(data, detail = null) {
  if (!data) return '';
  const tiles = data.tiles || data.mapTiles || data.mapTilesProcessed;
  if (!Array.isArray(tiles) || !Array.isArray(tiles[0])) return '';
  const detailBlock = detail ? '<pre class="ui-domain-json ui-world-detail-json">' + escapeHtml(JSON.stringify(detail, null, 2).slice(0, 7000)) + '</pre>' : '';
  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>Map</strong><span>' + tiles.length + ' × ' + tiles[0].length + '</span></div></div>' +
    '<div class="ui-map-grid">' +
      tiles.map((row, i) => row.map((tile, j) => {
        const label = String(tile?.metaData?.name || tile?.metaData?.id || '?');
        const classes = ['ui-map-tile', tile?.isRunning ? 'is-running' : '', tile?.isHighlight ? 'is-highlight' : ''].filter(Boolean).join(' ');
        return '<button class="' + classes + '" title="' + escapeHtml(label) + '" data-command="query-map-tile-details" data-i="' + i + '" data-j="' + j + '">' +
          escapeHtml(label.slice(0, 2)) +
          '</button>';
      }).join('')).join('') +
    '</div>' +
    detailBlock +
  '</div></article>';
}

export function renderDataBlock(label, data, config) {
  if (data == null) {
    return `<article class="ui-card"><div class="ui-card__body ui-domain-empty">
      <span>No data yet.</span><small>Enter this page after the game is initialized to request its live worker snapshot.</small>
    </div></article>`;
  }
  if (config.title === 'Social') return renderSocial(data);
  if (config.title === 'Shop' && label === 'items resources data') {
    const list = Array.isArray(data.available) ? data.available : [];
    return renderListBlock('Purchasable resources', list, config, { type: 'shop-resource', purchaseMultiplier: data.purchaseMultiplier });
  }
  if (config.title === 'Workshop' && label === 'plantations data' && Array.isArray(data.available)) {
    return renderListBlock('Plantations', data.available, config, {
      type: 'plantation',
      wateringUnlocked: Boolean(data.isWateringUnlocked),
      automationUnlocked: Boolean(data.isAutomationUnlocked),
      showRemove: true,
    });
  }
  const collection = pickCollection(data);
  if (collection.length) {
    return renderListBlock(label, collection, config, {
      automationUnlocked: config.title === 'Shop' && Boolean(data.isAutomationUnlocked),
    });
  }

  const stats = Object.entries(data).filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value));
  if (stats.length) {
    return `<article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>Live worker state</span></div></div>
      <div class="ui-stat-grid">${stats.slice(0, 12).map(([key, value]) => `<div class="ui-stat">
        <div class="ui-stat__label">${escapeHtml(key)}</div><div class="ui-stat__value">${escapeHtml(formatNumber(value))}</div>
      </div>`).join('')}</div>
    </div></article>`;
  }

  return `<article class="ui-card"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>Structured response</span></div></div>
    <pre class="ui-domain-json">${escapeHtml(JSON.stringify(data, null, 2).slice(0, 12000))}</pre>
  </div></article>`;
}

