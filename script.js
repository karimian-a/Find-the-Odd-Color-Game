"use strict";

// -----> Color data <---------------
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

// -----> Select elements <---------------
const coloredSquares = document.querySelectorAll(".colored-square");
const scoreEl = document.querySelector(".current-score");
const highScoreEl = document.querySelector(".high-score");
const losingScreen = document.querySelector(".losing-screen");
const playAgain = document.querySelector(".losing-screen button");

// -----> Randomly change and show color of the squares <---------------
function showRandomColor() {
  const randomColor = Math.floor(Math.random() * colors.length);

  coloredSquares.forEach((square) => {
    square.style.backgroundColor = colors[randomColor];
  });
}
showRandomColor();

// -----> Randomly darken square <---------------
let randomSquare;
let currentLevel = 0.5;
function showDarkerColor() {
  randomSquare = Math.floor(Math.random() * coloredSquares.length);
  coloredSquares[randomSquare].style.opacity = currentLevel;
}
showDarkerColor();

// -----> Current score and record <---------------
let currentScore = 0;
let highScore = 0;

// -----> Play round of game <---------------
function playRound() {
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
playRound();

// -----> Retriev high score from browser's local storage <---------------
const savedhighScore = localStorage.getItem("highScore");
highScore = savedhighScore !== null ? Number(savedhighScore) : 0;
highScoreEl.textContent = highScore;

// -----> Play again <---------------
playAgain.addEventListener("click", () => {
  losingScreen.classList.add("hidden");

  showRandomColor();

  coloredSquares[randomSquare].style.opacity = "1";
  currentLevel = 0.5;
  showDarkerColor();

  currentScore = 0;
  scoreEl.textContent = currentScore;
});

// -----> Difficulty Level <---------------
function difficultyLevel(score) {
  currentLevel = Math.min(0.95, 0.5 + score * 0.009);
}
