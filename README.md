# Loops — Teaching & Debug Demo (JavaScript)

A hands-on project for teaching loops in JavaScript (`for`, `while`, and `do...while`). Each file is a small, runnable example you can step through with the debugger.

## Setup

```bash
npm install
```

## Quick start

1. Open this folder in Cursor/VS Code
2. Open any file in `examples/` or `debug/`
3. Set a **breakpoint** on a line inside a loop (click the gutter)
4. Press **F5** (or Run → Start Debugging) and pick the matching config
5. Use **F10** (Step Over) and **F11** (Step Into) to watch the loop run

## What's in each folder

| Folder | Purpose |
|--------|---------|
| `examples/` | Clean, working examples |
| `debug/` | Intentionally buggy code — practice finding and fixing loop mistakes |
| `exercises/` | Starter code for students to complete |

## Example progression

1. **`basic_for_loop.js`** — classic `for` loop with a counter (`counter++`)
2. **`loops_and_conditionals.html`** — combining a `for` loop and an `if` statement to conditionally render UI elements 
3. **`iterate_array.js`** — looping through an array
4. **`nested_loops.js`** — loops inside loops
5. **`basic_while.js`** — `while` loops (condition checked before each iteration)
6. **`do_while.js`** — `do...while` loops (body runs at least once)

## JavaScript loop styles covered

| Style | When to use |
|-------|-------------|
| `for (let i = 0; i < n; i++)` | When you need a counter or index |
| `while (condition) { ... }` | When you don't know how many iterations ahead of time |
| `do { ... } while (condition)` | When the body must run at least once |

## Debugging tips for teaching

- **Watch variables**: Add `i`, `step`, `counter`, or `total` to the Watch panel while paused
- **Loop variable**: Pause on the loop line and step once — show how `step` or `counter` changes each iteration
- **Off-by-one**: Compare `i < 5` vs `i <= 5` in the debugger
- **Common bugs** in `debug/`: wrong loop bounds, missing loop variable updates

## Run without debugging

```bash
node examples/basic_for_loop.js
node debug/off_by_one.js
```
