export const loopsModule = [
  {
    step: 1,
    prompt: "Write a for loop that counts from 0 to 2.",
    blocks: ["for", "(", "let", "i", "=", "0", ";", "i", "<", "3", ";", "i++", ")", "{", "}",],
    answer: ["for", "(", "let", "i", "=", "0", ";", "i", "<", "3", ";", "i++", ")", "{", "}",],
    hint: "Remember the loop structure.",
    example: "for (let i = 0; i < 3; i++) { }"
  },
  {
    step: 2,
    prompt: "Write a while loop that runs while x is less than 5.",
    blocks: ["while", "(", "x", "<", "5", ")", "{", "}",],
    answer: ["while", "(", "x", "<", "5", ")", "{", "}",],
    hint: "Use the while keyword and a condition.",
    example: "while (x < 5) { }"
  },
  {
    step: 3,
    prompt: "Break out of a loop if y is 10.",
    blocks: ["if", "(", "y", "===", "10", ")", "break", ";"],
    answer: ["if", "(", "y", "===", "10", ")", "break", ";"],
    hint: "Use break inside a loop.",
    example: "if (y === 10) break;"
  },
  {
    step: 4,
    prompt: "Sum all numbers in an array nums using a for loop.",
    blocks: ["let", "sum", "=", "0", ";", "for", "(", "let", "i", "=", "0", ";", "i", "<", "nums", ".", "length", ";", "i++", ")", "{", "sum", "+=", "nums", "[", "i", "]", ";", "}",],
    answer: ["let", "sum", "=", "0", ";", "for", "(", "let", "i", "=", "0", ";", "i", "<", "nums", ".", "length", ";", "i++", ")", "{", "sum", "+=", "nums", "[", "i", "]", ";", "}",],
    hint: "Use a for loop and array indexing.",
    example: "let sum = 0; for (let i = 0; i < nums.length; i++) { sum += nums[i]; }"
  }
];
