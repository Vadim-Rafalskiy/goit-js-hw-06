'use strict';

const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const handlInput = e => {
  refs.text.style.fontSize = `${e.target.value}px`;
};

refs.input.addEventListener('input', handlInput);
