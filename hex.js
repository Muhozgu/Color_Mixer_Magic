const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", generateRandomColor);

function generateRandomColor() {
  const hexColor = generateHexColor();
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function generateHexColor() {
  const hexChars = "0123456789ABCDEF";
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hexChars.charAt(getRandomNumber(hexChars.length));
  }

  return hexColor;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

