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
  coloredSquares[randomSquare].style.opacity = "0.6";
}
showDarkerColor();

function selectTrueSquares() {
  coloredSquares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (index === randomSquare) {
        showRandomColor();
        coloredSquares[randomSquare].style.opacity = "1";
        showDarkerColor();
        return;
      }
    });
  });
}
selectTrueSquares();
