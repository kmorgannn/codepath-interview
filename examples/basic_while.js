/**
 * while loop — check condition, then run body
 *
 * The condition is checked BEFORE each iteration.
 * If it's false on the first check, the body never runs.
 *
 * Breakpoint tip: set one on the console.log inside the loop
 * and watch `count` change. Step Over the closing brace to
 * see the condition re-evaluated.
 */

console.log("=== Count up with while ===");
let count = 0;
while (count < 5) {
  console.log(`  count = ${count}`);
  count++;
}

console.log("\n=== Countdown ===");
let rockets = 5;
while (rockets > 0) {
  console.log(`  ${rockets}...`);
  rockets--;
}
console.log("  Liftoff! 🚀");

console.log("\n=== while with a boolean flag ===");
let found = false;
let index = 0;
const names = ["Alice", "Bob", "Carol"];

while (!found && index < names.length) {
  console.log(`  Checking names[${index}] = ${names[index]}`);
  if (names[index] === "Bob") {
    found = true;
    console.log("  Found Bob!");
  }
  index++;
}
