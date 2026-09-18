const TOUR = [
  ['快捷键', '在这里修改维护面板的快捷操作。'],
  ['性能监控', '查看页面帧率、DOM 节点数量等运行时信息。'],
  ['命令模块', '后续 Worker 命令统一通过命令载荷模块构造。'],
];

export function mountTourPanel(container) {
  const section = document.createElement('section');
  section.className = 'ia-settings-section';
  section.innerHTML = '<h3>引导与运行时设置</h3><div class="ia-tour"></div><div class="ia-tour-actions"><button data-prev>上一步</button><button data-next>下一步</button></div>';
  const body = section.querySelector('.ia-tour'); let index = 0;
  const render = () => { const [title, text] = TOUR[index]; body.innerHTML = '<b>' + title + '</b><p>' + text + '</p><small>第 ' + (index + 1) + ' / ' + TOUR.length + ' 步</small>'; };
  section.querySelector('[data-prev]').onclick = () => { index = Math.max(0, index - 1); render(); };
  section.querySelector('[data-next]').onclick = () => { index = Math.min(TOUR.length - 1, index + 1); render(); };
  render(); container.append(section);
  return () => section.remove();
}
