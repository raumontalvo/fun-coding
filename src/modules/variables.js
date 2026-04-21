export const variablesModule = [
  {
    step: 1,
    prompt: "Declare a variable named x.",
    blocks: ["let", "x", ";"],
    answer: ["let", "x", ";"],
    hint: "Start with the keyword for variable declaration.",
    example: "let x; // declares a variable named x"
  },
  {
    step: 2,
    prompt: "Assign the value 5 to x.",
    blocks: ["x", "=", "5", ";"],
    answer: ["x", "=", "5", ";"],
    hint: "Use the assignment operator.",
    example: "x = 5; // assigns 5 to x"
  },
  {
    step: 3,
    prompt: "Declare a string variable named name and assign it the value 'Alex'.",
    blocks: ["let", "name", "=", "'Alex'", ";"],
    answer: ["let", "name", "=", "'Alex'", ";"],
    hint: "Combine declaration and assignment.",
    example: "let name = 'Alex';"
  },
  {
    step: 4,
    prompt: "Update the value of x to 10.",
    blocks: ["x", "=", "10", ";"],
    answer: ["x", "=", "10", ";"],
    hint: "Assign a new value to an existing variable.",
    example: "x = 10;"
  },
  {
    step: 5,
    prompt: "Declare two variables, a and b, and assign them 1 and 2 respectively.",
    blocks: ["let", "a", "=", "1", ",", "b", "=", "2", ";"],
    answer: ["let", "a", "=", "1", ",", "b", "=", "2", ";"],
    hint: "You can declare and assign multiple variables in one line.",
    example: "let a = 1, b = 2;"
  },
  {
    step: 6,
    prompt: "Declare a variable score and assign it the sum of a and b.",
    blocks: ["let", "score", "=", "a", "+", "b", ";"],
    answer: ["let", "score", "=", "a", "+", "b", ";"],
    hint: "Use + to add variables.",
    example: "let score = a + b;"
  }
];
