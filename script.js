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
  const random = Math.floor(Math.random() * colors.length);
  coloredSquares.forEach(square => {
    square.style.backgroundColor = colors[random]
  });
}
showRandomColor()