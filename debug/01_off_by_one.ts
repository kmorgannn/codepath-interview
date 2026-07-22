/**
 * DEBUG CHALLENGE 1: Off-by-one error
 *
 * Goal: Print numbers 1 through 10.
 * Bug: Something is wrong with the loop condition — find it with the debugger!
 */

console.log("Should print 1, 2, 3, ... 10");
const output: number[] = [];
for (let i = 1; i < 10; i++) {
  output.push(i);
}
console.log(output.join(" "));