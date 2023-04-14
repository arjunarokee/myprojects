let count = 0;
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});
