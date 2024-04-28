const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuOpened = document.querySelector('.menu--opened');
const modal = document.querySelector('.modal');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuOpened.classList.toggle('modal');
} );

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuOpened.classList.remove('modal');
} );