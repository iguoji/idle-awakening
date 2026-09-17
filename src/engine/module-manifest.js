// Registration order recovered from the legacy worker's MainModule.
// The implementation files are intentionally referenced by source path rather
// than by a monolithic bundle entry. This becomes the migration checklist.

export const GAME_MODULES = Object.freeze([
  { id: 'attributes', path: './worker/modules/attributes/attributes.module.js' },
  { id: 'temporary-effects', path: './worker/modules/general/temporary-effects.module.js' },
  { id: 'resource-pool', path: './worker/modules/resources/resource-pool.module.js' },
  { id: 'mage', path: './worker/modules/mage/mage.module.js' },
  { id: 'actions', path: './worker/modules/actions/actions.module.js' },
  { id: 'property', path: './worker/modules/property/property.module.js' },
  { id: 'shop', path: './worker/modules/items/shop.module.js' },
  { id: 'courses', path: './worker/modules/items/courses.module.js' },
  { id: 'inventory', path: './worker/modules/inventory/inventory.module.js' },
  { id: 'magic', path: './worker/modules/magic/spells.module.js' },
  { id: 'crafting', path: './worker/modules/workshop/crafting.module.js' },
  { id: 'plantations', path: './worker/modules/workshop/plantations.module.js' },
  { id: 'guilds', path: './worker/modules/social/guilds.module.js' },
  { id: 'unlock-notifications', path: './worker/modules/shared/modules/unlock-notifications.module.js' },
  { id: 'random-events', path: './worker/modules/general/random-events.module.js' },
  { id: 'map', path: './worker/modules/map/map.module.js' },
  { id: 'hotkeys', path: './worker/modules/shared/modules/hotkeys.module.js' },
  { id: 'monitoring', path: './worker/modules/shared/modules/monitoring.module.js' },
  { id: 'rules', path: './worker/modules/shared/modules/rules.module.js' },
]);

export const GAME_MODULE_IDS = Object.freeze(GAME_MODULES.map(({ id }) => id));
