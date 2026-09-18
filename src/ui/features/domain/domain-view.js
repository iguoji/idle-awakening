import './domain-view.css';
import { DOMAIN_CONFIG } from './config.js';
import { escapeHtml } from './format.js';
import {
  renderDataBlock,
  renderDetailBlock,
  renderInventoryToolbar,
  renderShopToolbar,
  renderWorldMap,
  renderWorldToolbar,
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
  if (view === 'world') { blocks.unshift(renderWorldMap(raw['map-data'])); blocks.unshift(renderWorldToolbar()); }
  const detail = config.detailsCommand ? raw['item-details'] : null;
  if (detail) blocks.splice(1, 0, renderDetailBlock(detail));

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">${escapeHtml(config.kicker)}</div><h1>${escapeHtml(config.title)}</h1><p>${escapeHtml(config.description)}</p></div>
    <div class="ui-status-pill">${escapeHtml(readiness)}</div>
  </section>
  <section class="ui-grid ui-grid--single">${blocks.filter(Boolean).join('')}</section>`;
}

