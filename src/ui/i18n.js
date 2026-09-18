import { ZH_CN_CATALOG } from './i18n/catalog.js';

export const DEFAULT_LANGUAGE = 'zh-CN';

const EXTRAS = new Map(Object.entries({
  'Online': '在线',
  'Starting…': '启动中…',
  'Loading…': '加载中…',
  'Ready': '就绪',
  'Run': '运行',
  'Running': '运行中',
  'Unavailable': '不可用',
  'Details': '详情',
  'Property': '家园',
  'Workshop': '工坊',
  'Events': '事件',
  'Social': '社交',
  'Courses': '课程',
  'Inventory': '背包',
  'Spellbook': '法术书',
  'World': '世界',
  'About': '关于',
  'Settings': '设置',
  'Search': '搜索',
  'Upgrade': '升级',
  'Auto on': '自动开启',
  'Auto off': '自动关闭',
  'Inspect': '查看',
  'Open': '打开',
  'Choose': '选择',
  'Cancel': '取消',
  'Delete': '删除',
  'Edit': '编辑',
  'Apply': '应用',
  'Applied': '已应用',
  'Pinned': '已置顶',
  'Unpin': '取消置顶',
  'Pin': '置顶',
  'New filter': '新建筛选器',
  'Custom filters': '自定义筛选器',
  'Show hidden': '显示隐藏',
  'Hide maxed': '隐藏满级',
  'Maxed': '已满级',
  'Locked': '未解锁',
  'Buy +1': '购买 +1',
  'Run +1': '运行 +1',
  'No data yet.': '暂无数据。',
}));

const PLACEHOLDERS = new Map(Object.entries({
  'Name, tags…': '名称、标签…',
  'Paste a save string or JSON save object here…': '在此粘贴存档字符串或 JSON 存档对象…',
  'Name…': '名称…',
  'Example: 1 AND 2 OR 3': '例如：1 AND 2 OR 3',
  'Example: 1 AND 2': '例如：1 AND 2',
}));

const CATALOG_KEYS = Object.keys(ZH_CN_CATALOG)
  .filter((source) => source.length >= 4 && /[A-Za-z]/.test(source))
  .sort((a, b) => b.length - a.length);

const DYNAMIC = [
  [/^(\d+) filters$/, '$1 个筛选器'],
  [/^(\d+) rules$/, '$1 条规则'],
  [/^(\d+) visible$/, '$1 项可见'],
  [/^(\d+) items$/, '$1 项物品'],
  [/^(\d+) active$/, '$1 项进行中'],
  [/^(\d+) unlocked$/, '$1 项已解锁'],
  [/^(\d+) income$/, '$1 收入'],
  [/^(\d+)s remaining$/, '$1 秒剩余'],
  [/^Lv\.?\s*/, '等级 '],
  [/^Needs\s+/, '需要 '],
  [/^Focus\s+/, '专注 '],
  [/^Resolved choice:\s*/, '已选择：'],
  [/^Space usage:\s*/, '空间占用：'],
  [/^Export ready:\s*/, '导出完成：'],
  [/^Sell price:\s*/, '出售价格：'],
];

function preserveWhitespace(original, replacement) {
  const leading = original.match(/^\s*/)?.[0] || '';
  const trailing = original.match(/\s*$/)?.[0] || '';
  return leading + replacement + trailing;
}

function lookup(trimmed) {
  return EXTRAS.get(trimmed) || ZH_CN_CATALOG[trimmed] || null;
}

export function translateText(value) {
  const original = String(value ?? '');
  const trimmed = original.trim();
  if (!trimmed) return original;

  const exact = lookup(trimmed);
  if (exact) return preserveWhitespace(original, exact);

  for (const [pattern, replacement] of DYNAMIC) {
    if (pattern.test(trimmed)) return preserveWhitespace(original, trimmed.replace(pattern, replacement));
  }

  let localized = trimmed;
  for (const source of CATALOG_KEYS) {
    if (!localized.includes(source)) continue;
    localized = localized.split(source).join(ZH_CN_CATALOG[source]);
  }
  return preserveWhitespace(original, localized);
}

export function translateAttribute(name, value) {
  const text = String(value ?? '');
  return PLACEHOLDERS.get(text) || lookup(text) || translateText(text);
}

export function localizeDom(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) node.nodeValue = translateText(node.nodeValue);

  for (const attribute of ['placeholder', 'aria-label', 'title']) {
    root.querySelectorAll('[' + attribute + ']').forEach((element) => {
      element.setAttribute(attribute, translateAttribute(attribute, element.getAttribute(attribute)));
    });
  }
  document.documentElement.lang = DEFAULT_LANGUAGE;
}
