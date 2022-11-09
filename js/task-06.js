'use strict';

const refs = {
  input: document.querySelector('#validation-input'),
};

const render = arg => {
  refs.input.classList.add(arg);
};

const handlInput = () => {
  if (Number(refs.input.dataset.length) === refs.input.value.length) {
    refs.input.classList.remove('invalid');
    render('valid');
    return;
  }
  refs.input.classList.remove('valid');
  render('invalid');
};
refs.input.addEventListener('blur', handlInput);
