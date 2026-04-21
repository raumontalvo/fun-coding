import React from 'react';

function ProgressBar({ currentModuleIdx, currentStepIdx, modules, progress }) {
  const steps = modules[currentModuleIdx].data.length;
  const completed = progress[currentModuleIdx];
  const percent = Math.round((completed / steps) * 100);
  const overallPercent = Math.round((progress.reduce((a, b, i) => a + (i < modules.length - 1 ? b : 0), 0) /
    modules.slice(0, -1).reduce((a, m) => a + m.data.length, 0)) * 100);

  return (
    <div className="progress-bar" aria-label="Progress bar">
      <div style={{ marginBottom: 4 }}>
        <strong>Module Progress:</strong> {percent}% ({completed}/{steps} steps)
      </div>
      <div style={{ height: 8, background: '#e0e0e0', borderRadius: 4, marginBottom: 8 }}>
        <div style={{ width: percent + '%', height: '100%', background: '#1976d2', borderRadius: 4 }}></div>
      </div>
      <div>
        <strong>Overall Progress:</strong> {overallPercent}%
      </div>
    </div>
  );
}

export default ProgressBar;
