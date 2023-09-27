"use strict";

const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {

  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  console.log(currentActive);

  update();
});

prev.addEventListener("click", () => {

  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);

  update();
});


function update() {

  circles.forEach((circle, i) => {

    if (i < currentActive) {
      circle.classList.add("active");
    }
    else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  const progressBar = (((actives.length - 1) / (circles.length - 1)) * 100);

  progress.style.width = progressBar + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  }
  else if (currentActive === circles.length) {
    next.disabled = true;
  }
  else {
    next.disabled = false;
    prev.disabled = false;
  }
}