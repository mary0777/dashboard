document.addEventListener('DOMContentLoaded', () => {

  const burgerOpen = document.querySelector('.burger--open');
  const burgerClose = document.querySelector('.burger--close');
  const mobileMenu = document.querySelector('.sidebar');
  const bodyLock = document.querySelector('body');


  burgerOpen.addEventListener('click', function (e) {
    mobileMenu.classList.add('sidebar--active');
    burgerClose.classList.add('burger--active');
    bodyLock.classList.add('lock');
  });

  burgerClose.addEventListener('click', function (e) {
    mobileMenu.classList.remove('sidebar--active');
    burgerClose.classList.remove('burger--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('lock')) {
      burgerClose.classList.remove('burger--active');
      mobileMenu.classList.remove('sidebar--active');
      bodyLock.classList.remove('lock');
    }
  });
});

$(function () {
  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
    $('.burger--close').removeClass('burger--active');
    $('.sidebar').removeClass('sidebar--active');
    $('body').removeClass('lock');
  });
});


