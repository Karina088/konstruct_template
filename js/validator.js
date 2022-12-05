'use strict';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const inputEl = document.querySelector('input');

function onInput() {
    if (isEmailValid(inputEl.value)) {
        inputEl.style.borderColor = 'green';
    } else {
        inputEl.style.borderColor = 'red';
    }
}

inputEl.addEventListener('input', onInput);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}