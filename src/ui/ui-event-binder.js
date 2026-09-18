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

import { createNavigationController } from './controllers/navigation-controller.js';
import { createActionsController } from './controllers/actions-controller.js';
import { createAutomationController } from './controllers/automation-controller.js';
import { createDomainController } from './controllers/domain-controller.js';
import { createCommandController } from './controllers/command-controller.js';

export function createUiEventBinder(context) {
  const controllers = [
    createNavigationController(context),
    createActionsController(context),
    createAutomationController(context),
    createDomainController(context),
    createCommandController(context),
  ];

  return {
    bind(shell, focusedField) {
      controllers.forEach((controller) => controller.bind(shell, focusedField));
      restoreFocusedField(shell, focusedField);
    },
    destroy() {
      controllers.forEach((controller) => controller.destroy());
    },
  };
}
