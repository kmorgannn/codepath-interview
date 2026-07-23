/**
 * Classic for loop with a counter
 *
 * Set a breakpoint on a console.log line and press F5 to step through.
 * Watch how the counter variable is incremented.
 */

console.log("\n=== For loop step example ===");
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

console.log("\n=== Counting 1 to 5 ===");
for (let counter = 1; counter <= 5; counter++) {
  console.log(`  counter = ${counter}`);
}

console.log("\n=== Counting by 2s: 0, 2, 4, 6, 8 ===");
for (let i = 0; i < 10; i += 2) {
  console.log(`  i = ${i}`);
}
