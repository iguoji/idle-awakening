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
      const autocastEnabled = Boolean(item?.autocast?.isEnabled);
      controls += '<label class="ui-inline-check"><input type="checkbox" data-action="spell-autocast" data-id="' + escapeHtml(id) + '" ' + (autocastEnabled ? 'checked' : '') + '/> Auto-cast</label>';
      controls += '<button class="ui-btn" data-command="get-spell-level-effects" data-id="' + escapeHtml(id) + '" data-level="' + Math.max(1, Number(item?.level || 1) + 1) + '">Next level</button>';
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
    if (config.title === 'Inventory') {
      const consumeEnabled = Boolean(item?.autoconsume?.isEnabled);
      const sellEnabled = Boolean(item?.autosell?.isEnabled);
      controls = '<label class="ui-quantity"><span>Amount</span><input type="number" min="1" step="1" value="1" data-action="inventory-amount" data-id="' + escapeHtml(id) + '"/></label>' + controls;
      if (item?.isConsumable) controls += '<label class="ui-inline-check"><input type="checkbox" data-action="inventory-autoconsume" data-id="' + escapeHtml(id) + '" ' + (consumeEnabled ? 'checked' : '') + '/> Auto use</label>';
      if (item?.isSellable) controls += '<label class="ui-inline-check"><input type="checkbox" data-action="inventory-autosell" data-id="' + escapeHtml(id) + '" ' + (sellEnabled ? 'checked' : '') + '/> Auto sell</label>';
      controls += '<button class="ui-btn" data-command="query-sell-details" data-id="' + escapeHtml(id) + '">Sell details</button>';
    }
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

export function renderSpellLevelEffects(data) {
  if (!data || typeof data !== 'object') return '';
  const effects = Array.isArray(data.effects) ? data.effects : [];
  const potential = Array.isArray(data.potentialEffects) ? data.potentialEffects : [];
  return '<article class="ui-card ui-domain-detail"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>Next spell level</strong><span>' + (data.affordable === false ? 'Not currently affordable' : 'Affordable') + '</span></div></div>' +
    '<div class="ui-stat-grid"><div class="ui-stat"><div class="ui-stat__label">XP rate</div><div class="ui-stat__value">' + escapeHtml(formatNumber(data.xpRate)) + '</div></div></div>' +
    (effects.length ? '<div class="ui-detail-effects"><strong>Cast effects</strong><div class="ui-effect-list">' + effects.map((effect) => '<div class="ui-effect-row"><span>' + escapeHtml(effect.name || effect.id) + '</span><strong>' + escapeHtml(formatNumber(effect.value)) + '</strong></div>').join('') + '</div></div>' : '') +
    (potential.length ? '<div class="ui-detail-effects"><strong>Permanent effects</strong><div class="ui-effect-list">' + potential.map((effect) => '<div class="ui-effect-row"><span>' + escapeHtml(effect.name || effect.id) + '</span><strong>' + escapeHtml(formatNumber(effect.value)) + '</strong></div>').join('') + '</div></div>' : '') +
  '</div></article>';
}

export function renderWorldGeneralData(data) {
  const generation = data?.mapGeneration || {};
  const effects = Array.isArray(data?.stats?.effects) ? data.stats.effects : [];
  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>World statistics</strong><span>Generation and exploration</span></div></div>' +
    '<div class="ui-stat-grid"><div class="ui-stat"><div class="ui-stat__label">Map level</div><div class="ui-stat__value">' + escapeHtml(formatNumber(generation.level)) + ' / ' + escapeHtml(formatNumber(generation.maxLevel)) + '</div></div><div class="ui-stat"><div class="ui-stat__label">Generation</div><div class="ui-stat__value">' + (generation.isUnlocked ? (generation.affordable ? 'Available' : 'Needs fragments') : 'Locked') + '</div></div><div class="ui-stat"><div class="ui-stat__label">Gathering</div><div class="ui-stat__value">' + (data.isProducingGathering ? 'Producing' : 'Idle') + '</div></div></div>' +
    (effects.length ? '<div class="ui-effect-list">' + effects.map((effect) => '<div class="ui-effect-row"><span>' + escapeHtml(effect.name || effect.id) + '</span><strong>' + escapeHtml(formatNumber(effect.value)) + '</strong></div>').join('') + '</div>' : '') +
  '</div></article>';
}

export function renderMagicStats(data) {
  if (!data || typeof data !== 'object') return '';
  const groups = Object.entries(data).filter(([, effects]) => Array.isArray(effects) && effects.length);
  if (!groups.length) return '<article class="ui-card"><div class="ui-card__body ui-domain-empty">No active magic modifiers.</div></article>';
  return groups.map(([group, effects]) => '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>' + escapeHtml(group.replaceAll('_', ' ')) + '</strong><span>Magic modifiers</span></div></div>' +
    '<div class="ui-effect-list">' + effects.map((effect) => '<div class="ui-effect-row"><span>' + escapeHtml(effect.name || effect.id) + '</span><strong>' + escapeHtml(formatNumber(effect.value)) + '</strong></div>').join('') + '</div>' +
  '</div></article>').join('');
}

export function renderGuildEffects(data) {
  if (!Array.isArray(data) || !data.length) return '<article class="ui-card"><div class="ui-card__body ui-domain-empty">No guild permanent effects yet.</div></article>';
  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>Guild permanent effects</strong><span>Retained progression</span></div></div>' +
    '<div class="ui-domain-list">' + data.map((guild) => {
      const effects = Object.values(guild.effects || {}).filter((effect) => effect && typeof effect === 'object').slice(0, 24);
      return '<article class="ui-domain-item"><div class="ui-domain-item__main">' +
        '<div class="ui-domain-item__title"><strong>' + escapeHtml(guild.name || guild.id) + '</strong><span>' + effects.length + ' effects</span></div>' +
        (effects.length ? '<div class="ui-effect-list">' + effects.map((effect) => '<div class="ui-effect-row"><span>' + escapeHtml(effect.name || effect.id) + '</span><strong>' + escapeHtml(formatNumber(effect.value)) + '</strong></div>').join('') + '</div>' : '<span class="ui-muted">No numeric effects exposed.</span>') +
        '</div></article>';
    }).join('') + '</div>' +
  '</div></article>';
}

export function renderProductionBlock(label, data, config, context = {}) {
  const list = Array.isArray(data?.available) ? data.available : [];
  const slots = data?.slots;
  const effort = data?.efforts;
  const headerStats = [];
  if (slots && typeof slots === 'object') {
    if (slots.total !== undefined) headerStats.push(['Active slots', slots.total]);
    if (slots.max !== undefined) headerStats.push(['Slot capacity', slots.max]);
  }
  if (effort && typeof effort === 'object' && effort.value !== undefined) headerStats.push(['Effort income', effort.value]);
  const summary = headerStats.length
    ? '<div class="ui-stat-grid">' + headerStats.map(([key, value]) => '<div class="ui-stat"><div class="ui-stat__label">' + escapeHtml(key) + '</div><div class="ui-stat__value">' + escapeHtml(formatNumber(value)) + '</div></div>').join('') + '</div>'
    : '';
  const breakdowns = list.filter((item) => item?.breakDown && typeof item.breakDown === 'object').slice(0, 6);
  const breakdownBlock = breakdowns.length
    ? '<div class="ui-production-breakdowns"><div class="ui-section-title"><div><strong>Resource flow</strong><span>Current recipe outputs</span></div></div>' +
      breakdowns.map((item) => {
        const entries = Object.values(item.breakDown || {}).filter((entry) => entry && typeof entry === 'object' && entry.value !== undefined).slice(0, 6);
        if (!entries.length) return '';
        return '<div class="ui-production-breakdown"><strong>' + escapeHtml(item.name || item.id) + '</strong>' +
          entries.map((entry) => '<div class="ui-effect-row"><span>' + escapeHtml(entry.name || entry.id) + '</span><strong>' + escapeHtml(formatNumber(entry.value)) + '</strong></div>').join('') +
        '</div>';
      }).join('') + '</div>'
    : '';
  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>' + escapeHtml(label) + '</strong><span>Production</span></div></div>' +
    summary +
    breakdownBlock +
    '<div class="ui-domain-list">' + list.slice(0, 100).map((item) => renderItemCard(item, config, { filterId: context.filterId || (label.includes('alchemy') ? 'alchemy' : 'crafting') })).join('') + '</div>' +
    '</div></article>';
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
  const drops = Array.isArray(detail?.drops) ? detail.drops : [];
  const detailBlock = detail
    ? '<div class="ui-world-tile-detail">' +
      '<div class="ui-section-title"><div><strong>' + escapeHtml(detail.name || detail.metaData?.name || 'Tile') + '</strong><span>Tile ' + escapeHtml(detail.i) + ':' + escapeHtml(detail.j) + '</span></div>' +
      '<button class="ui-btn" data-command="toggle-map-tile-running" data-i="' + escapeHtml(detail.i) + '" data-j="' + escapeHtml(detail.j) + '" data-flag="' + String(!detail.isRunning) + '">' + (detail.isRunning ? 'Stop exploration' : 'Explore tile') + '</button></div>' +
      '<div class="ui-stat-grid">' +
        '<div class="ui-stat"><div class="ui-stat__label">Distance</div><div class="ui-stat__value">' + escapeHtml(formatNumber(detail.distance)) + '</div></div>' +
        '<div class="ui-stat"><div class="ui-stat__label">Gathering effort</div><div class="ui-stat__value">' + escapeHtml(formatNumber(detail.cost?.gathering_effort?.value)) + '</div></div>' +
        '<div class="ui-stat"><div class="ui-stat__label">Visible drops</div><div class="ui-stat__value">' + drops.length + '</div></div>' +
      '</div>' +
      (drops.length ? '<div class="ui-world-drops">' + drops.map((drop) => '<span>' + escapeHtml(drop.resource?.name || drop.id) + '</span>').join('') + '</div>' : '<div class="ui-muted">No revealed drops on this tile yet.</div>') +
      '</div>'
    : '';
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
  if (config.title === 'Social') return label === 'all guilds effects' ? renderGuildEffects(data) : renderSocial(data);
  if (config.title === 'Spellbook' && label === 'general magic stats') return renderMagicStats(data);
  if (config.title === 'Spellbook' && label === 'spell level effects') return renderSpellLevelEffects(data);
  if (config.title === 'World' && label === 'map general data') return renderWorldGeneralData(data);
  if (config.title === 'Shop' && label === 'items resources data') {
    const list = Array.isArray(data.available) ? data.available : [];
    return renderListBlock('Purchasable resources', list, config, { type: 'shop-resource', purchaseMultiplier: data.purchaseMultiplier });
  }
  if (config.title === 'Workshop' && (label === 'crafting data crafting' || label === 'crafting data alchemy') && Array.isArray(data.available)) {
    return renderProductionBlock(label, data, config, { filterId: label.endsWith('alchemy') ? 'alchemy' : 'crafting' });
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

