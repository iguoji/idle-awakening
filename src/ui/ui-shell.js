import './tokens.css';
import { renderResourceCard } from './components/resource-card.js';
import { renderActionsView } from './features/actions/actions-view.js';
import { beginAutomationCreate, beginAutomationEdit, closeAutomationEditor, getAutomationEditorDraft, getAutomationQueries, renderAutomationView } from './features/automation/automation-view.js';
import { getCharacterQueries, renderCharacterView } from './features/character/character-view.js';
import { getCoursesQueries, renderCoursesView } from './features/courses/courses-view.js';
import { getDomainQueryConfig, renderDomainView } from './features/domain/domain-view.js';
import { decodePortableSave, renderSettingsView } from './features/settings/settings-view.js';
import { getStatisticsQueries, renderStatisticsView } from './features/statistics/statistics-view.js';
import { createUiState, setActiveView, toggleSidebar } from './ui-state.js';

const NAV = [
  ['actions', 'Actions', '⚔', 'actions'],
  ['character', 'Character', '◉', null],
  ['statistics', 'Statistics', '▤', null],
  ['shop', 'Shop', '◈', 'shop'],
  ['inventory', 'Inventory', '▦', 'inventory'],
  ['courses', 'Courses', '▤', 'courses'],
  ['automation', 'Automation', '⟳', 'automations'],
  ['world', 'World', '◎', 'world'],
  ['property', 'Property', '⌂', 'property'],
  ['workshop', 'Workshop', '◇', 'workshop'],
  ['spellbook', 'Spellbook', '✦', 'spellbook'],
  ['social', 'Social', '♧', 'social'],
  ['settings', 'Settings', '⚙', null],
  ['about', 'About', 'ⓘ', null],
];

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function createFilterDraft(existing, order = []) {
  if (existing) return clone(existing);
  return {
    id: '',
    name: `Filter ${Math.max(1, order.length + 1)}`,
    condition: '',
    rules: [{ type: 'tag', object: '' }],
    isPinned: true,
    sortIndex: order.length,
    isRequired: false,
  };
}

function renderAboutView(snapshot) {
  const rawCount = Object.keys(snapshot?.raw || {}).length;
  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Architecture</div><h1>About</h1><p>The new client is a bundle-free application. UI code talks to a worker through a narrow adapter; extracted domain modules live under <code>src/game</code>.</p></div>
  </section>
  <section class="ui-grid">
    <article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Runtime boundary</strong><span>Current design</span></div></div>
      <div class="ui-boundary"><span>UI features</span><b>↓</b><span>GameAdapter</span><b>↓</b><span>Worker / domain</span></div>
      <div class="ui-stat-grid" style="margin-top:16px"><div class="ui-stat"><div class="ui-stat__label">Worker state</div><div class="ui-stat__value">${snapshot?.initialized ? 'Ready' : 'Booting'}</div></div><div class="ui-stat"><div class="ui-stat__label">Responses seen</div><div class="ui-stat__value">${rawCount}</div></div><div class="ui-stat"><div class="ui-stat__label">Legacy runtime</div><div class="ui-stat__value">Removed</div></div></div>
    </div></article>
  </section>`;
}

async function copyText(text) {
  if (!text) return false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  const area = document.createElement('textarea');
  area.value = text;
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch {}
  area.remove();
  return copied;
}

function downloadText(filename, text) {
  if (!text) return false;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  return true;
}

function captureFocusedField() {
  const element = document.activeElement;
  if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) return null;
  const action = element.dataset.action;
  if (!action) return null;
  return {
    action,
    value: element.value,
    start: typeof element.selectionStart === 'number' ? element.selectionStart : null,
    end: typeof element.selectionEnd === 'number' ? element.selectionEnd : null,
  };
}

function restoreFocusedField(shell, state) {
  if (!state) return;
  const element = [...shell.querySelectorAll('[data-action]')].find((candidate) => candidate.dataset.action === state.action);
  if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) return;
  element.value = state.value;
  element.focus({ preventScroll: true });
  if (state.start !== null && state.end !== null) {
    try { element.setSelectionRange(state.start, state.end); } catch {}
  }
}

export function mountUiShell({ root, game }) {
  if (!root) throw new Error('UI root is required');
  if (!game || typeof game.getSnapshot !== 'function' || typeof game.subscribe !== 'function') {
    throw new TypeError('UI requires a GameAdapter');
  }

  let uiState = createUiState();
  let gameState = game.getSnapshot();
  const requested = new Set();
  let refreshTimer = null;
  let actionSearchDebounce = null;

  function requestCommands(view, commands, force = false) {
    for (const [command, payload] of commands) {
      const key = `${view}:${command}:${JSON.stringify(payload || {})}`;
      if (!force && requested.has(key)) continue;
      requested.add(key);
      game.dispatch?.(command, payload);
    }
  }

  function getViewCommands(view) {
    if (view === 'character') return getCharacterQueries();
    if (view === 'courses') return getCoursesQueries();
    if (view === 'automation') return getAutomationQueries();
    if (view === 'statistics') return getStatisticsQueries();
    return getDomainQueryConfig(view)?.queries || [];
  }

  function requestView(view, force = false) {
    requestCommands(view, getViewCommands(view), force);
  }

  function scheduleViewRefresh(view) {
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = null;
    const interval = view === 'character' ? 500 : view === 'actions' ? 250 : view === 'courses' ? 500 : view === 'automation' ? 750 : view === 'statistics' ? 1000 : view === 'world' ? 1500 : 750;
    if (getViewCommands(view).length) refreshTimer = setInterval(() => requestView(view, true), interval);
  }

  const unsubscribe = game.subscribe((snapshot) => {
    gameState = snapshot;
    render();
  });

  async function loadTextSave(text) {
    try {
      const save = decodePortableSave(text);
      game.loadSave?.(save, { persist: true });
      return true;
    } catch (error) {
      console.error('[UI] Unable to import save:', error);
      window.alert?.(error.message || 'Invalid save');
      return false;
    }
  }

  function isUnlocked(unlockKey) {
    return !unlockKey || gameState?.unlocks?.[unlockKey] === true;
  }

  function openFilterEditor(existing = null) {
    const meta = gameState?.actionsMeta || {};
    uiState = { ...uiState, modal: { type: 'actions-filter', draft: createFilterDraft(existing, meta.customFiltersOrder || []) } };
    render();
  }

  function closeFilterEditor() {
    uiState = { ...uiState, modal: null };
    render();
  }

  function patchFilterDraft(mutator, rerender = false) {
    const modal = uiState.modal;
    if (!modal || modal.type !== 'actions-filter') return;
    const draft = clone(modal.draft);
    mutator(draft);
    uiState = { ...uiState, modal: { ...modal, draft } };
    if (rerender) render();
  }

  function saveFilterDraft() {
    const modal = uiState.modal;
    if (!modal || modal.type !== 'actions-filter') return;
    const draft = clone(modal.draft);
    const meta = gameState?.actionsMeta || {};
    const order = Array.isArray(meta.customFiltersOrder) ? meta.customFiltersOrder : [];
    const index = draft.id ? Math.max(0, order.indexOf(draft.id)) : order.length;
    draft.name = String(draft.name || '').trim() || 'Untitled filter';
    draft.condition = String(draft.condition || '').trim();
    draft.rules = (Array.isArray(draft.rules) ? draft.rules : [])
      .filter((rule) => rule && ['tag', 'resource', 'attribute'].includes(rule.type) && String(rule.object || '').trim())
      .map((rule) => ({ type: rule.type, object: String(rule.object).trim() }));
    if (draft.condition && !/^(?:\\s*(?:\\d+|AND|OR|NOT|\\(|\\))\\s*)+$/i.test(draft.condition)) {
      window.alert?.('Condition may only contain rule numbers, parentheses, AND, OR and NOT.');
      return;
    }
    const references = [...draft.condition.matchAll(/\\d+/g)].map((match) => Number(match[0]));
    if (references.some((reference) => reference < 1 || reference > draft.rules.length)) {
      window.alert?.('Condition references a rule that does not exist.');
      return;
    }
    draft.sortIndex = index;
    draft.isPinned = Boolean(draft.isPinned);
    if (!draft.id) delete draft.id;
    game.dispatch?.('save-actions-custom-filter', draft);
    closeFilterEditor();
  }

  function render() {
    const focusedField = captureFocusedField();
    const shell = document.createElement('div');
    shell.className = 'ui-shell';
    shell.dataset.sidebarOpen = String(uiState.sidebarOpen);
    shell.innerHTML = `
      <header class="ui-shell__topbar">
        <button class="ui-btn ui-shell__mobile" data-action="menu" aria-label="Open menu">☰</button>
        <div class="ui-shell__brand">Idle Awakening</div>
        <div class="ui-level">${gameState.initialized ? (gameState.loading ? 'Loading…' : 'Online') : 'Starting…'}</div>
      </header>
      <div class="ui-shell__body">
        <aside class="ui-shell__nav">
          <div class="ui-nav__section-title">Game</div>
          ${NAV.map(([id, label, icon, unlockKey]) => {
            const unlocked = isUnlocked(unlockKey);
            return `<button type="button" data-view="${id}" data-active="${uiState.activeView === id}" data-locked="${!unlocked}" ${unlocked ? '' : 'disabled aria-disabled="true"'}>
              <span class="ui-nav__icon">${icon}</span><span>${label}</span>${unlocked ? '' : '<span class="ui-nav__lock">⌘</span>'}
            </button>`;
          }).join('')}
          <div class="ui-nav__section-title ui-nav__section-title--lower">Resources</div>
          <div class="ui-resources">${(gameState.resources || []).map(renderResourceCard).join('')}</div>
        </aside>
        <main class="ui-shell__main">${renderView(uiState.activeView)}</main>
      </div>
    `;

    root.replaceChildren(shell);

    shell.querySelectorAll('[data-view]:not(:disabled)').forEach((button) => {
      button.addEventListener('click', () => {
        const view = button.dataset.view;
        uiState = setActiveView(uiState, view);
        requestView(view);
        scheduleViewRefresh(view);
        if (window.matchMedia('(max-width: 800px)').matches) {
          uiState = { ...uiState, sidebarOpen: false };
        }
        render();
      });
    });

    shell.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      uiState = toggleSidebar(uiState);
      render();
    });

    shell.querySelector('[data-action="filter-new"]')?.addEventListener('click', () => openFilterEditor());
    shell.querySelectorAll('[data-action="filter-edit"]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const filter = gameState?.actionsMeta?.customFilters?.[id];
        if (filter) openFilterEditor(filter);
      });
    });

    shell.querySelectorAll('[data-action="filter-cancel"]').forEach((button) => button.addEventListener('click', closeFilterEditor));
    shell.querySelector('[data-action="filter-modal-backdrop"]')?.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) closeFilterEditor();
    });

    shell.querySelector('[data-action="filter-name"]')?.addEventListener('input', (event) => {
      patchFilterDraft((draft) => { draft.name = event.target.value; });
    });
    shell.querySelector('[data-action="filter-condition"]')?.addEventListener('input', (event) => {
      patchFilterDraft((draft) => { draft.condition = event.target.value; });
    });
    shell.querySelector('[data-action="filter-pinned"]')?.addEventListener('change', (event) => {
      patchFilterDraft((draft) => { draft.isPinned = event.target.checked; }, true);
    });
    shell.querySelectorAll('[data-action="filter-rule-type"]').forEach((select) => {
      select.addEventListener('change', (event) => {
        patchFilterDraft((draft) => { draft.rules[Number(select.dataset.index)].type = event.target.value; }, true);
      });
    });
    shell.querySelectorAll('[data-action="filter-rule-object"]').forEach((input) => {
      input.addEventListener('input', (event) => {
        patchFilterDraft((draft) => { draft.rules[Number(input.dataset.index)].object = event.target.value; });
      });
    });
    shell.querySelector('[data-action="filter-rule-add"]')?.addEventListener('click', () => {
      patchFilterDraft((draft) => { draft.rules = [...(draft.rules || []), { type: 'tag', object: '' }]; }, true);
    });
    shell.querySelectorAll('[data-action="filter-rule-remove"]').forEach((button) => {
      button.addEventListener('click', () => {
        patchFilterDraft((draft) => {
          const index = Number(button.dataset.index);
          draft.rules = (draft.rules || []).filter((_, ruleIndex) => ruleIndex !== index);
        }, true);
      });
    });
    shell.querySelector('[data-action="filter-save"]')?.addEventListener('click', saveFilterDraft);

    shell.querySelector('[data-action="automation-new"]')?.addEventListener('click', () => {
      beginAutomationCreate();
      scheduleViewRefresh('automation');
      render();
    });

    shell.querySelectorAll('[data-action="automation-edit"]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const list = (gameState?.raw?.['actions-lists'] || []).find((candidate) => candidate?.id === id);
        if (!list) return;
        beginAutomationEdit(list);
        scheduleViewRefresh('automation');
        render();
      });
    });

    shell.querySelector('[data-action="automation-cancel"]')?.addEventListener('click', () => {
      closeAutomationEditor();
      requestView('automation', true);
      scheduleViewRefresh('automation');
      render();
    });

    shell.querySelectorAll('[data-action="automation-action"]').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const time = shell.querySelector(`[data-action="automation-action-time"][data-id="${CSS.escape(checkbox.dataset.id)}"]`);
        if (time) time.disabled = !checkbox.checked;
      });
    });

    shell.querySelector('[data-action="automation-preview-effects"]')?.addEventListener('click', () => {
      const draft = getAutomationEditorDraft();
      if (!draft) return;
      const actions = [...shell.querySelectorAll('[data-action="automation-action"]:checked')].map((checkbox) => {
        const timeInput = shell.querySelector(`[data-action="automation-action-time"][data-id="${CSS.escape(checkbox.dataset.id)}"]`);
        return { id: checkbox.dataset.id, time: Math.max(0.1, Number(timeInput?.value) || 10) };
      });
      game.dispatch?.('query-action-list-effects', {
        id: draft.id || null,
        listData: { ...draft, actions },
      });
      const button = shell.querySelector('[data-action="automation-preview-effects"]');
      if (button) button.textContent = 'Calculating…';
    });

    shell.querySelectorAll('[data-action="automation-move"]').forEach((button) => {
      button.addEventListener('click', () => {
        const lists = [...(gameState?.raw?.['actions-lists'] || [])];
        const index = lists.findIndex((list) => String(list?.id) === String(button.dataset.id));
        if (index < 0) return;
        const offset = button.dataset.direction === 'up' ? -1 : 1;
        const destination = index + offset;
        if (destination < 0 || destination >= lists.length) return;
        [lists[index], lists[destination]] = [lists[destination], lists[index]];
        game.dispatch?.('set-action-lists-order', lists.map((list, sort) => ({ id: list.id, sort })));
        requestView('automation', true);
        scheduleViewRefresh('automation');
      });
    });

    shell.querySelector('[data-action="automation-save"]')?.addEventListener('click', () => {
      const draft = getAutomationEditorDraft();
      if (!draft) return;
      const actions = [...shell.querySelectorAll('[data-action="automation-action"]:checked')].map((checkbox) => {
        const timeInput = shell.querySelector(`[data-action="automation-action-time"][data-id="${CSS.escape(checkbox.dataset.id)}"]`);
        return { id: checkbox.dataset.id, time: Math.max(0.1, Number(timeInput?.value) || 10) };
      });
      const payload = {
        name: shell.querySelector('[data-action="automation-draft-name"]')?.value?.trim() || 'Untitled list',
        sort: Math.max(0, Number(shell.querySelector('[data-action="automation-draft-sort"]')?.value) || draft.sort || 0),
        actions,
        autotrigger: {
          ...(draft.autotrigger || {}),
          isEnabled: Boolean(shell.querySelector('[data-action="automation-draft-autotrigger"]')?.checked),
          priority: Math.max(0, Number(shell.querySelector('[data-action="automation-draft-priority"]')?.value) || 0),
        },
      };
      if (draft.id) payload.id = draft.id;
      game.dispatch?.('save-action-list', payload);
      closeAutomationEditor();
      requestView('automation', true);
      scheduleViewRefresh('automation');
      render();
    });

    shell.querySelectorAll('[data-action="run-action"]').forEach((button) => {
      button.addEventListener('click', () => game.dispatch?.('run-action', { id: button.dataset.id, isForce: true }));
    });

    shell.querySelectorAll('[data-action="action-filter"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('set-selected-actions-filter', { filterId: button.dataset.filterId });
        game.dispatch?.('query-actions-data', {});
      });
    });

    shell.querySelector('[data-action="action-search"]')?.addEventListener('input', (event) => {
      const search = event.target.value;
      clearTimeout(actionSearchDebounce);
      actionSearchDebounce = setTimeout(() => {
        game.dispatch?.('set-actions-search', { searchData: { search, selectedScopes: ['name', 'tags'] } });
        game.dispatch?.('query-actions-data', {});
      }, 180);
    });

    shell.querySelector('[data-action="toggle-show-hidden"]')?.addEventListener('change', (event) => {
      game.dispatch?.('toggle-show-hidden', event.target.checked);
      game.dispatch?.('query-actions-data', {});
    });

    shell.querySelectorAll('[data-command]').forEach((button) => {
      button.addEventListener('click', async () => {
        const command = button.dataset.command;
        const id = button.dataset.id;
        const amount = button.dataset.amount ? Number(button.dataset.amount) : undefined;
        const filterId = button.dataset.filterId;
        if (command === 'get-save-string') {
          game.dispatch?.(command, { type: 'manual' });
        } else if (command === 'copy-save') {
          const save = gameState?.raw?.['saved-string']?.string;
          if (await copyText(save)) button.textContent = 'Copied';
        } else if (command === 'download-save') {
          const save = gameState?.raw?.['saved-string']?.string;
          downloadText('idle-awakening-save.txt', save);
        } else if (command === 'load-save-text') {
          await loadTextSave(shell.querySelector('[data-action="save-text"]')?.value || '');
        } else if (command === 'reset-game') {
          game.resetGame?.();
        } else if (command === 'map-generate-map') {
          game.dispatch?.(command, {});
        } else if (command === 'set-purchase-multiplier') {
          game.dispatch?.(command, { amount });
        } else if (command === 'set-shop-autopurchase') {
          game.dispatch?.(command, { id, flag: button.dataset.flag === 'true' });
        } else if (command === 'set-shop-show-maxed') {
          game.dispatch?.(command, { flag: button.checked });
        } else if (command === 'set-crafting-level') {
          game.dispatch?.(command, { id, level: amount, filterId, isForce: false });
        } else if (command === 'set-plantation-watering') {
          game.dispatch?.(command, { id, level: amount });
        } else if (command === 'purchase-furniture') {
          game.dispatch?.(command, { id, filterId });
        } else if (command === 'select-guild') {
          game.dispatch?.(command, { id });
        } else if (command === 'purchase-guild-item') {
          game.dispatch?.(command, { id });
        } else if (command === 'consume-inventory' || command === 'sell-inventory') {
          game.dispatch?.(command, { id, amount: amount || 1, sendDetails: false });
        } else if (command === 'purchase-item' || command === 'use-spell') {
          game.dispatch?.(command, { id, amount: amount || 1 });
        } else if (command === 'purchase-resource') {
          game.dispatch?.(command, { id, amount: amount || 1 });
        } else if (command === 'purchase-skill') {
          game.dispatch?.(command, { id });
        } else if (command === 'remove-skill') {
          game.dispatch?.(command, { id });
        } else if (command === 'apply-skill-changes' || command === 'discard-skill-changes') {
          game.dispatch?.(command, {});
        } else if (command === 'save-skill-draft') {
          const name = shell.querySelector('[data-action="skill-draft-name"]')?.value?.trim() || 'Untitled draft';
          game.dispatch?.(command, { name });
        } else if (command === 'delete-skill-draft') {
          game.dispatch?.(command, { id });
        } else if (command === 'load-skill-draft') {
          game.dispatch?.(command, { id, isViewMode: false });
        } else if (command === 'toggle-speedup') {
          game.dispatch?.(command, {});
        } else if (command === 'query-action-details' || command === 'query-action-xp-breakdown' || command === 'query-item-details' || command === 'query-inventory-details' || command === 'query-item-resource-details') {
          game.dispatch?.(command, { id });
        } else if (command === 'run-course' || command === 'stop-course') {
          game.dispatch?.(command, { id });
        } else if (command === 'run-list' || command === 'stop-list') {
          game.dispatch?.(command, { id });
        } else if (command === 'delete-action-list') {
          if (!id) return;
          game.dispatch?.(command, { id });
          closeAutomationEditor();
          requestView('automation', true);
          scheduleViewRefresh('automation');
          render();
        } else if (command === 'set-automation-enabled') {
          game.dispatch?.(command, { flag: button.checked });
        } else if (command === 'set-autotrigger-interval') {
          game.dispatch?.(command, { interval: amount });
        } else if (command === 'query-actions-lists') {
          game.dispatch?.(command, {});
        } else if (command === 'toggle-actions-custom-filter-pinned') {
          game.dispatch?.(command, { id, flag: button.dataset.flag === 'true' });
        } else if (command === 'apply-actions-custom-filter') {
          game.dispatch?.(command, { id });
          game.dispatch?.('query-actions-data', {});
        } else if (command === 'delete-actions-custom-filter') {
          game.dispatch?.(command, { id });
          game.dispatch?.('query-actions-data', {});
        } else if (command === 'actions-change-custom-filters-order') {
          game.dispatch?.(command, {
            sourceIndex: Number(button.dataset.sourceIndex),
            destinationIndex: Number(button.dataset.destinationIndex),
          });
          game.dispatch?.('query-actions-data', {});
        } else {
          game.dispatch?.(command, id ? { id } : {});
        }
      });
    });

    shell.querySelector('[data-action="shop-show-maxed"]')?.addEventListener('change', (event) => {
      game.dispatch?.('set-shop-show-maxed', { flag: event.target.checked });
      game.dispatch?.('query-items-data', {});
    });

    shell.querySelectorAll('[data-action="inventory-filter"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('set-selected-inventory-filter', { filterId: button.dataset.filterId });
        game.dispatch?.('query-inventory-data', {});
      });
    });

    shell.querySelector('[data-action="inventory-search"]')?.addEventListener('input', (event) => {
      const search = event.target.value;
      clearTimeout(actionSearchDebounce);
      actionSearchDebounce = setTimeout(() => {
        game.dispatch?.('set-inventory-search', { searchData: { search, selectedScopes: ['name', 'tags', 'resources', 'effects'] } });
        game.dispatch?.('query-inventory-data', {});
      }, 180);
    });

    shell.querySelector('[data-action="action-xp-breakdown"]')?.addEventListener('click', (event) => {
      game.dispatch?.('query-action-xp-breakdown', { id: event.currentTarget.dataset.id });
      event.currentTarget.textContent = 'Refreshing…';
    });

    shell.querySelector('[data-action="automation-enabled"]')?.addEventListener('change', (event) => {
      game.dispatch?.('set-automation-enabled', { flag: event.target.checked });
    });

    shell.querySelector('[data-action="automation-interval"]')?.addEventListener('change', (event) => {
      const interval = Math.max(1, Number(event.target.value) || 10);
      game.dispatch?.('set-autotrigger-interval', { interval });
      event.target.value = String(interval);
    });

    shell.querySelector('[data-action="import-save-file"]')?.addEventListener('change', async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        await loadTextSave(await file.text());
      } finally {
        event.target.value = '';
      }
    });

    restoreFocusedField(shell, focusedField);
  }

  function renderView(view) {
    if (view === 'actions') return renderActionsView(gameState, uiState);
    if (view === 'character') return renderCharacterView(gameState);
    if (view === 'courses') return renderCoursesView(gameState);
    if (view === 'automation') return renderAutomationView(gameState);
    if (view === 'statistics') return renderStatisticsView(gameState);
    if (view === 'settings') return renderSettingsView(gameState);
    if (view === 'about') return renderAboutView(gameState);
    return renderDomainView(view, gameState);
  }

  requestView(uiState.activeView);
  scheduleViewRefresh(uiState.activeView);
  render();
  return {
    getState: () => uiState,
    destroy: () => {
      if (refreshTimer) clearInterval(refreshTimer);
      clearTimeout(actionSearchDebounce);
      refreshTimer = null;
      unsubscribe();
    },
  };
}