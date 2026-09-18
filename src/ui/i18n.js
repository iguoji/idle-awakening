export const DEFAULT_LANGUAGE = 'zh-CN';

const TEXT = new Map(Object.entries({
  'Active progression': '当前进度',
  'Actions': '行动',
  'Character': '角色',
  'Mage': '法师',
  'Statistics': '统计',
  'Events': '事件',
  'Shop': '商店',
  'Inventory': '背包',
  'Courses': '课程',
  'Automation': '自动化',
  'World': '世界',
  'Property': '家园',
  'Workshop': '工坊',
  'Spellbook': '法术书',
  'Social': '社交',
  'Settings': '设置',
  'About': '关于',
  'Game': '游戏',
  'Resources': '资源',
  'Runtime boundary': '运行时边界',
  'Worker state': 'Worker 状态',
  'Responses seen': '已接收响应',
  'Legacy runtime': '旧版运行时',
  'Removed': '已移除',
  'Ready': '就绪',
  'Booting': '启动中',
  'Loading…': '加载中…',
  'Starting…': '启动中…',
  'Online': '在线',
  'Active event': '进行中的事件',
  'Open Events': '打开事件',
  'Close': '关闭',
  'Run next': '运行下一项',
  'Search': '搜索',
  'Show hidden': '显示隐藏',
  'New filter': '新建筛选器',
  'All': '全部',
  'Custom filters': '自定义筛选器',
  'Pinned': '已置顶',
  'Unpinned': '未置顶',
  'Built-in': '内置',
  'Applied': '已应用',
  'Apply': '应用',
  'Edit': '编辑',
  'Unpin': '取消置顶',
  'Pin': '置顶',
  'Delete': '删除',
  'Rule type': '规则类型',
  'Tag / resource / attribute': '标签 / 资源 / 属性',
  'Remove': '移除',
  'Edit filter': '编辑筛选器',
  'Name': '名称',
  'Condition': '条件',
  'Rules': '规则',
  'Add rule': '添加规则',
  'Cancel': '取消',
  'Save filter': '保存筛选器',
  'Details': '详情',
  'Level': '等级',
  'XP': '经验',
  'XP rate': '经验速率',
  'Show XP breakdown': '查看经验明细',
  'Available actions': '可用行动',
  'Persistent background progress': '后台持续推进',
  'Loading actions…': '正在加载行动…',
  'Engine → UI': '引擎 → 界面',
  'Worker snapshot': 'Worker 快照',
  'ActionsModule': '行动模块',
  'Character': '角色',
  'Your long-term progression, attributes, skills and active effects.': '查看长期进度、属性、技能和当前效果。',
  'Progression': '成长进度',
  'Mage level and skill points': '法师等级与技能点',
  'Skill points': '技能点',
  'Time played': '游戏时长',
  'simulation seconds': '模拟秒数',
  'Toggle speed-up': '切换加速',
  'Apply changes': '应用修改',
  'Discard': '放弃修改',
  'Account': '账户',
  'Runtime totals': '运行时统计',
  'Unlocks': '解锁数',
  'Actions unlocked': '已解锁行动',
  'Active effects': '当前效果',
  'Attributes': '属性',
  'Current buffs and debuffs': '当前增益与减益',
  'No unlocked attributes yet.': '暂无已解锁属性。',
  'No skills loaded.': '暂无技能数据。',
  'No active effects.': '暂无生效效果。',
  'Prerequisites unmet': '前置条件未满足',
  'Prerequisites met': '前置条件已满足',
  'staged': '待应用',
  'Maxed': '已满级',
  'Buy +1': '购买 +1',
  'Locked': '未解锁',
  'Choose a skill to begin a staged edit.': '选择一个技能开始暂存修改。',
  'Draft name': '草稿名称',
  'Save draft': '保存草稿',
  'Import': '导入',
  'Export': '导出',
  'Load': '载入',
  'No saved skill drafts.': '暂无已保存的技能草稿。',
  'Editing skills': '编辑技能中',
  'Live worker data': '实时 Worker 数据',
  'Courses': '课程',
  'Automation': '自动化',
  'Long-term record': '长期记录',
  'Statistics': '统计',
  'Track play time, unlocked actions, XP earned and spell usage from the live game runtime.': '查看实时运行时的游戏时长、行动解锁、获得经验与施法统计。',
  'Live worker data': '实时 Worker 数据',
  'Action time': '行动耗时',
  'Action XP': '行动经验',
  'Spells cast': '施法次数',
  'Top 10': '前 10',
  'System': '系统',
  'Manage saves and runtime controls. Saves are persisted locally by the engine client and restored automatically on startup.': '管理存档和运行时控制。存档由引擎客户端保存在本地，并在启动时自动恢复。',
  'Autosave active': '自动保存已开启',
  'Loading save…': '正在加载存档…',
  'Starting runtime…': '正在启动运行时…',
  'Save data': '存档数据',
  'Portable snapshot': '可移植快照',
  'Export save': '导出存档',
  'Import file': '导入文件',
  'Load text': '载入文本',
  'Copy exported save': '复制导出的存档',
  'Reset game': '重置游戏',
  'The game keeps its rolling save in browser storage. Exported text is a portable copy you can move between browsers.': '游戏会将当前存档保存在浏览器存储中；导出的文本可在不同浏览器之间迁移。',
  'Worker': 'Worker',
  'Local save': '本地存档',
  'Enabled': '已启用',
  'Pending': '等待中',
  'Migration status': '迁移状态',
  'Home & infrastructure': '家园与设施',
  'Property': '家园',
  'Furniture': '家具',
  'Accessory': '饰品',
  'Amplifier': '增幅器',
  'Hide maxed': '隐藏满级',
  'Filters': '筛选器',
  'Available property items': '可用家园物品',
  'Autopurchase available': '自动购买可用',
  'Autopurchase locked': '自动购买未解锁',
  'Upgrade': '升级',
  'Auto on': '自动开启',
  'Auto off': '自动关闭',
  'Property item': '家园物品',
  'Space usage': '空间占用',
  'World events': '世界事件',
  'Review active random events, open their choices, and resolve available options.': '查看正在发生的随机事件，打开选项并执行可用选择。',
  'Expires automatically': '到期自动结束',
  'No active random events right now.': '当前没有进行中的随机事件。',
  'Inspect': '查看',
  'Open': '打开',
  'Choose': '选择',
  'Selected:': '已选择：',
  'No revealed triggered effect.': '暂无已揭示的触发效果。',
  'No options available.': '暂无可用选项。',
  'World': '世界',
  'Workshop': '工坊',
  'Spellbook': '法术书',
  'Social': '社交',
  'Save': '保存',
  'Export': '导出',
}));

const ATTRIBUTE_TEXT = new Map(Object.entries({
  'Name, tags…': '名称、标签…',
  'Paste a save string or JSON save object here…': '在此粘贴存档字符串或 JSON 存档对象…',
  'Name…': '名称…',
  'Example: 1 AND 2 OR 3': '例如：1 AND 2 OR 3',
  'Example: 1 AND 2': '例如：1 AND 2',
}));

function preserveWhitespace(original, replacement) {
  const leading = original.match(/^\s*/)?.[0] || '';
  const trailing = original.match(/\s*$/)?.[0] || '';
  return leading + replacement + trailing;
}

export function translateText(value) {
  const original = String(value ?? '');
  const trimmed = original.trim();
  if (!trimmed) return original;
  const exact = TEXT.get(trimmed);
  if (exact) return preserveWhitespace(original, exact);

  const dynamic = [
    [/^(\d+) filters$/, '$1 个筛选器'],
    [/^(\d+) rules$/, '$1 条规则'],
    [/^(\d+) visible$/, '$1 项可见'],
    [/^(\d+) items$/, '$1 项物品'],
    [/^(\d+) active$/, '$1 项进行中'],
    [/^(\d+) unlocked$/, '$1 项已解锁'],
    [/^(\d+) income$/, '$1 收入'],
    [/^(\d+)s remaining$/, '$1 秒剩余'],
    [/^Lv\.?\s*/, '等级 '],
    [/^Resolved choice:\s*/, '已选择：'],
    [/^\s*Space usage:\s*/, '空间占用：'],
    [/^\s*Export ready:\s*/, '导出完成：'],
  ];
  for (const [pattern, replacement] of dynamic) {
    if (pattern.test(trimmed)) return preserveWhitespace(original, trimmed.replace(pattern, replacement));
  }
  return original;
}

export function translateAttribute(name, value) {
  const text = String(value ?? '');
  return ATTRIBUTE_TEXT.get(text) || translateText(text);
}

export function localizeDom(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) node.nodeValue = translateText(node.nodeValue);

  const attributes = ['placeholder', 'aria-label', 'title'];
  root.querySelectorAll('*').forEach((element) => {
    for (const attribute of attributes) {
      if (element.hasAttribute(attribute)) {
        const value = element.getAttribute(attribute);
        element.setAttribute(attribute, translateAttribute(attribute, value));
      }
    }
  });
}
