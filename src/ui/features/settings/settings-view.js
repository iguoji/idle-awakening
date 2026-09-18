import './settings-view.css';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function safeJson(value) {
  try {
    return JSON.stringify(value ?? {}, null, 2);
  } catch {
    return '{}';
  }
}

function entriesFromObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? Object.entries(value) : [];
}

function flattenAvailable(value) {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== 'object') return [];
  return Object.values(value).flatMap((item) => {
    if (Array.isArray(item)) return item;
    if (item && typeof item === 'object' && item.available && typeof item.available === 'object') return Object.values(item.available);
    return [item];
  });
}

function renderHotkeys(data) {
  const entries = entriesFromObject(data);
  if (!entries.length) {
    return '<article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>快捷键</strong><span>暂无配置</span></div></div><div class="ui-domain-empty">暂无已配置的快捷键。</div></div></article>';
  }

  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>快捷键管理</strong><span>保存原始快捷键配置</span></div></div>' +
    '<div class="ui-settings-stack">' +
    entries.map(([id, value], index) =>
      '<section class="ui-settings-subcard">' +
        '<div class="ui-section-title"><div><strong>快捷键 ' + (index + 1) + '</strong><span>' + escapeHtml(id) + '</span></div></div>' +
        '<textarea class="ui-settings-json" data-action="hotkey-json" data-id="' + escapeHtml(id) + '" spellcheck="false">' + escapeHtml(safeJson(value)) + '</textarea>' +
        '<div class="ui-actions"><button class="ui-btn ui-btn--primary" data-command="update-hotkey" data-id="' + escapeHtml(id) + '">保存快捷键</button></div>' +
      '</section>'
    ).join('') +
    '</div>' +
  '</div></article>';
}

function renderRuntimeSettings(data) {
  const entries = entriesFromObject(data);
  if (!entries.length) {
    return '<article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>运行时设置</strong><span>暂无自定义设置</span></div></div><div class="ui-domain-empty">当前 Worker 没有额外运行时设置。</div></div></article>';
  }
  return '<article class="ui-card"><div class="ui-card__body"><div class="ui-section-title"><div><strong>运行时设置</strong><span>原始键值</span></div></div><div class="ui-settings-stack">' +
    entries.map(([key, value]) => '<label class="ui-settings-setting"><span>' + escapeHtml(key) + '</span><input data-action="runtime-setting-value" data-key="' + escapeHtml(key) + '" value="' + escapeHtml(typeof value === 'string' ? value : safeJson(value)) + '" /></label>').join('') +
    '<div class="ui-actions"><button class="ui-btn ui-btn--primary" data-command="save-runtime-settings">保存运行时设置</button></div></div></div></article>';
}

function renderTourStatus(data) {
  const status = data && typeof data === 'object' ? data : null;
  const complete = Boolean(status?.isComplete);
  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>新手引导状态</strong><span>Tour</span></div></div>' +
    '<div class="ui-stat-grid"><div class="ui-stat"><div class="ui-stat__label">状态</div><div class="ui-stat__value">' + (complete ? '已完成' : '未完成') + '</div></div>' +
    '<div class="ui-stat"><div class="ui-stat__label">跳过步骤</div><div class="ui-stat__value">' + escapeHtml(status?.skipStep ?? '—') + '</div></div></div>' +
    '<div class="ui-actions"><input class="ui-number" type="number" min="0" step="1" data-action="tour-skip-step" placeholder="跳过步骤（可选）"/><button class="ui-btn ' + (complete ? '' : 'ui-btn--primary') + '" data-command="set_tour_finished">标记引导已完成</button></div>' +
  '</div></article>';
}

function renderMonitorTargets(snapshot) {
  const actions = Array.isArray(snapshot?.actions) ? snapshot.actions : [];
  const spells = flattenAvailable(snapshot?.raw?.['spell-data']?.available);
  const properties = flattenAvailable(snapshot?.raw?.['furnitures-data']?.available);
  const option = (scope, type, id, label) =>
    '<option value="' + escapeHtml([scope, type, id || ''].join('|')) + '">' + escapeHtml(label) + '</option>';

  const options = [
    '<option value="">清除当前效果监控</option>',
    ...actions.flatMap((action) => [
      option('actions', 'attribute', action.id, '行动 / 属性：' + (action.name || action.id)),
      option('actions', 'learn_modifier', action.id, '行动 / 学习修正：' + (action.name || action.id)),
      option('actions', 'discount', action.id, '行动 / 折扣：' + (action.name || action.id)),
      option('actions', 'resource', action.id, '行动 / 资源：' + (action.name || action.id)),
      option('effects', 'action', action.id, '效果 / 行动：' + (action.name || action.id)),
    ]),
    ...spells.map((spell) => [
      option('spells', 'school_efficiency', spell.id, '法术 / 学派效率：' + (spell.name || spell.id)),
      option('effects', 'spell', spell.id, '效果 / 法术：' + (spell.name || spell.id)),
    ]).flat(),
    ...properties.map((item) => {
      const type = item.category || item.type || 'furniture';
      if (!['furniture', 'accessory', 'amplifier'].includes(type)) return '';
      return option('effects', type, item.id, '效果 / ' + type + '：' + (item.name || item.id));
    }),
  ].filter(Boolean).join('');

  return '<article class="ui-card"><div class="ui-card__body">' +
    '<div class="ui-section-title"><div><strong>运行监控</strong><span>全局效果监控</span></div></div>' +
    '<p class="ui-muted">监控是全局单选项。这里直接使用 Worker 的 scope/type/id 协议，不会虚构每张卡片独立的监控状态。</p>' +
    '<div class="ui-settings-monitor">' +
      '<label><span>监控目标</span><select data-action="monitor-target">' + options + '</select></label>' +
      '<button class="ui-btn ui-btn--primary" data-command="set-monitored">应用监控</button>' +
    '</div>' +
  '</div></article>';
}

export function getSettingsQueries() {
  return [
    ['query-all-hotkeys', {}],
    ['query-spell-data', { includeAutomations: true }],
    ['query-furnitures-data', {}],
    ['query-settings', {}],
    ['query_tour_status', {}],
  ];
}

export function renderSettingsView(snapshot) {
  const save = snapshot?.raw?.['saved-string']?.string || '';
  const persisted = snapshot?.initialized && !snapshot?.loading;
  const status = snapshot?.loading ? '加载存档中…' : persisted ? '自动保存已开启' : '运行时启动中…';

  return '<section class="ui-page-head">' +
    '<div>' +
      '<div class="ui-kicker">系统</div>' +
      '<h1>设置</h1>' +
      '<p>管理存档、快捷键和运行时控制。游戏存档由引擎客户端保存到本地，并在启动时自动恢复。</p>' +
    '</div>' +
    '<div class="ui-status-pill">' + escapeHtml(status) + '</div>' +
  '</section>' +
  '<section class="ui-grid">' +
    '<article class="ui-card"><div class="ui-card__body">' +
      '<div class="ui-section-title"><div><strong>存档数据</strong><span>可移植快照</span></div></div>' +
      '<div class="ui-actions">' +
        '<button class="ui-btn ui-btn--primary" data-command="get-save-string">导出存档</button>' +
        '<label class="ui-btn ui-file-btn">导入文件<input type="file" accept=".json,.txt,application/json,text/plain" data-action="import-save-file"></label>' +
        '<button class="ui-btn" data-command="load-save-text">载入文本</button>' +
      '</div>' +
      '<textarea class="ui-save-input" data-action="save-text" spellcheck="false" placeholder="在此粘贴存档字符串或 JSON 存档对象…">' + escapeHtml(save) + '</textarea>' +
      '<div class="ui-actions">' +
        '<button class="ui-btn" data-command="copy-save">复制导出的存档</button>' +
        '<button class="ui-btn ui-btn--danger" data-command="reset-game">重置游戏</button>' +
      '</div>' +
      '<p class="ui-muted">游戏会将当前存档保存在浏览器存储中；导出的文本可在不同浏览器之间迁移。</p>' +
    '</div></article>' +
    '<article class="ui-card"><div class="ui-card__body">' +
      '<div class="ui-section-title"><div><strong>运行时</strong><span>架构状态</span></div></div>' +
      '<div class="ui-stat-grid">' +
        '<div class="ui-stat"><div class="ui-stat__label">Worker</div><div class="ui-stat__value">' + (snapshot?.initialized ? '就绪' : '启动中') + '</div></div>' +
        '<div class="ui-stat"><div class="ui-stat__label">本地存档</div><div class="ui-stat__value">' + (persisted ? '已启用' : '等待中') + '</div></div>' +
        '<div class="ui-stat"><div class="ui-stat__label">旧版运行时</div><div class="ui-stat__value">已移除</div></div>' +
      '</div>' +
    '</div></article>' +
  '</section>' +
  '<section class="ui-grid" style="margin-top:20px">' +
    renderHotkeys(snapshot?.raw?.['all-hotkeys']) +
    renderMonitorTargets(snapshot) +
    renderRuntimeSettings(snapshot?.raw?.settings) +
    renderTourStatus(snapshot?.raw?.tour_status) +
  '</section>';
}

export function decodePortableSave(text) {
  const normalized = String(text ?? '').trim();
  if (!normalized) throw new Error('存档文本为空');

  try {
    const parsed = JSON.parse(normalized);
    if (!parsed || typeof parsed !== 'object') throw new Error('存档 JSON 必须是对象');
    return parsed;
  } catch {
    let decoded;
    try {
      decoded = decodeURIComponent(escape(atob(normalized)));
    } catch {
      throw new Error('存档文本既不是 JSON，也不是有效的便携存档字符串');
    }
    const parsed = JSON.parse(decoded);
    if (!parsed || typeof parsed !== 'object') throw new Error('解码后的存档必须是对象');
    return parsed;
  }
}
