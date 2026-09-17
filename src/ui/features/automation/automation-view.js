import './automation-view.css';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

export function getAutomationQueries() {
  return [['query-actions-lists', {}]];
}

export function renderAutomationView(snapshot) {
  const data = snapshot?.raw?.['actions-lists'] || [];
  const lists = Array.isArray(data) ? data : [];
  const meta = snapshot?.actionsMeta || {};
  const running = meta.current?.[0] || null;
  const enabled = Boolean(meta.automationEnabled);
  const interval = Number(meta.autotriggerIntervalSetting ?? 10) || 10;

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Automation</div><h1>Action Lists</h1><p>Run saved action sequences and optionally let the game auto-trigger eligible lists.</p></div>
    <div class="ui-status-pill">${enabled ? `Auto on · ${interval}s` : 'Auto off'}</div>
  </section>
  <section class="ui-card ui-automation-toolbar">
    <div class="ui-card__body">
      <div class="ui-automation-row">
        <label class="ui-check"><input type="checkbox" data-action="automation-enabled" ${enabled ? 'checked' : ''}/> Enable automation</label>
        <label class="ui-automation-interval"><span>Trigger interval</span><input type="number" min="1" step="1" value="${escapeHtml(interval)}" data-action="automation-interval" /></label>
        <button class="ui-btn" data-command="query-actions-lists">Refresh</button>
      </div>
      ${running ? `<div class="ui-muted ui-automation-running">Running list: <strong>${escapeHtml(running.name || running.id)}</strong></div>` : '<div class="ui-muted ui-automation-running">No list is currently running.</div>'}
    </div>
  </section>
  <section class="ui-card">
    <div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Saved lists</strong><span>${lists.length} lists</span></div></div>
      <div class="ui-automation-list">
        ${lists.map((list) => {
          const isRunning = running?.id === list.id;
          const actions = Array.isArray(list.actions) ? list.actions : [];
          const auto = Boolean(list.autotrigger?.isEnabled || list.autotrigger?.rules?.length);
          return `<article class="ui-automation-item" data-active="${isRunning}">
            <div class="ui-automation-item__main">
              <div class="ui-automation-item__title"><strong>${escapeHtml(list.name || list.id)}</strong><span>${actions.length} actions · ${auto ? 'Auto eligible' : 'Manual'}</span></div>
              <p>${actions.slice(0, 5).map((action) => escapeHtml(action.name || action.id)).join(' → ') || 'Empty list'}</p>
            </div>
            <div class="ui-automation-item__controls">
              ${isRunning ? `<button class="ui-btn" data-command="stop-list" data-id="${escapeHtml(list.id)}">Stop</button>` : `<button class="ui-btn ui-btn--primary" data-command="run-list" data-id="${escapeHtml(list.id)}">Run</button>`}
            </div>
          </article>`;
        }).join('') || '<div class="ui-empty-state"><span class="ui-empty-state__icon">◎</span><h2>No saved action lists</h2><p>Create lists from the Actions workflow once the list editor is unlocked.</p></div>'}
      </div>
    </div>
  </section>`;
}
