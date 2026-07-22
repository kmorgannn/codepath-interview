# Loops — Teaching & Debug Demo (TypeScript)

A hands-on project for teaching loops in TypeScript (`for`, `while`, and `do...while`). Each file is a small, runnable example you can step through with the debugger.

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
| `examples/` | Clean, working examples — teach concepts in order (01 → 07) |
| `debug/` | Intentionally buggy code — practice finding and fixing loop mistakes |
| `exercises/` | Starter code for students to complete |

## Example progression

1. **`01_basic_for_loop.ts`** — classic `for` loop with a counter (`i++`)
2. **`02_iterate_array.ts`** — looping through an array
4. **`03_nested_loops.ts`** — loops inside loops
6. **`04_basic_while.ts`** — `while` loops (condition checked before each iteration)
7. **`05_do_while.ts`** — `do...while` loops (body runs at least once)

## TypeScript loop styles covered

| Style | When to use |
|-------|-------------|
| `for (let i = 0; i < n; i++)` | When you need a counter or index |
| `for (const item of array)` | When you only need each value |
| `for (const [i, item] of array.entries())` | When you need index and value |
| `while (condition) { ... }` | When you don't know how many iterations ahead of time |
| `do { ... } while (condition)` | When the body must run at least once |

## Debugging tips for teaching

- **Watch variables**: Add `i`, `item`, or `total` to the Watch panel while paused
- **Loop variable**: Pause on the loop line and step once — show how `i` or `item` changes each iteration
- **Off-by-one**: Compare `i < 5` vs `i <= 5` in the debugger
- **Common bugs** in `debug/`: wrong loop bounds, modifying an array while iterating, shadowing the loop variable

## Run without debugging

```bash
npx tsx examples/01_basic_for_loop.ts
npx tsx debug/01_off_by_one.ts
```
