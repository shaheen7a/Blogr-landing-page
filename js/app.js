const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".menu");
const btnHamburger = document.querySelector(".hamburger");

btnClose.addEventListener("click", menuHideShow);
btnHamburger.addEventListener("click", menuHideShow);

function menuHideShow() {
  menu.classList.toggle("menu-hide");
  btnHamburger.classList.toggle("hamburger-hide");
}