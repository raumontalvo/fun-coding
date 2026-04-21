import React, { useState } from 'react';

const MODULE_INTROS = [
  {
    name: 'Variables',
    type: 'Fundamentals',
    goal: 'Understand variables, assignment, and data types.',
    topics: 'Declaring variables, naming rules, assigning values, updating variables, string and number basics.',
    activities: 'Identify valid variable names, fix assignment errors, assemble simple variable statements.',
    example: "Storing a user's score in a game."
  },
  {
    name: 'Arrays',
    type: 'Data Structures',
    goal: 'Learn how to store and access lists of data.',
    topics: 'Creating arrays, indexing, updating elements, array length, iterating basics.',
    activities: 'Build arrays, access elements, fix off-by-one errors, assemble array operations.',
    example: 'Managing a list of high scores.'
  },
  {
    name: 'Loops',
    type: 'Control Flow',
    goal: 'Master repeating actions with loops.',
    topics: 'for-loops, while-loops, loop conditions, incrementing, breaking out of loops.',
    activities: 'Complete loop bodies, fix infinite loops, assemble counting and summing tasks.',
    example: 'Looping through player inventory.'
  },
  {
    name: 'Conditionals',
    type: 'Control Flow',
    goal: 'Make decisions in code using if/else.',
    topics: 'if, else if, else, comparison operators, logical operators, nesting.',
    activities: 'Assemble conditional statements, debug logic errors, predict outcomes.',
    example: 'Checking if a player has enough points to level up.'
  },
  {
    name: 'Functions',
    type: 'Abstraction',
    goal: 'Organize code into reusable blocks.',
    topics: 'Defining functions, parameters, return values, calling functions, scope basics.',
    activities: 'Write and call functions, fix parameter errors, assemble function calls.',
    example: 'Creating a function to calculate a score multiplier.'
  },
  {
    name: 'Objects',
    type: 'Data Structures',
    goal: 'Group related data and behavior.',
    topics: 'Object literals, properties, methods, accessing and updating values, this keyword.',
    activities: 'Build objects, access properties, fix method errors, assemble object usage.',
    example: 'Representing a player with stats and actions.'
  },
  {
    name: 'Final Challenge',
    type: 'Capstone',
    goal: 'Combine all concepts in a capstone project.',
    topics: 'Integrating variables, arrays, loops, conditionals, functions, and objects.',
    activities: 'Complete a multi-step coding challenge, debug a small program, assemble a working solution.',
    example: 'Building a simple game logic or simulation.'
  }
];

function ModuleIntro({ moduleIdx }) {
  const [open, setOpen] = useState(false);
  const intro = MODULE_INTROS[moduleIdx];
  if (!intro) return null;
  return (
    <section className="module-intro">
      <button
        className="module-intro-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Hide' : 'Show'} Module Info
      </button>
      {open && (
        <div className="module-intro-content">
          <h2>{intro.name} Module <span className="module-type">({intro.type})</span></h2>
          <ul>
            <li><strong>Goal:</strong> {intro.goal}</li>
            <li><strong>Topics:</strong> {intro.topics}</li>
            <li><strong>Activities:</strong> {intro.activities}</li>
            <li><strong>Real-World Example:</strong> {intro.example}</li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default ModuleIntro;
