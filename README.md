# JavaScript Mastery Roadmap

A structured path from fundamentals to advanced concepts. Each stage builds on the last — don't skip around.

---

## Stage 1: Core Syntax & Fundamentals
**Goal:** Comfortable writing basic programs without looking things up constantly.

- [ ] Variables: `var` vs `let` vs `const`, and why `var` is mostly avoided now
- [ ] Data types: strings, numbers, booleans, `null`, `undefined`, `symbol`, `bigint`
- [ ] Operators, including `==` vs `===` and why you should default to `===`
- [ ] Control flow: `if/else`, `switch`, ternaries
- [ ] Loops: `for`, `while`, `for...of`, `for...in`
- [ ] Functions: declarations vs expressions vs arrow functions
- [ ] Template literals and string methods
- [ ] Arrays and array methods: `map`, `filter`, `reduce`, `forEach`, `find`, `some`/`every`
- [ ] Objects: property access, `this` basics, object methods

**Checkpoint:** Build small scripts — a temperature converter, a to-do list logic (no UI yet), FizzBuzz variants.

---

## Stage 2: Scope, Closures & Functions Deep Dive
**Goal:** Understand *why* JS behaves the way it does under the hood.

- [ ] Function vs block scope (`var` vs `let`/`const` scoping)
- [ ] Closures — what they are, why they matter, common use cases (private state, memoization)
- [ ] The `this` keyword: how it's determined by call-site, not definition
- [ ] `call`, `apply`, `bind`
- [ ] Arrow functions and lexical `this`
- [ ] IIFEs (Immediately Invoked Function Expressions)
- [ ] Higher-order functions and function composition
- [ ] Default parameters, rest/spread syntax

**Checkpoint:** Write a debounce/throttle function from scratch. Explain closures out loud without notes.

---

## Stage 3: Objects, Prototypes & OOP
**Goal:** Understand JS's actual object model, not just class syntax sugar.

- [ ] Prototypal inheritance — the prototype chain
- [ ] `Object.create`, `__proto__` vs `prototype`
- [ ] Constructor functions vs `class` syntax (what `class` compiles down to)
- [ ] `class` fields, getters/setters, static methods
- [ ] Inheritance with `extends` and `super`
- [ ] `Object` methods: `Object.keys/values/entries`, `Object.freeze`, `Object.assign`
- [ ] Encapsulation patterns (private fields with `#`)

**Checkpoint:** Implement a small class hierarchy (e.g. `Shape` → `Circle`/`Rectangle`) two ways: with prototypes directly, then with `class`.

---

## Stage 4: Asynchronous JavaScript
**Goal:** This is where most intermediate devs plateau — don't rush it.

- [ ] The event loop, call stack, microtask vs macrotask queue
- [ ] Callbacks and callback hell
- [ ] Promises: creation, chaining, `.then/.catch/.finally`
- [ ] `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`
- [ ] `async`/`await` — and how it desugars to promises
- [ ] Error handling in async code (`try/catch` with `await`)
- [ ] `setTimeout`/`setInterval` mechanics
- [ ] Fetch API and working with real network requests

**Checkpoint:** Build a small app that fetches data from a public API, handles loading/error states, and chains multiple dependent requests.

---

## Stage 5: The DOM & Browser Environment
**Goal:** Apply your JS to real interactive pages (skip if you're going backend-only).

- [ ] DOM selection and traversal
- [ ] Event handling, event delegation, event bubbling/capturing
- [ ] Creating/modifying/removing elements dynamically
- [ ] Forms and validation
- [ ] `localStorage`/`sessionStorage`
- [ ] Browser APIs: `fetch`, `IntersectionObserver`, `history`

**Checkpoint:** Build a small interactive app with no framework — a filterable list, a modal, a form with live validation.

---

## Stage 6: Modules, Tooling & Modern JS
**Goal:** Work like a professional in a modern codebase.

- [ ] ES Modules: `import`/`export`, default vs named exports
- [ ] CommonJS vs ESM (and why it matters in Node)
- [ ] npm/package.json basics
- [ ] Bundlers/transpilers at a conceptual level (Vite, esbuild, Babel — what problem each solves)
- [ ] Destructuring (deep dive, not just basics)
- [ ] Optional chaining (`?.`) and nullish coalescing (`??`)
- [ ] Iterators and generators (`function*`, `yield`)
- [ ] `Map`, `Set`, `WeakMap`, `WeakSet`

**Checkpoint:** Convert a script-tag project into a proper module-based project with npm.

---

## Stage 7: Advanced & Interview-Level Topics
**Goal:** The stuff that separates "knows JS" from "actually knows JS."

- [ ] Execution context and the call stack in detail
- [ ] Hoisting — for `var`, function declarations, and the "temporal dead zone" for `let`/`const`
- [ ] Currying and partial application
- [ ] The module pattern vs revealing module pattern
- [ ] Memory management basics: garbage collection, memory leaks (closures holding references)
- [ ] Proxy and Reflect
- [ ] Symbols and well-known symbols (`Symbol.iterator`)
- [ ] Tagged template literals
- [ ] Common coercion gotchas (`==` rules, `+` operator on mixed types)
- [ ] Big-picture patterns: pub/sub, observer, singleton in JS

**Checkpoint:** Do timed coding challenges (LeetCode/JS-specific quizzes) and mock interview questions. Explain the event loop and closures without hesitation.

---

## Suggested Pace
- [ ] **Stages 1–2:** 2–3 weeks if new to programming, faster if you have experience elsewhere
- [ ] **Stages 3–4:** 3–4 weeks — async is the biggest sticking point, budget extra time
- [ ] **Stages 5–6:** 2–3 weeks, can run in parallel with a real project
- [ ] **Stage 7:** Ongoing — revisit periodically, especially before interviews

## How to Actually Practice
- Build small real projects at every stage rather than only doing isolated exercises
- After each stage, try to explain the concept to someone else (or write it down) without references
- Read others' code — browse well-written open-source JS repos
- Get quizzed periodically (like we just did) to catch gaps you don't know you have