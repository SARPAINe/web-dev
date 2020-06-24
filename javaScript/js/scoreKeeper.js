var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var goalDisplay = document.querySelector("#goalDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var numInput = document.querySelector("input[type='number']");
var p = document.querySelector("p");
var winningScore = 5;
// function increase(item) {
//   item += 1;
// }
resetButton.addEventListener("click", function () {
  reset();
});

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
numInput.addEventListener("change", function () {
  goalDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
