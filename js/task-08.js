'use strict';

const form = document.querySelector('.login-form');

const handlSubmit = e => {
  e.preventDefault();
  const { email, password } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Всі поля мають бути заповнені!');
  }
  console.log(`email: ${email.value}, password: ${password.value}`);
  e.currentTarget.reset();
};

form.addEventListener('submit', handlSubmit);
