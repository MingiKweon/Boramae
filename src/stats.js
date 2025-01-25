const $outer = document.querySelector(".stats-outer");
const $inner = document.querySelector(".stats-inner");
const $inner_items = document.querySelectorAll(".stats-item");
let currentIndex = 0;

$inner_items.forEach((inner_item) => {
  inner_item.style.width = `${$outer.clientWidth}`;
});

$inner.style.width = `${$outer.clientWidth * $inner_items.length}`;

const $prev_btn = document.querySelector(".prev_btn");
const $next_btn = document.querySelector("next_btn");

$prev_btn.addEventListener("click", () => {
  console.log("TEST");
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex;
  $inner.style.marginLeft = `-${$outer.clientWidth * currentIndex}px`;
});

$next_btn.addEventListener("click", () => {
  currentIndex++;
  currentIndex =
    currentIndex >= $inner_items.length
      ? $inner_items.length - 1
      : currentIndex;
  $inner.style.marginLeft = `-${$outer.clientWidth * currentIndex}px`;
});
