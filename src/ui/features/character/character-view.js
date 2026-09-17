import './character-view.css';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function number(value) {
  return typeof value === 'number' && Number.isFinite(value) ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(value) : String(value ?? '—');
}

function percent(value) {
  return `${Math.max(0, Math.min(100, Number(value) * 100))}%`;
}

function renderStat(label, value, detail = '') {
  return `<div class="ui-stat"><div class="ui-stat__label">${escapeHtml(label)}</div><div class="ui-stat__value">${escapeHtml(number(value))}</div>${detail ? `<div class="ui-character-stat__detail">${escapeHtml(detail)}</div>` : ''}</div>`;
}

function renderAttributes(data) {
  const list = Array.isArray(data?.list) ? data.list : [];
  if (!list.length) return '<div class="ui-domain-empty">No unlocked attributes yet.</div>';
  return `<div class="ui-character-attributes">${list.map((attribute) => `<div class="ui-character-attribute">
    <div><strong>${escapeHtml(attribute.name || attribute.id)}</strong><span>${escapeHtml(number(attribute.value))}</span></div>
    <div class="ui-progress"><i style="width:${percent(attribute.nextProgress || 0)}"></i></div>
    ${attribute.nextUnlocks?.length ? `<small>Next unlock at ${escapeHtml(number(attribute.nextUnlocks[0].level))}</small>` : ''}
  </div>`).join('')}</div>`;
}

function renderSkills(data) {
  const skills = data?.available && typeof data.available === 'object' && !Array.isArray(data.available)
    ? Object.values(data.available)
    : Array.isArray(data?.available) ? data.available : [];
  if (!skills.length) return '<div class="ui-domain-empty">No skills loaded.</div>';
  const points = data?.sp?.total ?? 0;

  return `<div class="ui-character-skills">
    ${skills.filter((skill) => skill.isUnlocked || skill.level > 0).slice(0, 120).map((skill) => {
      const canBuy = skill.isUnlocked && skill.isRequirementsMet !== false && !skill.isCapped && points > 0;
      const progress = skill.max ? Math.min(100, (Number(skill.level || 0) / Number(skill.max || 1)) * 100) : 0;
      return `<article class="ui-character-skill" data-locked="${!skill.isUnlocked}">
        <div class="ui-character-skill__main">
          <div class="ui-character-skill__title"><strong>${escapeHtml(skill.name || skill.id)}</strong><span>Lv ${escapeHtml(number(skill.level))} / ${escapeHtml(number(skill.max))}</span></div>
          <p>${escapeHtml(skill.description || '')}</p>
          <div class="ui-progress"><i style="width:${progress}%"></i></div>
          ${skill.unlockBySkills?.length ? `<small>${skill.isRequirementsMet === false ? 'Prerequisites unmet' : 'Prerequisites met'}</small>` : ''}
        </div>
        <button class="ui-btn ${canBuy ? 'ui-btn--primary' : ''}" data-command="purchase-skill" data-id="${escapeHtml(skill.id)}" ${canBuy ? '' : 'disabled'}>${skill.isCapped ? 'Maxed' : canBuy ? 'Buy +1' : 'Locked'}</button>
      </article>`;
    }).join('')}
  </div>`;
}

function renderEffects(data) {
  const list = Array.isArray(data?.list) ? data.list : [];
  if (!list.length) return '<div class="ui-domain-empty">No active effects.</div>';
  return `<div class="ui-character-effects">${list.slice(0, 80).map((effect) => `<div class="ui-character-effect"><strong>${escapeHtml(effect.name || effect.id)}</strong><span>${escapeHtml(number(effect.duration ?? ''))}</span></div>`).join('')}</div>`;
}

export function getCharacterQueries() {
  return [
    ['query-mage-data', {}],
    ['query-skills-data', {}],
    ['query-attributes-data', {}],
    ['query-active-effects', {}],
    ['query-statistics', {}],
    ['query-total-unlocks', {}],
  ];
}

export function renderCharacterView(snapshot) {
  const raw = snapshot?.raw || {};
  const mage = raw['mage-data'] || {};
  const skills = raw['skills-data'] || {};
  const attributes = raw['attributes-data'] || {};
  const effects = raw['active-effects'] || {};
  const statistics = raw.statistics || {};
  const unlocks = raw['total-unlocks'] || {};

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Character</div><h1>Mage</h1><p>Your long-term progression, attributes, skills and active effects.</p></div>
    <div class="ui-status-pill">${snapshot?.loading ? 'Loading save…' : 'Live worker data'}</div>
  </section>
  <section class="ui-grid">
    <article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Progression</strong><span>Mage level and skill points</span></div></div>
      <div class="ui-stat-grid">
        ${renderStat('Mage level', mage.mageLevel ?? 1, `${number(mage.mageXP)} / ${number(mage.mageMaxXP)} XP`)}
        ${renderStat('Skill points', mage.skillPoints ?? skills.sp?.total ?? 0, `${number(skills.sp?.max ?? 0)} income`)}
        ${renderStat('Time played', mage.timeSpent ?? 0, 'simulation seconds')}
      </div>
      <div class="ui-actions">
        <button class="ui-btn" data-command="toggle-speedup">Toggle speed-up</button>
      </div>
    </div></article>
    <article class="ui-card"><div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Account</strong><span>Runtime totals</span></div></div>
      <div class="ui-stat-grid">
        ${renderStat('Unlocks', unlocks.total ?? unlocks.unlocked ?? '—')}
        ${renderStat('Actions unlocked', statistics.actionsUnlocked ?? '—')}
        ${renderStat('Active effects', Array.isArray(effects.list) ? effects.list.length : 0)}
      </div>
    </div></article>
  </section>
  <section class="ui-grid" style="margin-top:20px">
    <article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Attributes</strong><span>${Array.isArray(attributes.list) ? attributes.list.length : 0} unlocked</span></div></div>${renderAttributes(attributes)}</div></article>
    <article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>Active effects</strong><span>Current buffs and debuffs</span></div></div>${renderEffects(effects)}</div></article>
  </section>
  <section class="ui-card" style="margin-top:20px"><div class="ui-card__body">
    <div class="ui-section-title"><div><strong>Skills</strong><span>${escapeHtml(number(skills.sp?.total ?? 0))} points available</span></div><span class="ui-muted">Purchases use the extracted MageModule</span></div>
    ${renderSkills(skills)}
  </div></section>`;
}
