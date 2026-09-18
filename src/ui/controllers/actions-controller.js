export function createActionsController(context) {
  const { game, getGameState, requestView, openFilterEditor, closeFilterEditor, patchFilterDraft, saveFilterDraft, render } = context;
  let actionSearchDebounce = null;
  function bind(shell) {
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




    shell.querySelector('[data-action="action-xp-breakdown"]')?.addEventListener('click', (event) => {
      game.dispatch?.('query-action-xp-breakdown', { id: event.currentTarget.dataset.id });
      event.currentTarget.textContent = 'Refreshing…';
    });


  }
  return { bind, destroy() { clearTimeout(actionSearchDebounce); actionSearchDebounce = null; } };
}
