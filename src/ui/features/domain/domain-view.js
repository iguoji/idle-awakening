import './domain-view.css';
import { DOMAIN_CONFIG } from './config.js';
import {
  renderDataBlock,
  renderDetailBlock,
  renderInventoryToolbar,
  renderShopToolbar,
  renderWorldMap,
} from './domain-renderers.js';
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
  if (view === 'shop') blocks.unshift(renderShopToolbar(raw['items-data']));
  if (view === 'inventory') blocks.unshift(renderInventoryToolbar(raw['inventory-data']));
  if (view === 'world') blocks.unshift(renderWorldMap(raw['map-data']));
  const detail = config.detailsCommand ? raw['item-details'] : null;
  if (detail) blocks.splice(1, 0, renderDetailBlock(detail));

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">${escapeHtml(config.kicker)}</div><h1>${escapeHtml(config.title)}</h1><p>${escapeHtml(config.description)}</p></div>
    <div class="ui-status-pill">${escapeHtml(readiness)}</div>
  </section>
  <section class="ui-grid ui-grid--single">${blocks.filter(Boolean).join('')}</section>`;
}

function renderDetailBlock(data) {
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

function renderWorldMap(data) {
  if (!data) return '';
  const tiles = data.tiles || data.mapTiles || data.mapTilesProcessed;
  if (!Array.isArray(tiles) || !Array.isArray(tiles[0])) return '';
  return `<article class="ui-card"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>Map</strong><span>${tiles.length} × ${tiles[0].length}</span></div></div>
    <div class="ui-map-grid">${tiles.flat().map((tile) => `<span title="${escapeHtml(tile?.metaData?.name || 'Unknown')}">${tile?.isRunning ? '●' : '·'}</span>`).join('')}</div>
  </div></article>`;
}
