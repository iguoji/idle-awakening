const COPY = {
  shop: ['Shop', 'Trade resources for upgrades and useful items.'],
  inventory: ['Inventory', 'Manage resources, consumables, automation and item details.'],
  world: ['World', 'Explore locations, unlock new areas and track map progress.'],
  property: ['Property', 'Manage your home, permanent bonuses and interactive objects.'],
  workshop: ['Workshop', 'Craft, gather and manage production systems.'],
  spellbook: ['Spellbook', 'Prepare spells, inspect effects and manage magical progression.'],
  social: ['Social', 'Guilds, progression and long-term social systems.'],
  settings: ['Settings', 'Display, save data, controls and accessibility.'],
  about: ['About', 'Game information, credits and migration diagnostics.'],
};

export function renderFeaturePlaceholder(view) {
  const [title, description] = COPY[view] || [view, 'Feature module'];
  return `
    <section class="ui-page-head">
      <div><div class="ui-kicker">Feature</div><h1>${title}</h1><p>${description}</p></div>
    </section>
    <section class="ui-grid ui-grid--single">
      <article class="ui-card"><div class="ui-card__body ui-empty-state">
        <span class="ui-empty-state__icon">✦</span>
        <h2>${title} module</h2>
        <p>The new presentation is already independent from the legacy bundle. This screen will be replaced by its domain adapter as that feature is migrated.</p>
      </div></article>
    </section>
  `;
}
