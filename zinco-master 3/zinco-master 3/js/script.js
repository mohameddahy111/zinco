let nav = document.querySelector('#nav');
let navLink = document.querySelectorAll('.nav-link');
let logImg = document.getElementById('logImg');
let navIcone = document.querySelectorAll('.navIcone a i');
let heroLink = document.getElementById('heroLink');
let showMore = document.getElementById('showMore');
let drowpList = document.getElementById('drowpList');
let dropdownMenu2 = document.getElementById('dropdownMenu2');
let prodects = document.querySelectorAll('.swiper-slide img');
let siwper = document.querySelectorAll('.swiper-container');
// let swiperArray = Array(siwper);

console.log('====================================');
// console.log(swiperArray);
console.log('====================================');

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
    dropdownMenu2.classList.replace('text-white', 'text-black');
  } else {
    nav.classList.remove('bg-white', 'bg-opacity-75');
    navLink.forEach(e => {
      e.classList.replace('text-black', 'text-white');
    });
    logImg.src = 'img/Component 33 – 1.png';
    navIcone.forEach(e => {
      e.style.color = '#fff';
    });
    dropdownMenu2.classList.replace('text-black', 'text-white');
  }
};

const showMoreItems = () => {
  location.href = '/html/shop.html';
};
showMore.addEventListener('click', showMoreItems);
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
  if (windowWidth <= 700) {
    return (direction = 1);
  }
  if (windowWidth <= 800) {
    return (direction = 2);
  }
  if (windowWidth >= 800) {
    return (direction = 5);
  }
  // var direction = windowWidth <= 700 ? 1 :5;

  return direction;
}
  siwper.forEach((x, index) => {
    new Swiper(`.mySwiper-${index}`, {
      slidesPerView: getSlideNumber(),
      centeredSlides: false,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: `#next-${index}`,
        prevEl: `#prev-${index}`,
      },
    });
  });
