import './automation-view.css';

let editorDraft = null;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function clone(value) {
  return value && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
}

export function getAutomationQueries() {
  return editorDraft ? [] : [['query-actions-lists', {}]];
}

export function beginAutomationCreate() {
  editorDraft = {
    id: null,
    name: 'New action list',
    sort: 0,
    actions: [],
    autotrigger: { isEnabled: false, priority: 0, rules: [], pattern: {} },
  };
}

export function beginAutomationEdit(list) {
  editorDraft = clone(list) || null;
  if (editorDraft) {
    editorDraft.actions = Array.isArray(editorDraft.actions) ? editorDraft.actions : [];
    editorDraft.autotrigger = {
      isEnabled: false,
      priority: 0,
      rules: [],
      pattern: {},
      ...(editorDraft.autotrigger || {}),
    };
  }
}

export function closeAutomationEditor() {
  editorDraft = null;
}

export function getAutomationEditorDraft() {
  return clone(editorDraft);
}

function renderEditor(snapshot) {
  const allActions = Array.isArray(snapshot?.actions) ? snapshot.actions : [];
  const knownIds = new Set(allActions.map((action) => action.id));
  const draftActions = Array.isArray(editorDraft?.actions) ? editorDraft.actions : [];
  const missingDraftActions = draftActions
    .filter((action) => action?.id && !knownIds.has(action.id))
    .map((action) => ({ id: action.id, name: action.name || action.id, description: '' }));
  const actions = [...allActions, ...missingDraftActions];
  const selected = new Map(draftActions.map((action) => [action.id, Number(action.time) || 10]));
  const auto = editorDraft?.autotrigger || {};

  return `<section class="ui-card ui-automation-editor">
    <div class="ui-card__body">
      <div class="ui-section-title"><div><strong>${editorDraft?.id ? 'Edit action list' : 'Create action list'}</strong><span>${editorDraft?.id || 'new'}</span></div><button class="ui-btn" data-action="automation-cancel">Cancel</button></div>
      <div class="ui-automation-editor__meta">
        <label><span>Name</span><input class="ui-save-input" data-action="automation-draft-name" value="${escapeHtml(editorDraft?.name || '')}" /></label>
        <label><span>Sort</span><input type="number" min="0" step="1" data-action="automation-draft-sort" value="${escapeHtml(editorDraft?.sort ?? 0)}" /></label>
      </div>
      <div class="ui-automation-editor__section">
        <div class="ui-automation-editor__section-title"><strong>Actions</strong><span>Select actions and set duration.</span></div>
        <div class="ui-automation-actions">
          ${actions.slice(0, 160).map((action) => {
            const id = action?.id;
            if (!id) return '';
            const checked = selected.has(id);
            return `<label class="ui-automation-action-row"><input type="checkbox" data-action="automation-action" data-id="${escapeHtml(id)}" ${checked ? 'checked' : ''}/><span class="ui-automation-action-row__main"><strong>${escapeHtml(action.name || id)}</strong><small>${escapeHtml(action.description || '')}</small></span><input type="number" min="0.1" step="0.1" value="${escapeHtml(selected.get(id) ?? 10)}" data-action="automation-action-time" data-id="${escapeHtml(id)}" ${checked ? '' : 'disabled'} /></label>`;
          }).join('') || '<div class="ui-muted">No actions loaded yet.</div>'}
        </div>
      </div>
      <div class="ui-automation-editor__section">
        <div class="ui-automation-editor__section-title"><strong>Auto trigger</strong><span>Optional rule-driven activation.</span></div>
        <div class="ui-automation-editor__meta">
          <label class="ui-check"><input type="checkbox" data-action="automation-draft-autotrigger" ${auto.isEnabled ? 'checked' : ''}/> Enable this list for auto trigger</label>
          <label><span>Priority</span><input type="number" min="0" step="1" value="${escapeHtml(auto.priority ?? 0)}" data-action="automation-draft-priority" /></label>
        </div>
      </div>
      <div class="ui-actions">
        <button class="ui-btn ui-btn--primary" data-action="automation-save">Save list</button>
        ${editorDraft?.id ? `<button class="ui-btn" data-command="delete-action-list" data-id="${escapeHtml(editorDraft.id)}">Delete list</button>` : ''}
      </div>
    </div>
  </section>`;
}

export function renderAutomationView(snapshot) {
  const data = snapshot?.raw?.['actions-lists'] || [];
  const lists = Array.isArray(data) ? data : [];
  const meta = snapshot?.actionsMeta || {};
  const running = meta.runningList || null;
  const enabled = Boolean(meta.automationEnabled);
  const interval = Number(meta.autotriggerIntervalSetting ?? 10) || 10;

  if (editorDraft) {
    return `<section class="ui-page-head"><div><div class="ui-kicker">Automation</div><h1>Action Lists</h1><p>Design a saved sequence without writing directly to the engine until you save.</p></div><div class="ui-status-pill">Draft mode</div></section>${renderEditor(snapshot)}`;
  }

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Automation</div><h1>Action Lists</h1><p>Run saved action sequences and optionally let the game auto-trigger eligible lists.</p></div>
    <div class="ui-page-head__actions"><div class="ui-status-pill">${enabled ? `Auto on · ${interval}s` : 'Auto off'}</div><button class="ui-btn ui-btn--primary" data-action="automation-new">New list</button></div>
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
              <button class="ui-btn" data-action="automation-edit" data-id="${escapeHtml(list.id)}">Edit</button>
              ${isRunning ? `<button class="ui-btn" data-command="stop-list" data-id="${escapeHtml(list.id)}">Stop</button>` : `<button class="ui-btn ui-btn--primary" data-command="run-list" data-id="${escapeHtml(list.id)}">Run</button>`}
            </div>
          </article>`;
        }).join('') || '<div class="ui-empty-state"><span class="ui-empty-state__icon">◎</span><h2>No saved action lists</h2><p>Create a list to define a reusable progression loop.</p></div>'}
      </div>
    </div>
  </section>`;
}
