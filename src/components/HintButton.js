import React from 'react';

function HintButton({ onClick }) {
  return (
    <button className="hint-button" onClick={onClick} aria-label="Show hint">
      Hint
    </button>
  );
}

export default HintButton;
