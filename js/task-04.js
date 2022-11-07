'use strict';

const refs = {
  btnIncrement: document.querySelector("[data-action = 'increment']"),
  btnDecrement: document.querySelector("[data-action = 'decrement']"),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const render = () => {
  refs.value.textContent = counterValue;
};

const handlClickIncrement = () => {
  counterValue += 1;
  render();
};

const handlClickDecrement = () => {
  counterValue -= 1;
  render();
};

render();

refs.btnIncrement.addEventListener('click', handlClickIncrement);
refs.btnDecrement.addEventListener('click', handlClickDecrement);
