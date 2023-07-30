// import Swiper JS
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Autoplay, Pagination],
  
  direction: 'horizontal',
  loop: true,
  speed: 500,
  spaceBetween: 10,
  slidesPerView: 1,

  autoplay: {
    delay: 1100,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    450: {
      loop: false,
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});
