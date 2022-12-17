const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Displsy = document.querySelector("#p1Display");
const p2Displsy = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Displsy.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Displsy.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Displsy.textContent = 0;
  p2Displsy.textContent = 0;
}
