/**
 * Lesson 4: Nested loops (loop inside a loop)
 *
 * The inner loop runs completely for EACH iteration of the outer loop.
 * Breakpoint on the inner console.log — count how many times it hits.
 */

console.log("=== Multiplication table (1–3) ===");
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    const product = row * col;
    console.log(`  ${row} × ${col} = ${product}`);
  }
  console.log(); // blank line after each row
}

console.log("=== Grid of coordinates ===");
for (let x = 0; x < 3; x++) {
  let row = "";
  for (let y = 0; y < 3; y++) {
    row += `  (${x}, ${y})`;
  }
  console.log(row);
}
