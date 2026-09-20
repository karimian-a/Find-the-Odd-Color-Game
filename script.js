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
const highScoreEl = document.querySelector(".highe-score");
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
let currentLevel = 0.5;
function showDarkerColor() {
  randomSquare = Math.floor(Math.random() * coloredSquares.length);
  coloredSquares[randomSquare].style.opacity = currentLevel;
}
showDarkerColor();

let currentScore = 0;
let highScore = 0;

function selectTrueSquares() {
  coloredSquares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (index === randomSquare) {
        showRandomColor();

        coloredSquares[randomSquare].style.opacity = "1";
        showDarkerColor();

        currentScore++;
        scoreEl.textContent = currentScore;

        if (currentScore > highScore) {
          highScore++;
          highScoreEl.textContent = highScore;

          localStorage.setItem("highScore", highScore);
        }

        difficultyLevel(currentScore);

        return;
      } else {
        losingScreen.classList.remove("hidden");
      }
    });
  });
}
selectTrueSquares();
const savedhighScore = localStorage.getItem("highScore");
highScore = savedhighScore !== null ? Number(savedhighScore) : 0;
highScoreEl.textContent = highScore;

playAgain.addEventListener("click", () => {
  losingScreen.classList.add("hidden");

  showRandomColor();

  coloredSquares[randomSquare].style.opacity = "1";
  showDarkerColor();

  currentScore = 0;
  scoreEl.textContent = currentScore;
});

function difficultyLevel(score) {
  if (score >= 4) currentLevel = 0.55;
  if (score >= 9) currentLevel = 0.6;
  if (score >= 14) currentLevel = 0.65;
  if (score >= 24) currentLevel = 0.7;
  if (score >= 29) currentLevel = 0.75;
  if (score >= 34) currentLevel = 0.8;
  if (score >= 39) currentLevel = 0.85;
  if (score >= 44) currentLevel = 0.9;
  if (score >= 49) currentLevel = 0.95;
}
