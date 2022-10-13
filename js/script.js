let nav = document.querySelector('#nav');
let navLink = document.querySelectorAll('.nav-link');
let logImg = document.getElementById('logImg');
let navIcone = document.querySelectorAll('.navIcone a i');
let heroLink = document.getElementById('heroLink');
let drowpList = document.getElementById('drowpList');

window.onscroll = () => {
  if (scrollY > 300) {
    nav.classList.add('bg-white', 'bg-opacity-75');
    navLink.forEach(e => {
      e.classList.replace('text-white', 'text-black');
    });
    logImg.src = 'img/Zinco logo.png';
    navIcone.forEach(e => {
      e.style.color = '#000';
    });
  } 
  else {
    nav.classList.remove('bg-white', 'bg-opacity-75');
    navLink.forEach(e => {
      e.classList.replace('text-black', 'text-white');
    });
    logImg.src = 'img/Component 33 – 1.png';
    navIcone.forEach(e => {
      e.style.color = '#fff';
    });
  }
};

const openList = () => {
  drowpList.classList.remove('d-none');
};
heroLink.addEventListener('click', openList);
const closMenu = () => {
  drowpList.classList.add('d-none');
};
drowpList.addEventListener('mouseleave', closMenu);
const chengeLogo=()=>{
  logImg.src = 'img/Zinco logo.png';
}
const rechengeLogo=()=>{
  logImg.src = 'img/Component 33 – 1.png';


}

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
