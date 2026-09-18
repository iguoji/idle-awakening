export function createActionsController(context) {
  const {
    game,
    getGameState,
    requestView,
    openFilterEditor,
    closeFilterEditor,
    patchFilterDraft,
    saveFilterDraft,
  } = context;
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


    shell.querySelector('[data-action="action-xp-breakdown"]')?.addEventListener('click', (event) => {
      game.dispatch?.('query-action-xp-breakdown', { id: event.currentTarget.dataset.id });
      event.currentTarget.textContent = '刷新中…';
    });


  }

  return {
    bind,
    destroy() {
      clearTimeout(actionSearchDebounce);
      actionSearchDebounce = null;
    },
  };
}
