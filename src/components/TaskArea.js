import React, { useState } from 'react';
import CodeBlock from './CodeBlock';
import HintButton from './HintButton';


function shuffle(array) {
  // Fisher-Yates shuffle
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


function TaskArea({ module, stepIdx, onNextStep, onPrevStep }) {
  const step = module.data[stepIdx];
  const [assembly, setAssembly] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [completed, setCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [shuffledBlocks, setShuffledBlocks] = useState(() => shuffle(step.blocks));
  const [mistakeCount, setMistakeCount] = useState(0);

  React.useEffect(() => {
    setAssembly([]);
    setFeedback('');
    setShowHint(false);
    setCompleted(false);
    setShuffledBlocks(shuffle(step.blocks));
    setMistakeCount(0);
  }, [module, stepIdx]);

  const handleBlockClick = (block) => {
    if (completed) return;
    setAssembly((prev) => [...prev, block]);
  };

  const handleRemoveBlock = (idx) => {
    if (completed) return;
    setAssembly((prev) => prev.filter((_, i) => i !== idx));
  };

  const [showTryAgain, setShowTryAgain] = useState(false);

  const handleSubmit = () => {
    if (JSON.stringify(assembly) === JSON.stringify(step.answer)) {
      setFeedback('✅ Correct!');
      setCompleted(true);
      setShowTryAgain(false);
      setMistakeCount(0);
    } else {
      setFeedback('❌ Incorrect. You can adjust your code above and try again!');
      setShowTryAgain(true);
      setMistakeCount((c) => c + 1);
    }
  };

  const handleTryAgain = () => {
    setAssembly([]);
    setFeedback('');
    setShowTryAgain(false);
    setShuffledBlocks(shuffle(step.blocks));
  };

  const handleNext = () => {
    setFeedback('');
    setCompleted(false);
    setShowHint(false);
    setAssembly([]);
    setMistakeCount(0);
    onNextStep();
  };

  const handleBack = () => {
    setFeedback('');
    setCompleted(false);
    setShowHint(false);
    setAssembly([]);
    setMistakeCount(0);
    onPrevStep();
  };

  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <section className="task-area" aria-label="Task area">
      <div className="question-prompt">
        <span className="question-icon" role="img" aria-label="question">❓</span>
        <span className="question-text">{step.prompt}</span>
      </div>
      <button
        className="how-to-play-btn"
        onClick={() => setShowInstructions((v) => !v)}
        aria-expanded={showInstructions}
        aria-controls="how-to-play-panel"
      >
        <span role="img" aria-label="game controller">🎮</span> How to Play
      </button>
      {showInstructions && (
        <div className="instruction-message" id="how-to-play-panel">
          <span className="instruction-icon" role="img" aria-label="game controller">🎮</span>
          <div className="instruction-text">
            <strong>How to Play:</strong>
            <ul>
              <li><b>Tap</b> the code blocks below to add them to your solution box.</li>
              <li><b>Remove</b> a block by clicking it in your solution box.</li>
              <li><b>Rearrange</b> by removing and re-adding blocks in the correct order.</li>
              <li>When you’re ready, hit <b>Submit</b> to check your answer!</li>
              <li>If you make a mistake, adjust your code and try again—no penalty, just keep learning!</li>
            </ul>
            <div className="instruction-encourage">Level up your coding skills—one block at a time!</div>
          </div>
        </div>
      )}
      <div className="code-blocks" style={{ marginBottom: 12 }}>
        {shuffledBlocks.map((block, idx) => (
          <CodeBlock
            key={idx}
            text={block}
            onClick={() => handleBlockClick(block)}
            isSelected={assembly.includes(block) && assembly.filter((b) => b === block).length > assembly.filter((b, i) => b === block && i < assembly.length).length}
          />
        ))}
      </div>
      <div className="assembly-box">
        <div className="assembly-label">Assembled Code:</div>
        <div className="assembly-blocks">
          {assembly.map((block, idx) => (
            <span key={idx} className="assembly-block-wrapper">
              <button
                className="assembly-block"
                onClick={() => handleRemoveBlock(idx)}
                disabled={completed}
                aria-label={`Remove ${block}`}
              >
                {block}
              </button>
            </span>
          ))}
        </div>
      </div>
      {!completed && (
        <>
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={assembly.length !== step.answer.length}
          >
            Submit
          </button>
        </>
      )}
      {completed && (
        <>
          <div className="completed-btns">
            <button className="nav-btn" onClick={handleBack} disabled={stepIdx === 0}>
              Back
            </button>
            <button className="nav-btn" onClick={handleNext}>
              Next
            </button>
          </div>
          <div className="explanation-box">
            <div className="explanation-correct">✅ Correct!</div>
            <div className="explanation-complete"><span className="explanation-complete-label">Complete Solution:</span> <span className="explanation-complete-code">{step.answer.join(' ')}</span></div>
            <strong>Step-by-step solution:</strong>
            <ol className="explanation-list">
              {step.answer.map((block, idx) => (
                <li key={idx}>
                  <span className="explanation-block">{block}</span>
                  {step.explanations && step.explanations[idx] && (
                    <span className="explanation-detail"> — {step.explanations[idx]}</span>
                  )}
                </li>
              ))}
            </ol>
            {step.explanation && (
              <div className="explanation-summary">{step.explanation}</div>
            )}
          </div>
        </>
      )}
      <HintButton onClick={() => setShowHint((v) => !v)} />
      {showHint && (
        <div style={{ marginTop: 8, color: '#1976d2' }}><strong>Hint:</strong> {step.hint}</div>
      )}
      {feedback && (
        <div className="feedback-container">
          <div
            className={`feedback${feedback.startsWith('✅') ? ' feedback-correct' : ''}${feedback.startsWith('❌') ? ' feedback-mistake' : ''}`}
            aria-live="polite"
          >
            {feedback}
          </div>
          {showTryAgain && !completed && (
            <button
              className="try-again-btn"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          )}
          {showTryAgain && !completed && step.answer && mistakeCount >= 5 && (
            <div className="explanation-box explanation-wrong">
              <div className="explanation-incorrect">❗ Correct answer:</div>
              <div className="explanation-complete"><span className="explanation-complete-label">Complete Solution:</span> <span className="explanation-complete-code">{step.answer.join(' ')}</span></div>
              <strong>Step-by-step solution:</strong>
              <ol className="explanation-list">
                {step.answer.map((block, idx) => (
                  <li key={idx}>
                    <span className="explanation-block">{block}</span>
                    {step.explanations && step.explanations[idx] && (
                      <span className="explanation-detail"> — {step.explanations[idx]}</span>
                    )}
                  </li>
                ))}
              </ol>
              {step.explanation && (
                <div className="explanation-summary">{step.explanation}</div>
              )}
            </div>
          )}
        </div>
      )}
      {completed && (
        <div className="example-box">
          <strong>Example:</strong> {step.example}
        </div>
      )}
    </section>
  );
}

export default TaskArea;
