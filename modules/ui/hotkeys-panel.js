const STORAGE_KEY = 'idle-awakening:hotkeys';
const DEFAULTS = {
  openPanel: 'F2',
  toggleMonitoring: 'F3',
  toggleTour: 'F4',
};

function load() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; }
  catch { return { ...DEFAULTS }; }
}

export function mountHotkeysPanel(container, actions) {
  const state = load();
  const rows = Object.entries({
    openPanel: ['打开维护面板', actions.openPanel],
    toggleMonitoring: ['切换性能监控', actions.toggleMonitoring],
    toggleTour: ['切换新手引导', actions.toggleTour],
  });
  const section = document.createElement('section');
  section.className = 'ia-settings-section';
  section.innerHTML = '<h3>快捷键</h3><p class="ia-muted">点击输入框后按下新的按键即可保存。</p>';
  for (const [key, [label, action]] of rows) {
    const row = document.createElement('label');
    row.className = 'ia-setting-row';
    const name = document.createElement('span'); name.textContent = label;
    const input = document.createElement('input'); input.value = state[key]; input.readOnly = true;
    input.addEventListener('keydown', (event) => {
      event.preventDefault();
      state[key] = event.key === ' ' ? 'Space' : event.key;
      input.value = state[key];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      action?.(state[key]);
    });
    row.append(name, input); section.append(row);
  }
  container.append(section);
  return () => section.remove();
}

export function installHotkeys(actions) {
  const state = load();
  const handler = (event) => {
    if (event.repeat) return;
    for (const [key, value] of Object.entries(state)) {
      if (event.key === value || event.code === value) {
        event.preventDefault();
        actions[key]?.();
      }
    }
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}
