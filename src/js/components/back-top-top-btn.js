import getRefs from '../refecences/get-refs';
import throttle from 'lodash.throttle';

const refs = getRefs();
const breakpoint = 200;

window.addEventListener('scroll', throttle(onWindowScroll, 250));
refs.backToTopButton.addEventListener('click', onBackToTopBtnClick);

function onWindowScroll(evt) {
  const currentPageYOffset = window.pageYOffset;

  if (currentPageYOffset > breakpoint) {
    showBackToTopBtn();
  } else {
    hideBackToTopBtn();
  }
}

function onBackToTopBtnClick(evt) {
  window.scrollTo({
    top: -document.body.offsetHeight,
    behavior: 'smooth',
  });
}

function showBackToTopBtn() {
  refs.backToTopButton.classList.remove('back-to-top-btn--hidden');
}

function hideBackToTopBtn() {
  refs.backToTopButton.classList.add('back-to-top-btn--hidden');
}

/*
 * Internet version "Back To Top Button"
 */

// import getRefs from '../refecences/get-refs';
// import throttle from 'lodash.throttle';

// const refs = getRefs();
// const breakpoint = 300;

// window.addEventListener('scroll', throttle(onWindowScroll, 500));
// refs.backToTopButton.addEventListener('click', onBackToTopBtnClick);

// function onWindowScroll(evt) {
//   if (window.scrollY > breakpoint) {
//     showBackToTopBtn();
//   } else {
//     hideBackToTopBtn();
//   }
// }

// function onBackToTopBtnClick(evt) {
//   evt.preventDefault();

//   document.documentElement.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   }); // For Chrome, Firefox, IE and Opera
//   document.body.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }

// function showBackToTopBtn() {
//   refs.backToTopButton.classList.remove('back-to-top-btn--hidden');
// }

// function hideBackToTopBtn() {
//   refs.backToTopButton.classList.add('back-to-top-btn--hidden');
// }
