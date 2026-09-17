import './settings-view.css';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function renderSettingsView(snapshot) {
  const save = snapshot?.raw?.['saved-string']?.string || '';
  const persisted = snapshot?.initialized && !snapshot?.loading;
  const status = snapshot?.loading ? 'Loading save…' : persisted ? 'Autosave active' : 'Starting runtime…';

  return `<section class="ui-page-head">
    <div>
      <div class="ui-kicker">System</div>
      <h1>Settings</h1>
      <p>Manage saves and runtime controls. Saves are persisted locally by the engine client and restored automatically on startup.</p>
    </div>
    <div class="ui-status-pill">${escapeHtml(status)}</div>
  </section>
  <section class="ui-grid">
    <article class="ui-card">
      <div class="ui-card__body">
        <div class="ui-section-title"><div><strong>Save data</strong><span>Portable snapshot</span></div></div>
        <div class="ui-actions">
          <button class="ui-btn ui-btn--primary" data-command="get-save-string">Export save</button>
          <label class="ui-btn ui-file-btn">Import file<input type="file" accept=".json,.txt,application/json,text/plain" data-action="import-save-file"></label>
          <button class="ui-btn" data-command="load-save-text">Load text</button>
        </div>
        <textarea class="ui-save-input" data-action="save-text" spellcheck="false" placeholder="Paste a save string or JSON save object here…">${escapeHtml(save)}</textarea>
        <div class="ui-actions">
          <button class="ui-btn" data-command="copy-save">Copy exported save</button>
          <button class="ui-btn ui-btn--danger" data-command="reset-game">Reset game</button>
        </div>
        <p class="ui-muted">The game keeps its rolling save in browser storage. Exported text is a portable copy you can move between browsers.</p>
      </div>
    </article>
    <article class="ui-card">
      <div class="ui-card__body">
        <div class="ui-section-title"><div><strong>Runtime</strong><span>Migration status</span></div></div>
        <div class="ui-stat-grid">
          <div class="ui-stat"><div class="ui-stat__label">Worker</div><div class="ui-stat__value">${snapshot?.initialized ? 'Ready' : 'Booting'}</div></div>
          <div class="ui-stat"><div class="ui-stat__label">Local save</div><div class="ui-stat__value">${persisted ? 'Enabled' : 'Pending'}</div></div>
          <div class="ui-stat"><div class="ui-stat__label">Legacy bundle</div><div class="ui-stat__value">Removed</div></div>
        </div>
      </div>
    </article>
  </section>`;
}

export function decodePortableSave(text) {
  const normalized = String(text ?? '').trim();
  if (!normalized) throw new Error('Save text is empty');

  try {
    const parsed = JSON.parse(normalized);
    if (!parsed || typeof parsed !== 'object') throw new Error('Save JSON must be an object');
    return parsed;
  } catch {
    let decoded;
    try {
      decoded = decodeURIComponent(escape(atob(normalized)));
    } catch {
      throw new Error('Save text is neither JSON nor a valid portable save string');
    }
    const parsed = JSON.parse(decoded);
    if (!parsed || typeof parsed !== 'object') throw new Error('Decoded save must be an object');
    return parsed;
  }
}
