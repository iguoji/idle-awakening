export function mountMonitoringPanel(container, worker = globalThis.worker) {
  const section = document.createElement('section');
  section.className = 'ia-settings-section';
  section.innerHTML = '<h3>性能监控</h3><div class="ia-monitor-grid"></div>';
  const grid = section.querySelector('.ia-monitor-grid');
  const metrics = { fps: '计算中', dom: String(document.getElementsByTagName('*').length), worker: worker ? '已连接' : '未启动' };
  const render = () => {
    grid.innerHTML = Object.entries(metrics).map(([k, v]) => '<div><span>' + ({fps:'帧率',dom:'DOM 节点',worker:'Worker 状态'}[k]) + '</span><strong>' + v + '</strong></div>').join('');
  };
  const onWorkerError = () => { metrics.worker = '异常'; render(); };
  const onWorkerMessage = () => { if (metrics.worker !== '运行中') { metrics.worker = '运行中'; render(); } };
  worker?.addEventListener?.('error', onWorkerError);
  worker?.addEventListener?.('message', onWorkerMessage);
  let frames = 0; let last = performance.now(); let raf;
  const tick = (now) => {
    frames++;
    if (now - last >= 1000) { metrics.fps = String(frames); frames = 0; last = now; metrics.dom = String(document.getElementsByTagName('*').length); render(); }
    raf = requestAnimationFrame(tick);
  };
  render(); raf = requestAnimationFrame(tick); container.append(section);
  return () => {
    cancelAnimationFrame(raf);
    worker?.removeEventListener?.('error', onWorkerError);
    worker?.removeEventListener?.('message', onWorkerMessage);
    section.remove();
  };
}
