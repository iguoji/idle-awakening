function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function pct(value) {
  return `${Math.max(0, Math.min(100, Number(value) || 0))}%`;
}

export function renderActionCard(action) {
  const xp = Number(action.xp) || 0;
  const maxXp = Number(action.maxXp) || 0;
  const active = Boolean(action.active);

  return `
    <article class="ui-action" data-active="${active}">
      <div class="ui-action__main">
        <div class="ui-action__title"><strong>${escapeHtml(action.name)}</strong><span>Lv.${escapeHtml(action.level)}</span></div>
        <div class="ui-action__meta"><span>${escapeHtml(action.category || 'general')}</span><span>${Math.floor(xp)} / ${Math.floor(maxXp)} XP</span></div>
        <div class="ui-progress"><i style="width:${pct(maxXp ? (xp / maxXp) * 100 : 0)}"></i></div>
      </div>
      <button class="ui-btn ${active ? '' : 'ui-btn--primary'}" data-action="run-action" data-id="${escapeHtml(action.id)}" ${active ? 'disabled' : ''}>${active ? 'Running' : 'Run'}</button>
    </article>
  `;
}
