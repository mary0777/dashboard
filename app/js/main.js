$(function () {
  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });
});