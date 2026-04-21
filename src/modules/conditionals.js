export const conditionalsModule = [
  {
    step: 1,
    prompt: "Write an if statement that checks if x is 5.",
    blocks: ["if", "(", "x", "===", "5", ")", "{", "}",],
    answer: ["if", "(", "x", "===", "5", ")", "{", "}",],
    hint: "Use triple equals for comparison.",
    example: "if (x === 5) { }"
  },
  {
    step: 2,
    prompt: "Write an if/else statement that checks if score is greater than 10.",
    blocks: ["if", "(", "score", ">", "10", ")", "{", "}", "else", "{", "}",],
    answer: ["if", "(", "score", ">", "10", ")", "{", "}", "else", "{", "}",],
    hint: "Use else after the if block.",
    example: "if (score > 10) { } else { }"
  },
  {
    step: 3,
    prompt: "Write an else if statement that checks if y is 0.",
    blocks: ["else", "if", "(", "y", "===", "0", ")", "{", "}",],
    answer: ["else", "if", "(", "y", "===", "0", ")", "{", "}",],
    hint: "else if comes after if.",
    example: "else if (y === 0) { }"
  },
  {
    step: 4,
    prompt: "Write a nested if statement that checks if a is true and b is false.",
    blocks: ["if", "(", "a", ")", "{", "if", "(", "!", "b", ")", "{", "}", "}", "}",],
    answer: ["if", "(", "a", ")", "{", "if", "(", "!", "b", ")", "{", "}", "}", "}",],
    hint: "You can nest if statements inside each other.",
    example: "if (a) { if (!b) { } }"
  }
];
