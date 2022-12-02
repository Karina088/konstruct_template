'use strict';

document.querySelectorAll('.service-item')
  .forEach((el) =>
    el.addEventListener('click', (e) => {
      e.target.style.cssText = `color: #00A4E5;
        box-shadow: 0px 0px 37px 0px rgba(176, 176, 176, 0.3);`;
    }));

const serviceButEl = document.querySelector('.service__button');
serviceButEl.addEventListener('mouseover', (e) => {
  serviceButEl.classList.add('animate_btn');
  serviceButEl.style.visibility = 'visible';
});
serviceButEl.addEventListener('mouseout', (e) => {
  serviceButEl.classList.remove('animate_btn');
  serviceButEl.style.visibility = '!visible';
});


/*
// работает, если кнопку service__button обернуть div'ом'
const servisDivEl = document.querySelector('.service__button');
servisDivEl.addEventListener('mouseover', handler('add'));
servisDivEl.addEventListener('mouseout', handler('remove'));
function handler(method) {
  return function (event) {
    if (!event.target.classList.contains('service__button')) {
      return;
    }
    let target = event.target;
    do {
      target.classList[method]('animate_btn');
      target = target.previousElementSibling;
    } while (target);
  }
}
*/

// const serviceButEl = document.querySelector('.service__button');
// serviceButEl.addEventListener('mouseover', (e) => {
//     let target = e.target;
//     target.style.backgroundColor = ' rgba(19, 110, 73, 1)';
// });

// serviceButEl.addEventListener('mouseout', (e) => {
//     e.target.style.backgroundColor = '';
// });
