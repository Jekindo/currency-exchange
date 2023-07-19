import getRefs from './js/refecences/get-refs';

import './js/tabs'

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
