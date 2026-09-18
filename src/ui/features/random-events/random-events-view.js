import './random-events-view.css';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]));
}

function formatTime(seconds) {
  const value = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(value / 60);
  const rest = Math.floor(value % 60);
  return minutes + ':' + String(rest).padStart(2, '0');
}

export function getRandomEventsQueries() {
  return [['query-event-data', {}]];
}

function renderOpened(data) {
  const event = data?.openedEventData;
  if (!event) return '<article class="ui-card"><div class="ui-card__body ui-domain-empty">No event is open. Open an active event to inspect its options.</div></article>';
  const selected = event.selectedOption;
  return '<article class="ui-card ui-event-open">' +
    '<div class="ui-card__body">' +
      '<div class="ui-section-title"><div><div class="ui-kicker">Active event</div><strong>' + escapeHtml(event.name || event.id) + '</strong></div>' +
      '<button class="ui-btn" data-command="set-event-data-opened" data-event-id="' + escapeHtml(event.id) + '" data-opened="false">Close</button></div>' +
      '<p>' + escapeHtml(event.description || '') + '</p>' +
      '<div class="ui-event-options">' +
        (Array.isArray(event.options) ? event.options.map((option) =>
          '<article class="ui-event-option" data-active="' + String(selected?.id === option.id) + '">' +
            '<div><strong>' + escapeHtml(option.name || option.id) + '</strong><p>' + escapeHtml(option.description || '') + '</p></div>' +
            '<div class="ui-event-option__controls">' +
              '<button class="ui-btn ' + (option.affordable ? 'ui-btn--primary' : '') + '" data-command="select-event-option" data-event-id="' + escapeHtml(event.id) + '" data-option-id="' + escapeHtml(option.id) + '" ' + (option.affordable && !selected ? '' : 'disabled') + '>Choose</button>' +
              (Array.isArray(option.revealedEffects) && option.revealedEffects.length ? '<small>' + escapeHtml(option.revealedEffects.map((effect) => effect.name || effect.id).join(' · ')) + '</small>' : '') +
            '</div>' +
          '</article>'
        ).join('') : '<div class="ui-muted">No options available.</div>') +
      '</div>' +
      (selected ? '<div class="ui-event-result"><strong>Selected: ' + escapeHtml(selected.name || selected.id) + '</strong>' + (selected.triggeredEffect ? '<span>' + escapeHtml(selected.triggeredEffect.name || selected.triggeredEffect.id) + '</span><p>' + escapeHtml(selected.triggeredEffect.description || '') + '</p>' : '<span>No revealed triggered effect.</span>') + '</div>' : '') +
    '</div>' +
  '</article>';
}

export function renderRandomEventsView(snapshot) {
  const data = snapshot?.raw?.['random-events-data'] || {};
  const list = Array.isArray(data.list) ? data.list : [];
  const opened = data.openedEventData?.id;
  return '<section class="ui-page-head">' +
    '<div><div class="ui-kicker">World events</div><h1>Events</h1><p>Review active random events, open their choices, and resolve available options.</p></div>' +
    '<div class="ui-status-pill">' + list.length + ' active</div>' +
  '</section>' +
  (list.length ? '<section class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Active events</strong><span>Expires automatically</span></div></div><div class="ui-event-list">' +
    list.map((event) =>
      '<article class="ui-event-list-item" data-active="' + String(event.id === opened) + '">' +
        '<div><strong>' + escapeHtml(event.name || event.id) + '</strong><span>' + formatTime(event.expiresIn) + ' remaining</span>' + (event.selectedOption ? '<small>Resolved choice: ' + escapeHtml(event.selectedOption) + '</small>' : '') + '</div>' +
        '<button class="ui-btn" data-command="set-event-data-opened" data-event-id="' + escapeHtml(event.id) + '" data-opened="' + String(event.id !== opened) + '">' + (event.id === opened ? 'Open' : 'Inspect') + '</button>' +
      '</article>'
    ).join('') +
  '</div></div></section>' : '<article class="ui-card"><div class="ui-card__body ui-domain-empty"><div>No active random events right now.</div></div></article>') +
  renderOpened(data);
}
