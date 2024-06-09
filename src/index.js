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


})
