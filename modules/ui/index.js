import { mountHotkeysPanel, installHotkeys } from './hotkeys-panel.js';
import { mountMonitoringPanel } from './monitoring-panel.js';
import { mountTourPanel } from './tour-settings-panel.js';

const STYLE_ID = 'idle-awakening-modular-ui-style';
const PANEL_ID = 'idle-awakening-modular-panel';

function injectStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style'); style.id = STYLE_ID;
  style.textContent = '.ia-fab{position:fixed;right:18px;bottom:18px;z-index:2147483646;border:0;border-radius:999px;padding:10px 14px;background:#222;color:#fff;cursor:pointer;box-shadow:0 4px 16px #0005}.ia-panel{position:fixed;right:18px;bottom:64px;width:min(420px,calc(100vw - 36px));max-height:75vh;overflow:auto;z-index:2147483647;background:#fff;color:#222;border:1px solid #ddd;border-radius:14px;padding:16px;box-shadow:0 12px 40px #0004;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif}.ia-panel h2{margin:0 0 12px}.ia-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.ia-tabs button,.ia-tour-actions button{border:1px solid #ccc;background:#f6f6f6;border-radius:8px;padding:6px 10px;cursor:pointer}.ia-setting-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0}.ia-setting-row input{width:110px;text-align:center}.ia-muted{color:#777;font-size:13px}.ia-monitor-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.ia-monitor-grid>div{padding:10px;border:1px solid #eee;border-radius:8px}.ia-monitor-grid span,.ia-monitor-grid strong{display:block}.ia-monitor-grid strong{margin-top:4px}.ia-tour-actions{display:flex;justify-content:space-between;margin-top:12px}';
  document.head.append(style);
}

export function mountModularUI() {
  if (document.getElementById(PANEL_ID)) return;
  injectStyle();
  const fab = document.createElement('button'); fab.className = 'ia-fab'; fab.textContent = '维护面板';
  const panel = document.createElement('aside'); panel.id = PANEL_ID; panel.className = 'ia-panel'; panel.hidden = true;
  panel.innerHTML = '<h2>维护与运行时设置</h2><div class="ia-tabs"><button data-tab="hotkeys">快捷键</button><button data-tab="monitor">性能监控</button><button data-tab="tour">引导设置</button></div><div data-content></div>';
  document.body.append(fab, panel);
  const content = panel.querySelector('[data-content]');
  const actions = { openPanel: () => { panel.hidden = !panel.hidden; }, toggleMonitoring: () => show('monitor'), toggleTour: () => show('tour') };
  const cleanup = new Map();
  const show = (tab) => { cleanup.get(tab)?.(); content.innerHTML = ''; if (tab === 'hotkeys') cleanup.set(tab, mountHotkeysPanel(content, actions)); if (tab === 'monitor') cleanup.set(tab, mountMonitoringPanel(content)); if (tab === 'tour') cleanup.set(tab, mountTourPanel(content)); };
  panel.querySelectorAll('[data-tab]').forEach((button) => button.addEventListener('click', () => show(button.dataset.tab)));
  fab.addEventListener('click', () => { panel.hidden = !panel.hidden; if (!panel.hidden && !content.children.length) show('hotkeys'); });
  installHotkeys(actions);
  return () => { for (const fn of cleanup.values()) fn?.(); fab.remove(); panel.remove(); document.getElementById(STYLE_ID)?.remove(); };
}
