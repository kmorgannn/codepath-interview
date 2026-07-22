/**
 * Lesson 1: Classic for loop with a counter
 *
 * Set a breakpoint on a console.log line and press F5 to step through.
 * Watch how `i` goes from 0 to 4.
 */

console.log("=== Counting 0 to 4 ===");
for (let counter = 0; counter < 5; counter++) {
  console.log(`  counter = ${counter}`);
}

console.log("\n=== Counting 1 to 5 ===");
for (let i = 1; i <= 5; i++) {
  console.log(`  i = ${i}`);
}

console.log("\n=== Counting by 2s: 0, 2, 4, 6, 8 ===");
for (let i = 0; i < 10; i += 2) {
  console.log(`  i = ${i}`);
}
