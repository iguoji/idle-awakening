import './courses-view.css';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[c]));
}

function progress(value, max) {
  const n = Number(value) || 0;
  const m = Number(max) || 1;
  return `${Math.max(0, Math.min(100, n / m * 100))}%`;
}

function duration(seconds) {
  const value = Math.max(0, Number(seconds) || 0);
  if (value < 60) return `${value.toFixed(1)}s`;
  const minutes = Math.floor(value / 60);
  const remainder = Math.round(value % 60);
  return `${minutes}m ${String(remainder).padStart(2, '0')}s`;
}

export function getCoursesQueries() {
  return [['query-course-data', {}]];
}

export function renderCoursesView(snapshot) {
  const data = snapshot?.raw?.['course-data'] || {};
  const courses = Array.isArray(data.available) ? data.available : [];
  const running = courses.find((course) => course.isRunning);

  return `<section class="ui-page-head">
    <div><div class="ui-kicker">Training room</div><h1>Courses</h1><p>Run one course at a time and track its learning progress.</p></div>
    <div class="ui-status-pill">${running ? `Running: ${escapeHtml(running.name)}` : 'Idle'}</div>
  </section>
  <section class="ui-card">
    <div class="ui-card__body">
      <div class="ui-section-title"><div><strong>Available courses</strong><span>${courses.length} unlocked</span></div><span class="ui-muted">One active course at a time</span></div>
      <div class="ui-course-list">
        ${courses.map((course) => {
          const active = Boolean(course.isRunning);
          const pct = progress(course.progress, course.maxProgress);
          const canPurchase = course.affordable !== false && Number(course.level) < Number(course.max);
          return `<article class="ui-course" data-active="${active}">
            <div class="ui-course__main">
              <div class="ui-course__title"><strong>${escapeHtml(course.name || course.id)}</strong><span>Lv ${escapeHtml(course.level)} / ${escapeHtml(course.max)}</span></div>
              <p>${escapeHtml(course.description || '')}</p>
              <div class="ui-progress"><i style="width:${pct}"></i></div>
              <div class="ui-course__meta"><span>${escapeHtml(duration(course.progress || 0))} / ${escapeHtml(duration(course.maxProgress))}</span><span>${active ? `ETA ${escapeHtml(duration(course.toNext))}` : `${escapeHtml(Number(course.efficiency ?? 1).toFixed(2))}× efficiency`}</span></div>
            </div>
            <div class="ui-course__controls">
              ${active ? `<button class="ui-btn" data-command="stop-course" data-id="${escapeHtml(course.id)}">Stop</button>` : `<button class="ui-btn" data-command="run-course" data-id="${escapeHtml(course.id)}">Run</button>`}
              ${canPurchase ? `<button class="ui-btn ui-btn--primary" data-command="purchase-item" data-id="${escapeHtml(course.id)}">Buy +1</button>` : ''}
            </div>
          </article>`;
        }).join('') || '<div class="ui-empty-state"><span class="ui-empty-state__icon">◎</span><h2>No courses unlocked</h2></div>'}
      </div>
    </div>
  </section>`;
}
