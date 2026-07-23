/**
 * DEBUG CHALLENGE 2: while loop never ends
 *
 * Goal: Print numbers 1 through 5.
 * Bug: The counter inside the while loop is never updated.
 *
 * ⚠️  This runs forever! Use the debugger with a breakpoint
 *     instead of running it normally.
 */

console.log("Should print 1, 2, 3, 4, 5");

let i = 1;
while (i <= 5) {
  console.log(i);
  // 🐛 BUG: forgot to increment i — i stays at 1 forever!
  // Fix: add i++ (or i = i + 1) inside the loop body
  // i++;
}

