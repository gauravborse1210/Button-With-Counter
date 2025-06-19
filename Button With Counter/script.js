const btn = document.querySelector(".counter-btn");
const display = document.querySelector(".display");

let counter = 0;
btn.addEventListener("click", function () {
  counter++;
  display.textContent = counter;
});
