let nav = document.querySelector('#nav');
let navLink = document.querySelectorAll('.nav-link');
let logImg = document.getElementById('logImg');
let navIcone = document.querySelectorAll('.navIcone a i');
let heroLink = document.getElementById('heroLink');
let showMore = document.getElementById('showMore');
let drowpList = document.getElementById('drowpList');
let dropdownMenu2 = document.getElementById('dropdownMenu2');
let prodects = document.querySelectorAll('.swiper-slide img');

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
    dropdownMenu2.classList.replace('text-white' , 'text-black')
  } else {
    nav.classList.remove('bg-white', 'bg-opacity-75');
    navLink.forEach(e => {
      e.classList.replace('text-black', 'text-white');
    });
    logImg.src = 'img/Component 33 – 1.png';
    navIcone.forEach(e => {
      e.style.color = '#fff';
    });
    dropdownMenu2.classList.replace(  'text-black' , 'text-white')

  }
};

const showMoreItems=()=>{
  location.href = '/html/shop.html';


}
showMore.addEventListener('click' , showMoreItems)
const shopPage = () => {
  location.href = '/html/singlProdect.html';
};
prodects.forEach(e => {
  e.addEventListener('click', shopPage);
});
const openList = () => {
  drowpList.classList.remove('d-none');
};
heroLink.addEventListener('click', openList);
const closMenu = () => {
  drowpList.classList.add('d-none');
};
drowpList.addEventListener('mouseleave', closMenu);
const chengeLogo = () => {
  logImg.src = 'img/Zinco logo.png';
};
const rechengeLogo = () => {
  logImg.src = 'img/Component 33 – 1.png';
};

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
