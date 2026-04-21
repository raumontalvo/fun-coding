export const objectsModule = [
  {
    step: 1,
    prompt: "Create an object named person.",
    blocks: ["let", "person", "=", "{", "}", ";"],
    answer: ["let", "person", "=", "{", "}", ";"],
    hint: "Use curly braces for objects.",
    example: "let person = {};"
  },
  {
    step: 2,
    prompt: "Add a property name with value 'Alex' to person.",
    blocks: ["person", ".", "name", "=", "'Alex'", ";"],
    answer: ["person", ".", "name", "=", "'Alex'", ";"],
    hint: "Use dot notation to add properties.",
    example: "person.name = 'Alex';"
  },
  {
    step: 3,
    prompt: "Add a method greet to person.",
    blocks: ["person", ".", "greet", "=", "function", "()", "{", "}", ";"],
    answer: ["person", ".", "greet", "=", "function", "()", "{", "}", ";"],
    hint: "Assign a function as a property.",
    example: "person.greet = function() { };"
  },
  {
    step: 4,
    prompt: "Call the greet method on person.",
    blocks: ["person", ".", "greet", "()", ";"],
    answer: ["person", ".", "greet", "()", ";"],
    hint: "Use dot notation to call methods.",
    example: "person.greet();"
  }
];
