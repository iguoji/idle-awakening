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
  const affordable = action.affordable !== false;
  const bottleneck = action.missingResourceId ? `Needs ${action.missingResourceId}` : '';
  const focus = action.focused?.isFocused ? `Focus ${Math.round(Number(action.focused.focusBonus || 1) * 100)}%` : '';

  return `
    <article class="ui-action" data-active="${active}">
      <div class="ui-action__main">
        <div class="ui-action__title"><strong>${escapeHtml(action.name)}</strong><span>Lv.${escapeHtml(action.level)}</span></div>
        <div class="ui-action__meta"><span>${escapeHtml(action.category || 'general')}</span><span>${Math.floor(xp)} / ${Math.floor(maxXp)} XP</span></div>
        <div class="ui-progress"><i style="width:${pct(maxXp ? (xp / maxXp) * 100 : 0)}"></i></div>
        ${bottleneck || focus ? `<div class="ui-action__hints">${bottleneck ? `<span>${escapeHtml(bottleneck)}</span>` : ''}${focus ? `<span>${escapeHtml(focus)}</span>` : ''}</div>` : ''}
      </div>
      <div class="ui-action__controls">
        <button class="ui-btn" data-action="action-details" data-id="${escapeHtml(action.id)}">Details</button>
        <button class="ui-btn ${active || !affordable ? '' : 'ui-btn--primary'}" data-action="run-action" data-id="${escapeHtml(action.id)}" ${active || !affordable ? 'disabled' : ''}>${active ? 'Running' : affordable ? 'Run' : 'Unavailable'}</button>
      </div>
    </article>
  `;
}
