"use strict";

const btn = document.querySelector(".btn");

const newBg = function () {
  const randomClr = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomClr;
  return randomClr;
};

btn.addEventListener("click", newBg);
