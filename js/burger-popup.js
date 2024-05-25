'use strict'

let burgerOpen = document.querySelector('.burger-open-btn');
let burgerClose = document.querySelector('.burger-close-btn');
let menu = document.querySelector('.header__nav');
let links = document.querySelectorAll('.header__nav-item');
let fade = document.querySelector('.burger__fade');
let body = document.body;

function openBurgerMenu() {
  menu.classList.add('active');
  body.classList.add('body-lock');
  fade.classList.add('active');
}

function closeBurgerMenu() {
  menu.classList.remove('active');
  body.classList.remove('body-lock');
  fade.classList.remove('active');
}

burgerOpen.addEventListener('click', openBurgerMenu);
burgerClose.addEventListener('click', closeBurgerMenu);
fade.addEventListener('click', closeBurgerMenu);
links.forEach(link => {
    link.addEventListener('click', closeBurgerMenu);
})


//popup
//needs to be activated when second form is available

// let popup = document.querySelector('.ready-popup');
// let closePopupBtn = document.querySelector('.ready-popup__close-btn');
// let submitBtn = document.querySelector('.submit-btn');
// let submitBtn = document.querySelector('.logo');

// function openPopup() {
//   popup.classList.add('active');
//   body.classList.add('body-lock');
//   fade.classList.add('active');
// }

// function closePopup() {
//   popup.classList.remove('active');
//   body.classList.remove('body-lock');
//   fade.classList.remove('active');
// }

// submitBtn.addEventListener('click', openPopup);
// closePopupBtn.addEventListener('click', closePopup);
// fade.addEventListener('click', closePopup);