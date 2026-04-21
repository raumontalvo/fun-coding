export const functionsModule = [
  {
    step: 1,
    prompt: "Write a function named greet.",
    blocks: ["function", "greet", "()", "{", "}",],
    answer: ["function", "greet", "()", "{", "}",],
    hint: "Start with the function keyword.",
    example: "function greet() { }"
  },
  {
    step: 2,
    prompt: "Call the greet function.",
    blocks: ["greet", "()", ";"],
    answer: ["greet", "()", ";"],
    hint: "Use the function name followed by ().",
    example: "greet();"
  },
  {
    step: 3,
    prompt: "Write a function add that takes two parameters a and b.",
    blocks: ["function", "add", "(", "a", ",", "b", ")", "{", "}",],
    answer: ["function", "add", "(", "a", ",", "b", ")", "{", "}",],
    hint: "List parameters inside the parentheses.",
    example: "function add(a, b) { }"
  },
  {
    step: 4,
    prompt: "Return the sum of a and b from the add function.",
    blocks: ["return", "a", "+", "b", ";"],
    answer: ["return", "a", "+", "b", ";"],
    hint: "Use return to send a value back.",
    example: "return a + b;"
  }
];
