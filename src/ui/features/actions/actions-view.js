import { renderActionCard } from '../../components/action-card.js';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

export function renderActionsView(gameState) {
  const actions = gameState.actions || [];
  const nextAction = actions.find((action) => !action.active);

  return `
    <section class="ui-page-head">
      <div><div class="ui-kicker">Active progression</div><h1>Actions</h1><p>Run work continuously while you explore the rest of the game.</p></div>
      ${nextAction ? `<button class="ui-btn ui-btn--primary" data-action="run-action" data-id="${escapeHtml(nextAction.id)}">Run next</button>` : ''}
    </section>
    <section class="ui-grid">
      <article class="ui-card">
        <div class="ui-card__body">
          <div class="ui-section-title"><div><strong>Available actions</strong><span> · ${actions.length} unlocked</span></div><span class="ui-muted">Persistent background progress</span></div>
          <div class="ui-action-list">
            ${actions.map(renderActionCard).join('') || '<div class="ui-empty-state"><span class="ui-empty-state__icon">◎</span><h2>Loading actions…</h2></div>'}
          </div>
        </div>
      </article>
      <aside class="ui-card">
        <div class="ui-card__body">
          <div class="ui-kicker">Runtime boundary</div>
          <h2>Engine → UI</h2>
          <p class="ui-muted">The presentation reads normalized snapshots and sends named commands. Game rules, ticking, save data and worker transport stay outside this layer.</p>
          <div class="ui-boundary"><span>Worker snapshot</span><b>→</b><span>UI DTO</span></div>
          <div class="ui-boundary"><span>UI command</span><b>→</b><span>Game module</span></div>
        </div>
      </aside>
    </section>
  `;
}
