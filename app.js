const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  const randomIndex = getRandomIndex();

  document.body.style.backgroundColor = colors[randomIndex];
  color.textContent = colors[randomIndex];
}

function getRandomIndex() {
  return Math.floor(Math.random() * colors.length);
}

