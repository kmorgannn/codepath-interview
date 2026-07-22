/**
 * Lesson 2: Looping over an array with for loops
 *
 * The loop variable takes each element's value, one at a time.
 * Breakpoint tip: watch `fruit` change on each iteration.
 */

const fruits = ["apples", "bananas", "cherries", "dates"];

console.log("=== Each fruit ===");
for (let index = 0; index < fruits.length; index++) {
  console.log(`  I like ${fruits[index]}`);
}

console.log("\n=== Only fruits with more than 6 letters ===");
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  if (fruit.length > 6) {
    console.log(`  ${fruit} has ${fruit.length} letters`);
  }
}
