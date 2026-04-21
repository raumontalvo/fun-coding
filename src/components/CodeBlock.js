import React from 'react';

function CodeBlock({ text, onClick, isSelected }) {
  return (
    <button
      className={`code-block${isSelected ? ' selected' : ''}`}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      {text}
    </button>
  );
}

export default CodeBlock;
