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