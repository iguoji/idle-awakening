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
Property now has its own feature view with furniture/accessory/amplifier categories, search, hide-maxed, custom filters, autopurchase, details and capacity summaries.

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
- [x] Present production/resource effect breakdowns in structured UI.
- [x] Verify whether any hidden crafting/alchemy settings need dedicated controls.

### 3. Courses parity + engine audit
Course autopurchase is now restored: the Worker tracks and persists the toggle, exposes `isAutoPurchase`/`isAutomationUnlocked`, and consumes it on the same 10-second automation cadence as the other purchase-manager systems.

Work:
- [x] Decide and document the intended Course autopurchase semantics from the original implementation.
- [x] Fix/preserve the engine state only after the semantics are verified.
- [x] Add Course autopurchase UI only after the Worker returns a trustworthy state.
- [x] Add Course detail view.

### 4. Inventory parity
Inventory now supports filtering, search, variable-quantity consume/sell, automation settings, sell details and generic item details.

Work:
- [x] Add dedicated sell-details flow before selling when the original UI expects it.
- [x] Add inventory settings persistence UI for `save-inventory-settings`.
- [x] Support richer multi-quantity selling/consumption where the original protocol allows it.

### 5. Spellbook parity
Spellbook now exposes casting, details, Auto-cast settings, per-level effect preview, and general magic statistics.

Work:
- [x] Add spell detail view.
- [x] Add spell level-effect inspection.
- [x] Add spell settings persistence.
- [x] Add general magic statistics presentation.

### 6. Social / Guild parity
Social now supports guild selection, leaving, upgrade details, permanent-effect summaries and upgrade purchases.

Work:
- [x] Add leave-guild action.
- [x] Add guild-upgrade detail view.
- [x] Present guild effect summaries in structured cards.

### 7. World / Map parity
World now exposes map generation controls, highlight filters, resource highlighting, interactive tiles, tile exploration and tile details, plus readable map statistics.

Work:
- [x] Add tile detail inspection.
- [x] Add highlighted-resource / highlighted-tile controls.
- [x] Add generated-level control.
- [x] Add tile running/interaction control.
- [x] Present general map statistics.
- [x] Replace the placeholder dot grid with a richer map renderer using the available tile metadata.

### 8. Random Events
Random Events now have a dedicated page plus a global active-event overlay.

Work:
- [x] Add active-event notification/overlay (the Events page is complete; global overlay remains).
- [x] Add event option selection.
- [x] Add open/close event state handling.
- [x] Present triggered effects and remaining event lifetime.

### 9. Runtime settings / secondary systems
Several restored modules are functional but have no dedicated new-UI surface yet.

Work:
- [x] Add hotkey management UI.
- [x] Add monitoring controls where useful.
- [x] Audit tour/status controls; the restored Worker does not register a Tour module, so no unsupported Tour UI is exposed.
- [x] Expose runtime controls through the dedicated Settings view without reviving the old DOM mutation/localization hack.

### 10. Controller decomposition
UI DOM/event handling is now split into navigation, Actions, Automation, Domain and Command/Save controllers; `ui-event-binder.js` is a thin orchestrator.

Work:
- [x] Split Actions events.
- [x] Split Automation events.
- [x] Split Domain events.
- [x] Split Save/Settings events.
- [x] Keep `ui-shell.js` focused on state, routing, rendering and lifecycle.

### 11. Protocol hardening
`src/engine/protocol.js` now covers the restored Worker command surface, with a CI contract check against UI references.

Work:
- [x] Complete command/event constants for the restored subsystem.
- [x] Centralize payload construction for commands with non-trivial shapes in `src/engine/command-builders.js`.
- [x] Add lightweight protocol contract checks so UI typos are caught before runtime.

### 12. Test coverage
The current repository has architecture and production-build CI, but no browser-level smoke suite.

Work:
- [x] Add JS-level tests for pure UI helpers and protocol payload builders.
- [x] Add Worker/client smoke tests for transport envelopes and client normalizers.
- [ ] Add browser E2E for startup, save restore, Actions, Shop, Character and Automation (browser runner is not available in the current execution environment).
- [x] Add a small regression test for the no-bundle architecture rule.

## Source-level cleanup discovered during the audit

- [x] Property custom-filter ordering bug fixed: reordering now updates the category-specific `customFiltersOrder` entry.
- [x] Property custom-filter save/delete now re-index `sortIndex`; the original TODO is removed.
- [x] Modernize the touched Hotkeys and Monitoring Worker modules; remaining generated helpers are isolated to untouched recovered modules.
