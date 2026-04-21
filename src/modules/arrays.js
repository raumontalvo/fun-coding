export const arraysModule = [
  {
    step: 1,
    prompt: "Create an empty array named nums.",
    blocks: ["let", "nums", "=", "[", "]", ";"],
    answer: ["let", "nums", "=", "[", "]", ";"],
    hint: "Use square brackets for arrays.",
    example: "let nums = []; // empty array"
  },
  {
    step: 2,
    prompt: "Add 10 to the nums array.",
    blocks: ["nums", ".", "push", "(", "10", ")", ";"],
    answer: ["nums", ".", "push", "(", "10", ")", ";"],
    hint: "Use the push method.",
    example: "nums.push(10); // adds 10 to array"
  },
  {
    step: 3,
    prompt: "Access the first element of nums.",
    blocks: ["nums", "[", "0", "]", ";"],
    answer: ["nums", "[", "0", "]", ";"],
    hint: "Array indices start at 0.",
    example: "nums[0];"
  },
  {
    step: 4,
    prompt: "Update the first element of nums to 20.",
    blocks: ["nums", "[", "0", "]", "=", "20", ";"],
    answer: ["nums", "[", "0", "]", "=", "20", ";"],
    hint: "Use the assignment operator to update.",
    example: "nums[0] = 20;"
  },
  {
    step: 5,
    prompt: "Get the length of nums.",
    blocks: ["nums", ".", "length", ";"],
    answer: ["nums", ".", "length", ";"],
    hint: "Use the .length property.",
    example: "nums.length;"
  },
  {
    step: 6,
    prompt: "Remove the last element from nums.",
    blocks: ["nums", ".", "pop", "(", ")", ";"],
    answer: ["nums", ".", "pop", "(", ")", ";"],
    hint: "Use the pop method.",
    example: "nums.pop();"
  }
];
