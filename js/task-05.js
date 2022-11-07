'use strict';

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const render = arg => {
  refs.output.textContent = arg;
};

const handlInput = e => {
  !e.target.value ? render('Anonymous') : render(e.target.value);
};

refs.input.addEventListener('input', handlInput);
