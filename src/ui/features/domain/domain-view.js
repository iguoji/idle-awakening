import './domain-view.css';
import { DOMAIN_CONFIG } from './config.js';
import { escapeHtml, formatNumber, itemId, pickCollection, renderButton, renderMeta } from './format.js';

function renderItemCard(item, config, context = {}) {
  const id = itemId(item);
  const title = item?.name || id || 'Unknown';
  const description = item?.description || item?.text || '';
  let controls = '';

  if (context.type === 'plantation') {
    controls = renderButton('purchase-plantation', 'Upgrade', item);
    if (item?.isWateringUnlocked) {
      controls += renderButton('set-plantation-watering', 'Water', item, {
        amount: Math.max(0, Number(item?.wateringLevel || 0) + 1),
      });
    }
  } else if (config.primary?.command === 'purchase-furniture') {
    controls = renderButton(config.primary.command, config.primary.label, item, { filterId: 'furniture' });
  } else if (config.primary?.command === 'set-crafting-level') {
    const filterId = context.filterId || (item?.tags?.includes?.('alchemy') || item?.category === 'alchemy' ? 'alchemy' : 'crafting');
    const running = Boolean(item?.isRunning || item?.level > 0);
    controls = renderButton('set-crafting-level', running ? 'Stop' : 'Run +1', item, {
      filterId,
      amount: running ? 0 : Math.max(1, Number(item?.level || 0) + 1),
    });
  } else if (config.primary?.command) {
    controls = renderButton(config.primary.command, config.primary.label, item, { amount: 1 });
  }

  if (config.actions) {
    controls = config.actions.map((action) => renderButton(action.command, action.label, item, { amount: action.amount })).join('');
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

function renderListBlock(label, list, config, context = {}, limit = 100) {
  return `<article class="ui-card"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>${escapeHtml(label)}</strong><span>${list.length} entries</span></div></div>
    <div class="ui-domain-list">${list.slice(0, limit).map((item) => renderItemCard(item, config, context)).join('')}</div>
    ${list.length > limit ? '<p class="ui-muted">Showing the first 100 entries.</p>' : ''}
  </div></article>`;
}

function renderSocial(data) {
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
          <div class="ui-domain-item__controls">${guild.id === selected ? '' : renderButton('select-guild', 'Join', guild)}</div>
        </article>`).join('')}</div>
      </div></article>`
    : '';
  const upgradeBlock = upgrades.length
    ? renderListBlock('Guild upgrades', upgrades, { primary: { command: 'purchase-guild-item', label: 'Upgrade' } })
    : '';
  return guildBlock + upgradeBlock;
}

function renderDataBlock(label, data, config) {
  if (data == null) {
    return `<article class="ui-card"><div class="ui-card__body ui-domain-empty">
      <span>No data yet.</span><small>Enter this page after the game is initialized to request its live worker snapshot.</small>
    </div></article>`;
  }
  if (config.title === 'Social') return renderSocial(data);
  if (config.title === 'Workshop' && label === 'plantations data' && Array.isArray(data.available)) {
    return renderListBlock('Plantations', data.available, config, { type: 'plantation' });
  }
  const collection = pickCollection(data);
  if (collection.length) return renderListBlock(label, collection, config);

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

function renderWorldMap(data) {
  if (!data) return '';
  const tiles = data.tiles || data.mapTiles || data.mapTilesProcessed;
  if (!Array.isArray(tiles) || !Array.isArray(tiles[0])) return '';
  return `<article class="ui-card"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>Map</strong><span>${tiles.length} × ${tiles[0].length}</span></div></div>
    <div class="ui-map-grid">${tiles.flat().map((tile) => `<span title="${escapeHtml(tile?.metaData?.name || 'Unknown')}">${tile?.isRunning ? '●' : '·'}</span>`).join('')}</div>
  </div></article>`;
}

export function getDomainQueryConfig(view) {
  return DOMAIN_CONFIG[view] || null;
}

export function renderDomainView(view, snapshot) {
  const config = DOMAIN_CONFIG[view];
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
