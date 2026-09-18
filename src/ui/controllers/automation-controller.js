import { beginAutomationCreate, beginAutomationEdit, closeAutomationEditor, getAutomationEditorDraft, requestAutomationEffectsPreview } from '../features/automation/automation-view.js';

export function createAutomationController(context) {
  const { game, getGameState, requestView, scheduleViewRefresh, render } = context;

  function bind(shell) {
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


  }

  return { bind, destroy() {} };
}
