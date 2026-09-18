import { beginPropertyFilterCreate, beginPropertyFilterEdit, closePropertyFilterEditor, getPropertyFilter, getPropertyFilterEditorDraft, patchPropertyFilterDraft, setPropertyFilter } from '../features/property/property-view.js';

export function createDomainController(context) {
  const { game, getGameState, getUiState, requestView, scheduleViewRefresh, render } = context;

  function bind(shell) {
    shell.querySelectorAll('[data-action="property-category"]').forEach((button) => {
      button.addEventListener('click', () => {
        setPropertyFilter(button.dataset.category);
        requestView('property', true);
        scheduleViewRefresh('property');
        render();
      });
    });

    shell.querySelector('[data-action="property-search"]')?.addEventListener('input', (event) => {
      const filterId = getPropertyFilter();
      game.dispatch?.('set-furniture-search-text', {
        filterId,
        searchData: { search: event.target.value, selectedScopes: ['name'] },
      });
      requestView('property', true);
    });

    shell.querySelector('[data-action="property-hide-maxed"]')?.addEventListener('change', (event) => {
      game.dispatch?.('set-furniture-hide-maxed', {
        filterId: getPropertyFilter(),
        hideMaxed: event.target.checked,
      });
      requestView('property', true);
    });

    shell.querySelector('[data-action="property-filter-new"]')?.addEventListener('click', () => {
      beginPropertyFilterCreate(getGameState()?.raw?.['furnitures-data'] || {});
      render();
    });

    shell.querySelectorAll('[data-action="property-filter-edit"]').forEach((button) => {
      button.addEventListener('click', () => {
        const data = getGameState()?.raw?.['furnitures-data'] || {};
        const filter = data?.customFilters?.[button.dataset.id];
        if (!filter) return;
        beginPropertyFilterEdit(filter);
        render();
      });
    });

    shell.querySelectorAll('[data-action="property-filter-delete"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('delete-property-custom-filter', { filterId: getPropertyFilter(), id: button.dataset.id });
        requestView('property', true);
      });
    });

    shell.querySelectorAll('[data-action="property-toggle-pin"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('toggle-property-custom-filter-pinned', {
          filterId: getPropertyFilter(),
          id: button.dataset.id,
          flag: button.dataset.flag === 'true',
        });
        requestView('property', true);
      });
    });

    shell.querySelectorAll('[data-action="property-apply-filter"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('apply-property-custom-filter', { filterId: getPropertyFilter(), id: button.dataset.id });
        requestView('property', true);
      });
    });

    shell.querySelectorAll('[data-action="property-filter-move"]').forEach((button) => {
      button.addEventListener('click', () => {
        const data = getGameState()?.raw?.['furnitures-data'] || {};
        const order = Array.isArray(data.customFiltersOrder) ? data.customFiltersOrder : [];
        const index = order.indexOf(button.dataset.id);
        const destination = index + (button.dataset.direction === 'up' ? -1 : 1);
        if (index < 0 || destination < 0 || destination >= order.length) return;
        game.dispatch?.('actions-change-custom-filters-order', {
          filterId: getPropertyFilter(),
          sourceIndex: index,
          destinationIndex: destination,
        });
        requestView('property', true);
      });
    });

    shell.querySelector('[data-action="property-filter-modal-backdrop"]')?.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        closePropertyFilterEditor();
        render();
      }
    });
    shell.querySelectorAll('[data-action="property-filter-close"]').forEach((button) => {
      button.addEventListener('click', () => {
        closePropertyFilterEditor();
        render();
      });
    });
    shell.querySelector('[data-action="property-filter-name"]')?.addEventListener('input', (event) => {
      patchPropertyFilterDraft((draft) => { draft.name = event.target.value; });
    });
    shell.querySelector('[data-action="property-filter-condition"]')?.addEventListener('input', (event) => {
      patchPropertyFilterDraft((draft) => { draft.condition = event.target.value; });
    });
    shell.querySelector('[data-action="property-filter-pinned"]')?.addEventListener('change', (event) => {
      patchPropertyFilterDraft((draft) => { draft.isPinned = event.target.checked; });
    });
    shell.querySelectorAll('[data-action="property-filter-rule-type"]').forEach((select) => {
      select.addEventListener('change', (event) => {
        patchPropertyFilterDraft((draft) => {
          const index = Number(select.dataset.index);
          if (draft.rules?.[index]) draft.rules[index].type = event.target.value;
        });
        render();
      });
    });
    shell.querySelectorAll('[data-action="property-filter-rule-object"]').forEach((input) => {
      input.addEventListener('input', (event) => {
        patchPropertyFilterDraft((draft) => {
          const index = Number(input.dataset.index);
          if (draft.rules?.[index]) draft.rules[index].object = event.target.value;
        });
      });
    });
    shell.querySelector('[data-action="property-filter-rule-add"]')?.addEventListener('click', () => {
      patchPropertyFilterDraft((draft) => {
        draft.rules = [...(draft.rules || []), { type: 'tag', object: getPropertyFilter() }];
      });
      render();
    });
    shell.querySelectorAll('[data-action="property-filter-rule-remove"]').forEach((button) => {
      button.addEventListener('click', () => {
        patchPropertyFilterDraft((draft) => {
          const index = Number(button.dataset.index);
          draft.rules = (draft.rules || []).filter((_, i) => i !== index);
        });
        render();
      });
    });
    shell.querySelector('[data-action="property-filter-save"]')?.addEventListener('click', () => {
      const draft = getPropertyFilterEditorDraft();
      if (!draft) return;
      draft.filterId = getPropertyFilter();
      draft.name = String(draft.name || '').trim() || 'Untitled filter';
      draft.condition = String(draft.condition || '').trim();
      draft.rules = (Array.isArray(draft.rules) ? draft.rules : [])
        .filter((rule) => rule && ['tag', 'resource', 'attribute'].includes(rule.type) && String(rule.object || '').trim())
        .map((rule) => ({ type: rule.type, object: String(rule.object).trim() }));
      if (draft.condition && !/^(?:\s*(?:\d+|AND|OR|NOT|\(|\))\s*)+$/i.test(draft.condition)) {
        window.alert?.('Condition may only contain rule numbers, parentheses, AND, OR and NOT.');
        return;
      }
      const references = [...draft.condition.matchAll(/\d+/g)].map((match) => Number(match[0]));
      if (references.some((reference) => reference < 1 || reference > draft.rules.length)) {
        window.alert?.('Condition references a rule that does not exist.');
        return;
      }
      const data = getGameState()?.raw?.['furnitures-data'] || {};
      const order = Array.isArray(data.customFiltersOrder) ? data.customFiltersOrder : [];
      draft.sortIndex = draft.id ? Math.max(0, order.indexOf(draft.id)) : order.length;
      draft.isPinned = Boolean(draft.isPinned);
      if (!draft.id) delete draft.id;
      game.dispatch?.('save-property-custom-filter', draft);
      closePropertyFilterEditor();
      requestView('property', true);
      render();
    });

    shell.querySelector('[data-action="world-map-level"]')?.addEventListener('change', (event) => {
      const level = Math.max(0, Number(event.target.value) || 0);
      game.dispatch?.('map-set-generated-level', { level });
      requestView('world', true);
    });

    shell.querySelector('[data-action="world-highlight-unexplored"]')?.addEventListener('change', (event) => {
      game.dispatch?.('map-highlight-filter', { highlightUnexplored: event.target.checked });
    });

    for (const action of ['world-effort-min', 'world-effort-max']) {
      shell.querySelector('[data-action="' + action + '"]')?.addEventListener('change', () => {
        const min = Number(shell.querySelector('[data-action="world-effort-min"]')?.value) || 0;
        const max = Number(shell.querySelector('[data-action="world-effort-max"]')?.value) || 0;
        const payload = {};
        payload[action === 'world-effort-min' ? 'effortMin' : 'effortMax'] = Math.max(0, Number(shell.querySelector('[data-action="' + action + '"]')?.value) || 0);
        if (action === 'world-effort-min') payload.effortMax = max || undefined;
        else payload.effortMin = min || undefined;
        game.dispatch?.('map-highlight-filter', payload);
      });
    }

    shell.querySelectorAll('[data-action="world-highlight-resource"]').forEach((input) => {
      input.addEventListener('change', () => {
        const ids = [...shell.querySelectorAll('[data-action="world-highlight-resource"]:checked')].map((node) => node.dataset.id);
        game.dispatch?.('map-highlight-resources', { ids });
      });
    });

    shell.querySelectorAll('[data-command="get-spell-level-effects"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('get-spell-level-effects', {
          id: button.dataset.id,
          level: Math.max(1, Number(button.dataset.level) || 1),
        });
      });
    });

    shell.querySelectorAll('[data-command="query-map-tile-details"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('query-map-tile-details', {
          i: Number(button.dataset.i),
          j: Number(button.dataset.j),
        });
      });
    });

    shell.querySelectorAll('[data-command="set-event-data-opened"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('set-event-data-opened', {
          isOpened: button.dataset.opened === 'true',
          eventId: button.dataset.eventId,
        });
        requestView('events', true);
      });
    });

    shell.querySelectorAll('[data-command="select-event-option"]').forEach((button) => {
      button.addEventListener('click', () => {
        game.dispatch?.('select-event-option', {
          eventId: button.dataset.eventId,
          optionId: button.dataset.optionId,
        });
        requestView('events', true);
      });
    });

    shell.querySelectorAll('[data-action="spell-autocast"]').forEach((input) => {
      input.addEventListener('change', () => {
        const data = getGameState()?.raw?.['spell-data'] || {};
        const spell = (Array.isArray(data.available) ? data.available : []).find((item) => String(item?.id) === String(input.dataset.id));
        if (!spell) return;
        const autocast = { ...(spell.autocast || { rules: [] }), isEnabled: input.checked };
        game.dispatch?.('save-spell-settings', {
          id: spell.id,
          actualLevel: spell.level || 1,
          autocast,
        });
        requestView(getUiState().activeView, true);
      });
    });

    shell.querySelectorAll('[data-action="inventory-autoconsume"], [data-action="inventory-autosell"]').forEach((input) => {
      input.addEventListener('change', () => {
        const data = getGameState()?.raw?.['inventory-data'] || {};
        const item = (Array.isArray(data.available) ? data.available : []).find((candidate) => String(candidate?.id) === String(input.dataset.id));
        if (!item) return;
        const autoconsume = { ...(item.autoconsume || { rules: [] }) };
        const autosell = { ...(item.autosell || { rules: [] }) };
        if (input.dataset.action === 'inventory-autoconsume') autoconsume.isEnabled = input.checked;
        else autosell.isEnabled = input.checked;
        game.dispatch?.('save-inventory-settings', { id: item.id, autoconsume, autosell });
        requestView('inventory', true);
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


  }

  return { bind, destroy() {} };
}
