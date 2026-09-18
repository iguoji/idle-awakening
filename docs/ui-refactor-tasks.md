# UI / Runtime Refactor — Remaining Tasks

Branch: `refactor/ui-system-3`

## Completed baseline

- [x] Remove legacy `bundle.js` / `bundle.worker.js` from the application runtime.
- [x] Restore the game/worker source tree under `src/game`.
- [x] Establish the `GameWorkerClient` -> `GameAdapter` -> UI boundary.
- [x] Replace the old bundled UI with the new responsive UI shell.
- [x] Implement Actions, Character/Mage, Statistics, Shop, Inventory, Courses, Automation, World, Property, Workshop, Spellbook, Social, Settings and About entry views.
- [x] Implement local save restore/autosave/export/import/reset.
- [x] Implement Actions search/filter/detail/XP breakdown/custom filters.
- [x] Implement Automation action-list editing, ordering and effects preview.
- [x] Implement World map generation entry point.
- [x] Split domain rendering out of `domain-view.js`.
- [x] Split Shell DOM event bindings into `ui-event-binder.js`.
- [x] Keep the legacy-runtime architecture check green.
- [x] Keep the production Vite build green.

## Remaining work, in order

### 1. Property feature parity
Current Property UI only exposes the basic furniture list. The Worker also supports furniture/accessory/amplifier categories, search, hide-maxed, custom filters, autopurchase and furniture details.

Work:
- [x] Add furniture / accessory / amplifier category switching.
- [x] Add per-category search and hide-maxed controls.
- [x] Add property custom-filter management using the Worker payload shape.
- [x] Add furniture autopurchase toggle with `filterId`.
- [x] Add furniture detail view.
- [x] Add property space/effect summary with useful presentation instead of raw response fallback.

### 2. Workshop / production parity
Current Workshop covers basic crafting/alchemy/plantation actions, but several Worker capabilities are still not surfaced.

Work:
- [x] Add crafting/alchemy detail dialogs.
- [x] Add plantation autopurchase toggle.
- [x] Add plantation remove action.
- [x] Add plantation detail view.
- [ ] Present production/resource effect breakdowns in structured UI.
- [ ] Verify whether any hidden crafting/alchemy settings need dedicated controls.

### 3. Courses parity + engine audit
The Worker exposes `set-course-autopurchase`, but the current extracted Courses module does not expose an `isAutoPurchase` field in `course-data` and the module does not currently consume that state in its tick loop.

Work:
- [ ] Decide and document the intended Course autopurchase semantics from the original implementation.
- [ ] Fix/preserve the engine state only after the semantics are verified.
- [ ] Add Course autopurchase UI only after the Worker returns a trustworthy state.
- [x] Add Course detail view.

### 4. Inventory parity
Current Inventory supports filtering, search, consume, sell and generic details.

Work:
- [x] Add dedicated sell-details flow before selling when the original UI expects it.
- [x] Add inventory settings persistence UI for `save-inventory-settings`.
- [ ] Support richer multi-quantity selling/consumption where the original protocol allows it.

### 5. Spellbook parity
Current Spellbook supports casting, but several Worker protocols are not surfaced.

Work:
- [x] Add spell detail view.
- [x] Add spell level-effect inspection.
- [x] Add spell settings persistence.
- [x] Add general magic statistics presentation.

### 6. Social / Guild parity
Current Social supports guild selection and upgrade purchases.

Work:
- [x] Add leave-guild action.
- [x] Add guild-upgrade detail view.
- [ ] Present guild effect summaries in structured cards.

### 7. World / Map parity
Current World supports map querying and generation plus a basic grid.

Work:
- [x] Add tile detail inspection.
- [x] Add highlighted-resource / highlighted-tile controls.
- [x] Add generated-level control.
- [x] Add tile running/interaction control.
- [x] Present general map statistics.
- [x] Replace the placeholder dot grid with a richer map renderer using the available tile metadata.

### 8. Random Events
The Worker contains a complete random-event subsystem, but the new UI currently has no event surface.

Work:
- [ ] Add active-event notification/overlay (the Events page is complete; global overlay remains).
- [x] Add event option selection.
- [x] Add open/close event state handling.
- [x] Present triggered effects and remaining event lifetime.

### 9. Runtime settings / secondary systems
Several restored modules are functional but have no dedicated new-UI surface yet.

Work:
- [ ] Add hotkey management UI.
- [ ] Add monitoring controls where useful.
- [ ] Add tour/status controls if they remain part of the intended experience.
- [ ] Expose any required runtime settings without reviving the old DOM mutation/localization hack.

### 10. Controller decomposition
The first extraction is complete, but `ui-event-binder.js` is still broad.

Work:
- [ ] Split Actions events.
- [ ] Split Automation events.
- [ ] Split Domain events.
- [ ] Split Save/Settings events.
- [ ] Keep `ui-shell.js` focused on state, routing, rendering and lifecycle.

### 11. Protocol hardening
The Worker has many stable event names, while `src/engine/protocol.js` currently covers only a subset.

Work:
- [ ] Complete command/event constants for the restored subsystem.
- [ ] Centralize payload construction for commands with non-trivial shapes.
- [ ] Add lightweight protocol contract checks so UI typos are caught before runtime.

### 12. Test coverage
The current repository has architecture and production-build CI, but no browser-level smoke suite.

Work:
- [ ] Add JS-level tests for pure UI helpers and protocol payload builders.
- [ ] Add Worker/client smoke tests where the environment permits.
- [ ] Add browser E2E for startup, save restore, Actions, Shop, Character and Automation.
- [ ] Add a small regression test for the no-bundle architecture rule.

## Source-level cleanup discovered during the audit

- [ ] Property custom-filter ordering deserves a dedicated engine-side review: the restored handler currently replaces `customFiltersOrder` with a flat array instead of updating the category-specific entry.
- [ ] Property custom-filter save still contains the original `TODO: Re-index filters` note; determine whether explicit re-indexing is required by the current UI.
- [ ] Several recovered Worker modules still contain generated Babel helper wrappers; convert them incrementally only when touching the affected module.
