import React from 'react';

function Dashboard({ modules, progress, onModuleSelect }) {
  return (
    <section className="dashboard" aria-label="Dashboard">
      <h2>Dashboard</h2>
      <p>Track your progress and revisit concepts here.</p>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
        {modules.map((mod, idx) => (
          <li key={mod.name} style={{ marginBottom: '0.5rem' }}>
            <button
              className={`dashboard-btn${progress[idx] === mod.data.length ? ' completed' : ''}`}
              onClick={() => onModuleSelect(idx)}
              aria-label={`Practice ${mod.name}`}
            >
              {mod.name} <span style={{ color: '#90caf9' }}>({progress[idx]}/{mod.data.length})</span>
              {progress[idx] === mod.data.length && (
                <span className="dashboard-checkmark">✓</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Dashboard;
