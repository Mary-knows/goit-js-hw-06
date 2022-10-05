function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bgrColorRef = document.querySelector('.color');
const btnColorRef = document.querySelector('.change-color');

btnColorRef.addEventListener('click', onClickBtn);

function onClickBtn(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  bgrColorRef.textContent = newColor;
}

