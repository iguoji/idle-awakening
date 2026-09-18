import { beginAutomationCreate, beginAutomationEdit, closeAutomationEditor, getAutomationEditorDraft, requestAutomationEffectsPreview } from './features/automation/automation-view.js';
import { setActiveView, toggleSidebar } from './ui-state.js';

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


export function createUiEventBinder(context) {
  const {
    game,
    getGameState,
    getUiState,
    setUiState,
    requestView,
    scheduleViewRefresh,
    render,
    openFilterEditor,
    closeFilterEditor,
    patchFilterDraft,
    saveFilterDraft,
    loadTextSave,
    copyText,
    downloadText,
  } = context;
  let actionSearchDebounce = null;

  function bind(shell, focusedField) {
    shell.querySelectorAll('[data-view]:not(:disabled)').forEach((button) => {
      button.addEventListener('click', () => {
        const view = button.dataset.view;
        setUiState(setActiveView(getUiState(), view));
        requestView(view);
        scheduleViewRefresh(view);
        if (window.matchMedia('(max-width: 800px)').matches) {
          setUiState({ ...getUiState(), sidebarOpen: false });
        }
        render();
      });
    });

    shell.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
      setUiState(toggleSidebar(getUiState()));
      render();
    });

    shell.querySelector('[data-action="filter-new"]')?.addEventListener('click', () => openFilterEditor());
    shell.querySelectorAll('[data-action="filter-edit"]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const filter = getGameState()?.actionsMeta?.customFilters?.[id];
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
        const list = (getGameState()?.raw?.['actions-lists'] || []).find((candidate) => candidate?.id === id);
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
      requestAutomationEffectsPreview();
      game.dispatch?.('query-action-list-effects', {
        id: draft.id || null,
        listData: { ...draft, actions },
      });
      const button = shell.querySelector('[data-action="automation-preview-effects"]');
      if (button) button.textContent = 'Calculating…';
    });

    shell.querySelectorAll('[data-action="automation-move"]').forEach((button) => {
      button.addEventListener('click', () => {
        const lists = [...(getGameState()?.raw?.['actions-lists'] || [])];
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
          const save = getGameState()?.raw?.['saved-string']?.string;
          if (await copyText(save)) button.textContent = 'Copied';
        } else if (command === 'download-save') {
          const save = getGameState()?.raw?.['saved-string']?.string;
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
        } else if (command === 'query-action-details' || command === 'query-action-xp-breakdown' || command === 'query-item-details' || command === 'query-inventory-details' || command === 'query-item-resource-details' || command === 'query-course-details') {
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

  return {
    bind,
    destroy() {
      clearTimeout(actionSearchDebounce);
      actionSearchDebounce = null;
    },
  };
}
