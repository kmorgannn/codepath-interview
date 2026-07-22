/** Solution for Exercise 1 */

const data = [4, 8, 15, 16, 23, 42];

let total = 0;
for (let index = 0; index < data.length; index++) {
  const number = data[index];
  total = total + number;
}

console.log(`Total should be 108, got: ${total}`);
