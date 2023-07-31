import getRefs from './js/refecences/get-refs';

import './js/lazy-images'
import './js/collapse'
import './js/tabs'
import './js/vendors/swiper'
import './js/components/back-top-top-btn'

const refs = getRefs();

refs.openMenuBtn.addEventListener('click', openMobileMenu);
refs.closeMenuBtn.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
  refs.mobileMenu.classList.add('mobile-menu--open');
  document.body.classList.add('modal-open');
}

function closeMobileMenu() {
  refs.mobileMenu.classList.remove('mobile-menu--open');
  document.body.classList.remove('modal-open');
}
