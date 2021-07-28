const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const closeIcon1 = document.querySelector('.menu-icon1');
const closeIcon2 = document.querySelector('.menu-icon2');
const openPopupButtons = document.querySelectorAll(".popup-btn");
const closeButton = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeIcon1.classList.toggle('d-none');
  closeIcon2.classList.toggle('d-none');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    closeIcon1.classList.toggle('d-none');
    closeIcon2.classList.toggle('d-none');
  });
});

openPopupButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
document.querySelector('.popup-bg').style.display = "flex";
  });
});

closeButton.addEventListener('click', () =>{
  document.querySelector(".popup-bg").style.display = "none";
})