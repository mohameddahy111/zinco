function getSlideNumber() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 800 ? 1 : 4;

  return direction;
}
var swiper = new Swiper('.mySwiper', {
  
  slidesPerView: getSlideNumber(),
  centeredSlides: false,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
});

var appendNumber = 1;
var prependNumber = 1;
document
  .querySelector('.prepend-2-slides')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  });
document
  .querySelector('.prepend-slide')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  });
document.querySelector('.append-slide').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.appendSlide(
    '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
  );
});
document
  .querySelector('.append-2-slides')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  });
