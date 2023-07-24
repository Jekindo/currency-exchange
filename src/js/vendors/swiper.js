// import Swiper JS
import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,

  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    450: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

// var swiper = new Swiper('.swiper', {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
