function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

export function renderResourceCard(resource) {
  const value = Math.floor(Number(resource.value) || 0);
  const cap = Number(resource.cap) || 0;
  const progress = cap > 0 ? Math.max(0, Math.min(100, (value / cap) * 100)) : 0;

  return `
    <div class="ui-resource">
      <div class="ui-resource__top"><span>${escapeHtml(resource.label)}</span><strong>${value}</strong></div>
      ${cap > 0 ? `<div class="ui-resource__bar"><i style="width:${progress}%"></i></div>` : ''}
      <small>${resource.delta >= 0 ? '+' : ''}${Number(resource.delta || 0).toFixed(2)} / sec</small>
    </div>
  `;
}
