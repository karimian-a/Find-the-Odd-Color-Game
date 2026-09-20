"use strict";

const colors = [
  "#ffbe0b",
  "#fb5607",
  "#e71d36",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
  "#62c2b1",
  "#16db65",
];

const coloredSquares = document.querySelectorAll(".colored-square");
const scoreEl = document.querySelector(".score");
const higheScoreEl = document.querySelector(".highe-score");
const losingScreen = document.querySelector(".losing-screen");
const playAgain = document.querySelector(".losing-screen button");

function showRandomColor() {
  const randomColor = Math.floor(Math.random() * colors.length);

  coloredSquares.forEach((square) => {
    square.style.backgroundColor = colors[randomColor];
  });
}
showRandomColor();

let randomSquare;
function showDarkerColor() {
  randomSquare = Math.floor(Math.random() * coloredSquares.length);
  coloredSquares[randomSquare].style.opacity = "0.7";
}
showDarkerColor();

let currentScore = 0;
let record = 0;

function selectTrueSquares() {
  coloredSquares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (index === randomSquare) {
        showRandomColor();

        coloredSquares[randomSquare].style.opacity = "1";
        showDarkerColor();

        currentScore++;
        scoreEl.textContent = currentScore;

        if (currentScore > record) {
          record++;
          higheScoreEl.textContent = record;
        }

        return;
      } else {
        losingScreen.classList.remove("hidden");
      }
    });
  });
}
selectTrueSquares();

playAgain.addEventListener("click", () => {
  losingScreen.classList.add("hidden");

  showRandomColor();

  coloredSquares[randomSquare].style.opacity = "1";
  showDarkerColor();

  currentScore = 0;
  scoreEl.textContent = currentScore;
});
