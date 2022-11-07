'use strict';

const refs = {
  input: document.querySelector('#validation-input'),
};

const render = arg => {
  refs.input.classList.add(arg);
};

const handlInput = () => {
  if (Number(refs.input.dataset.length) === refs.input.value.length) {
    render('valid');
  } else {
    render('invalid');
  }
};
refs.input.addEventListener('blur', handlInput);
