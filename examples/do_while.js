/**
 * do...while loop — run body first, then check condition
 *
 * The body always runs AT LEAST ONCE, even if the condition is false.
 * Compare this to `while`, which may skip the body entirely.
 *
 * Breakpoint tip: step through the "zero attempts" example below
 * and notice the do...while body still runs once.
 */

console.log("=== do...while: ask at least once ===");
let attempts = 0;

do {
  attempts++;
  console.log(`  Attempt #${attempts}: Trying to connect...`);
} while (attempts < 3);

console.log("\n=== while vs do...while when condition starts false ===");

let score = 100;

console.log("while (score < 50) — body NEVER runs:");
while (score < 50) {
  console.log("  This line won't print");
}

console.log("\ndo...while (score < 50) — body runs ONCE anyway:");
do {
  console.log("  This line prints once, even though 100 < 50 is false");
} while (score < 50);

console.log("\n=== Roll until we get a 6 (simulated dice) ===");
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let roll;
do {
  roll = rollDice();
  console.log(`  Rolled: ${roll}`);
} while (roll !== 6);

console.log("  Got a 6!");
