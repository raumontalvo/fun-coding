import React from 'react';

function Sidebar({ modules, currentModuleIdx, onModuleSelect, progress }) {
  return (
    <nav className="sidebar" aria-label="Module navigation">
      <ul style={{ width: '100%', padding: 0, margin: 0, listStyle: 'none' }}>
        {modules.map((name, idx) => (
          <li key={name} style={{ width: '100%' }}>
            <button
              className={`sidebar-btn${idx === currentModuleIdx ? ' active' : ''}`}
              aria-current={idx === currentModuleIdx ? 'page' : false}
              onClick={() => onModuleSelect(idx)}
            >
              {name}
              {progress[idx] > 0 && (
                <span className="sidebar-checkmark">✓</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
