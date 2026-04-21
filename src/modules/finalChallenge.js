export const finalChallengeModule = [
  {
    step: 1,
    prompt: "Declare a variable x and assign it 5.",
    blocks: ["let", "x", "=", "5", ";"],
    answer: ["let", "x", "=", "5", ";"],
    hint: "Start with a variable declaration.",
    example: "let x = 5;"
  },
  {
    step: 2,
    prompt: "Create an empty array nums.",
    blocks: ["let", "nums", "=", "[", "]", ";"],
    answer: ["let", "nums", "=", "[", "]", ";"],
    hint: "Use square brackets for arrays.",
    example: "let nums = [];"
  },
  {
    step: 3,
    prompt: "Write a function addNum that adds x to nums.",
    blocks: ["function", "addNum", "()", "{", "nums", ".", "push", "(", "x", ")", ";", "}"],
    answer: ["function", "addNum", "()", "{", "nums", ".", "push", "(", "x", ")", ";", "}"],
    hint: "Combine function and array methods.",
    example: "function addNum() { nums.push(x); }"
  },
  {
    step: 4,
    prompt: "Call addNum to add x to nums.",
    blocks: ["addNum", "()", ";"],
    answer: ["addNum", "()", ";"],
    hint: "Call the function you just wrote.",
    example: "addNum();"
  },
  {
    step: 5,
    prompt: "Write a for loop to print all elements in nums.",
    blocks: ["for", "(", "let", "i", "=", "0", ";", "i", "<", "nums", ".", "length", ";", "i++", ")", "{", "console", ".", "log", "(", "nums", "[", "i", "]", ")", ";", "}"],
    answer: ["for", "(", "let", "i", "=", "0", ";", "i", "<", "nums", ".", "length", ";", "i++", ")", "{", "console", ".", "log", "(", "nums", "[", "i", "]", ")", ";", "}"],
    hint: "Use a for loop and console.log.",
    example: "for (let i = 0; i < nums.length; i++) { console.log(nums[i]); }"
  }
];
