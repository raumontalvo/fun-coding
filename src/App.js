import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskArea from './components/TaskArea';
import ProgressBar from './components/ProgressBar';
import Dashboard from './components/Dashboard';
import './styles/App.css';
import ModuleIntro from './components/ModuleIntro';

import { variablesModule } from './modules/variables';
import { arraysModule } from './modules/arrays';
import { loopsModule } from './modules/loops';
import { conditionalsModule } from './modules/conditionals';
import { functionsModule } from './modules/functions';
import { objectsModule } from './modules/objects';
import { finalChallengeModule } from './modules/finalChallenge';

const modules = [
  { name: 'Variables', data: variablesModule },
  { name: 'Arrays', data: arraysModule },
  { name: 'Loops', data: loopsModule },
  { name: 'Conditionals', data: conditionalsModule },
  { name: 'Functions', data: functionsModule },
  { name: 'Objects', data: objectsModule },
  { name: 'Final Challenge', data: finalChallengeModule },
];


function App() {
  const [currentModuleIdx, setCurrentModuleIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [progress, setProgress] = useState(Array(modules.length).fill(0));
  const [showModuleComplete, setShowModuleComplete] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleModuleSelect = (idx) => {
    setCurrentModuleIdx(idx);
    setCurrentStepIdx(0);
    setShowModuleComplete(false);
  };

  const handleNextStep = () => {
    const steps = modules[currentModuleIdx].data.length;
    if (currentStepIdx < steps - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    } else {
      setShowModuleComplete(true);
      setProgress((prev) => {
        const updated = [...prev];
        updated[currentModuleIdx] = steps;
        return updated;
      });
    }
  };

  const handlePrevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
      setShowModuleComplete(false);
    } else if (currentModuleIdx > 0) {
      setCurrentModuleIdx(currentModuleIdx - 1);
      setCurrentStepIdx(modules[currentModuleIdx - 1].data.length - 1);
      setShowModuleComplete(false);
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        modules={modules.map((m) => m.name)}
        currentModuleIdx={currentModuleIdx}
        onModuleSelect={handleModuleSelect}
        progress={progress}
      />
      <main className="main-content">
        <ProgressBar
          currentModuleIdx={currentModuleIdx}
          currentStepIdx={currentStepIdx}
          modules={modules}
          progress={progress}
        />
        {/* Show Module Intro before first step */}
        {currentStepIdx === 0 && !showModuleComplete && (
          <ModuleIntro moduleIdx={currentModuleIdx} />
        )}
        {showModuleComplete ? (
          <div style={{ textAlign: 'center', margin: '2rem 0', fontSize: '1.5rem', color: '#388e3c' }}>
            🎉 Great job! You finished the <b>{modules[currentModuleIdx].name}</b> module.<br />
            {currentModuleIdx < modules.length - 1 && (
              <button style={{ marginTop: 16 }} onClick={() => handleModuleSelect(currentModuleIdx + 1)}>
                Next Module
              </button>
            )}
          </div>
        ) : (
          <TaskArea
            module={modules[currentModuleIdx]}
            stepIdx={currentStepIdx}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        <button
          className="dashboard-toggle-btn"
          aria-expanded={showDashboard}
          onClick={() => setShowDashboard((v) => !v)}
          style={{ margin: '2rem 0 1rem 0', alignSelf: 'flex-start' }}
        >
          {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
        </button>
        {showDashboard && (
          <Dashboard
            modules={modules}
            progress={progress}
            onModuleSelect={handleModuleSelect}
          />
        )}
      </main>
    </div>
  );
}

export default App;
