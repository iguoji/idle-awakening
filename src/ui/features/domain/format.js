export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function formatNumber(value) {
  return typeof value === 'number' && Number.isFinite(value)
    ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value)
    : value;
}

export function pickCollection(data) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== 'object') return [];
  for (const key of ['available', 'items', 'spells', 'guilds', 'recipes', 'plantations', 'tiles', 'list']) {
    if (Array.isArray(data[key])) return data[key];
  }
  return [];
}

export function itemId(item) {
  return item?.id ?? item?.key ?? item?.name;
}

export function renderMeta(item) {
  const level = item?.level ?? item?.actualLevel;
  const max = item?.max ?? item?.maxLevel;
  const parts = [];
  if (level !== undefined) {
    parts.push(`Lv ${escapeHtml(formatNumber(level))}${max !== undefined ? ` / ${escapeHtml(formatNumber(max))}` : ''}`);
  }
  if (item?.category) parts.push(escapeHtml(item.category));
  if (item?.tier !== undefined) parts.push(`Tier ${escapeHtml(item.tier)}`);
  if (item?.isRunning || item?.active) parts.push('Running');
  if (item?.wateringLevel !== undefined) parts.push(`Water ${escapeHtml(formatNumber(item.wateringLevel))}`);
  return parts.join(' · ');
}

export function renderButton(command, label, item, extra = {}) {
  const id = itemId(item);
  if (!id) return '';
  const amount = extra.amount !== undefined ? ` data-amount="${escapeHtml(extra.amount)}"` : '';
  const filter = extra.filterId ? ` data-filter-id="${escapeHtml(extra.filterId)}"` : '';
  return `<button class="ui-btn ui-btn--primary" data-command="${escapeHtml(command)}" data-id="${escapeHtml(id)}"${filter}${amount}>${escapeHtml(label)}</button>`;
}
