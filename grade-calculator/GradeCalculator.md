#

> Take a set of test scores, compute an average, and assign a letter grade.

### Concepts

- `const` for the scores array, let for the running total
- `if/else` chain or ternary for letter grade cutoffs
- `for...of` to loop through scores and sum them
- `===` when checking exact score matches (e.g. "did anyone get exactly 100")



### Step 1 : HTML Code

```html
  <form id="grade-form">
    <label>Score 1: <input type="number" id="score1"></label><br>
    <label>Score 2: <input type="number" id="score2"></label><br>
    <label>Score 3: <input type="number" id="score3"></label><br>
    <button type="submit">Calculate</button>
  </form>
```

- the input ids is used to access the value in JavaScript
- `type="number"` restricts what the user can type
    - the value JS reads from it still comes through as a string, not a number
- the `<form>` with `type="submit"` on the button rather than a plain `<button>`
    - submitting will try to reload the page, and JS must be used to stop it


### Step 2: JavaScript - Grabbing the values with JS

```js
const form = document.getElementById("grade-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const score1 = document.getElementById("score1").value;
  const score2 = document.getElementById("score2").value;
  const score3 = document.getElementById("score3").value;

  console.log(score1, score2, score3);
});
```
- `const` used because the form value and scores **never gets reassigned** 
- `event.preventDefault()` stops the form from doing its default behavior
    - this allows you to safely use `type="submit"` on the button
- `.value` gives us strings
- `console.log` used to confirm getting the right values before building any logic on top of them 

#### Open the page in a browser, type in some numbers, hit Calculate, and check the console.

> what type are the scores right now, a number or a string? `console.log(typeof score1)` and see what comes back

- even though the input has `type="number"`, `.value always` returns a string

---

### Step 3 : Javascript - Storing the scores
```js
const form = document.getElementById("grade-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const score1 = document.getElementById("score1").value;
  const score2 = document.getElementById("score2").value;
  const score3 = document.getElementById("score3").value;

  const scores = [score1, score2, score3];

  console.log(scores);
});
```
**`const` is used for scores, even though `const` means "never reassigned"**

<details>
  <summary>
  Question : If `const` means "never reassigned", can you still change what's inside an array declared with const?
  </summary>
  **Yes, const only locks the variable binding**

  - const protects the reference, not the contents
  - it stops scores from being reassigned to a new array
  - the array itself is still mutable, which means you can change elements at an index
  - `scores` does not need to be mutated because it gets set once from the three inputs and then you can read from it
  - with `const` reassignment isn't possible, and here it signals to anyone reading the code that this array's identity will not change
</details>


### Step 4 : Loop and Total

```js
const form = document.getElementById("grade-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const score1 = document.getElementById("score1").value;
  const score2 = document.getElementById("score2").value;
  const score3 = document.getElementById("score3").value;

  const scores = [score1, score2, score3];

  let total = 0;
  for (const score of scores) {
    total += Number(score);
  }

  console.log(total);
});
```
- `total` is a good uses case for `let` because it needs to be reassigned
    - it starts at 0 and changes on every loop iteration
- `Number(score)`
    - `.value` gives us strings
    - `total += score` would concatenate strings `("0" + "85" + "90" + "78" → "0859078")`
    - `Number()` converts each string to an actual number before it gets added
- the loop variable `const score` in the `for...of` loop reassigns score on every pass
    - `const score` may look like it is wrong but the variable inside the loop body is only ever assigned once per iteration, so using `const` is right