export function createCommandController(context) {
  const { game, getGameState, requestView, scheduleViewRefresh, render, loadTextSave, copyText, downloadText, closeAutomationEditor } = context;

  function bind(shell) {
    shell.querySelectorAll('[data-command]').forEach((button) => {
      button.addEventListener('click', async () => {
        const command = button.dataset.command;
        const id = button.dataset.id;
        let amount = button.dataset.amount ? Number(button.dataset.amount) : undefined;
        const filterId = button.dataset.filterId;
        if ((command === 'consume-inventory' || command === 'sell-inventory') && id) {
          amount = Math.max(1, Math.floor(Number(shell.querySelector('[data-action="inventory-amount"][data-id="' + CSS.escape(id) + '"]')?.value) || 1));
        }
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
        } else if (command === 'set-plantation-autopurchase') {
          game.dispatch?.(command, { id, flag: button.dataset.flag === 'true' });
        } else if (command === 'remove-plantation') {
          game.dispatch?.(command, { id });
        } else if (command === 'set-furniture-autopurchase') {
          game.dispatch?.(command, { id, flag: button.dataset.flag === 'true', filterId });
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
        } else if (command === 'query-action-details' || command === 'query-action-xp-breakdown' || command === 'query-item-details' || command === 'query-inventory-details' || command === 'query-item-resource-details' || command === 'query-course-details' || command === 'query-furniture-details' || command === 'query-crafting-details' || command === 'query-plantation-details' || command === 'query-spell-details' || command === 'query-guild-item-details' || command === 'query-sell-details') {
          game.dispatch?.(command, { id });
        } else if (command === 'run-course' || command === 'stop-course') {
          game.dispatch?.(command, { id });
        } else if (command === 'set-course-autopurchase') {
          game.dispatch?.(command, { id, flag: button.dataset.flag === 'true' });
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



  }

  return { bind, destroy() {} };
}
