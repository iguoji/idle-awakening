// Stable transport names recovered from the existing worker modules.
// Keep these strings stable while the implementation is moved out of bundle.worker.js.

export const COMMANDS = Object.freeze({
  INITIALIZE_GAME: 'initialize-game',

  QUERY_UNLOCKS: 'query-unlocks',
  QUERY_RESOURCES: 'query-resources-data',
  QUERY_ATTRIBUTES: 'query-attributes-data',
  QUERY_MAGE: 'query-mage-data',

  QUERY_ACTIONS: 'query-actions-data',
  QUERY_ALL_ACTIONS: 'query-all-actions',
  QUERY_ACTION_TAGS: 'query-all-action-tags',
  QUERY_ACTION_DETAILS: 'query-action-details',
  QUERY_ACTION_XP_BREAKDOWN: 'query-action-xp-breakdown',
  QUERY_ACTIONS_RUNNING: 'query-actions-running',
  QUERY_ACTIONS_LISTS: 'query-actions-lists',
  QUERY_ACTION_LIST_EFFECTS: 'query-action-list-effects',
  LOAD_ACTION_LIST: 'load-action-list',
  SET_ACTION_RUNNING: 'set-running-action',
  TOGGLE_HIDDEN_ACTION: 'toggle-hidden-action',

  QUERY_INVENTORY: 'query-inventory-data',
  QUERY_INVENTORY_DETAILS: 'query-inventory-details',
  QUERY_SELL_DETAILS: 'query-sell-details',
  SELL_INVENTORY: 'sell-inventory',
  SAVE_INVENTORY_SETTINGS: 'save-inventory-settings',

  QUERY_COURSES: 'query-course-data',
  QUERY_COURSE_DETAILS: 'query-course-details',
  RUN_COURSE: 'run-course',
  STOP_COURSE: 'stop-course',

  TOGGLE_SPEEDUP: 'toggle-speedup',

  QUERY_SKILLS: 'query-skills-data',
  PURCHASE_SKILL: 'purchase-skill',
  REMOVE_SKILL: 'remove-skill',
  APPLY_SKILL_CHANGES: 'apply-skill-changes',
  DISCARD_SKILL_CHANGES: 'discard-skill-changes',
  SAVE_SKILL_DRAFT: 'save-skill-draft',
  LOAD_SKILL_DRAFT: 'load-skill-draft',
  DELETE_SKILL_DRAFT: 'delete-skill-draft',
  EXPORT_SKILL_DRAFT: 'export-skill-draft',
  IMPORT_SKILL_DRAFT: 'import-skill-draft',
});

export const EVENTS = Object.freeze({
  INITIALIZED: 'initialized',
  UNLOCKS: 'unlocks',
  RESOURCES: 'resources-data',
  ATTRIBUTES: 'attributes-data',
  MAGE_DATA: 'mage-data-banked',
  ACTIONS: 'actions-data',
  ACTIONS_RUNNING: 'actions-running',
  ACTIONS_LISTS: 'actions-lists',
  ACTION_DETAILS: 'action-details',
  INVENTORY: 'inventory-data',
  INVENTORY_DETAILS: 'detail-blade-inventory-details',
  SELL_DETAILS: 'sell-details',
  COURSE_DATA: 'items-data',
  SKILLS: 'skills-data',
  SKILL_DRAFT_ERROR: 'import-skill-draft-error',
  SKILL_DRAFT_BLOB: 'export-skill-draft-blob',
  EVENT_DATA: 'event-data',
});

export function assertKnownCommand(command) {
  if (!Object.values(COMMANDS).includes(command)) {
    throw new Error(`Unknown game command: ${command}`);
  }
}
