/**
 * DEBUG CHALLENGE 1: Off-by-one error
 *
 * Goal: Print numbers 1 through 10.
 * Bug: Something is wrong with the loop condition — find it with the debugger!
 */

console.log("Should print 1, 2, 3, ... 10");
const output: number[] = [];

// Fix: change to i <= 10 or i < 11
for (let i = 1; i < 10; i++) {
  // 🐛 BUG: stops at 9, not 10
  output.push(i);
}
console.log(output.join(" "));

