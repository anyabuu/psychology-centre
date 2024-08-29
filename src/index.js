import './scss/style.scss';

document.addEventListener('DOMContentLoaded', (event) => {

  const accordions = document.querySelectorAll('.questions__item');

  accordions.forEach(function(item){
    item.addEventListener('click', function() {
      if (this.classList.contains('show')) {
        this.classList.remove('show');
      } else {
        accordions.forEach(function (subItem) {
          subItem.classList.remove('show');
        })

        this.classList.add('show');
      }
    })
  });
});

const menuBtn = document.querySelector('.header__menu-bar');
const menu = document.querySelector('.header__burger');

document.addEventListener('DOMContentLoaded', (event) => {
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }
})






