'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

const handlColor = () => {
  let coloreCode = getRandomHexColor();

  refs.colorValue.textContent = coloreCode;
  refs.body.style.backgroundColor = coloreCode;
};

refs.btn.addEventListener('click', handlColor);
