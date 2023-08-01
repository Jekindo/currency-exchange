import getRefs from './refecences/get-refs';

const refs = getRefs();

refs.openMenuBtn.addEventListener('click', onMobileMenuOpen);
refs.closeMenuBtn.addEventListener('click', closeMobileMenu);
refs.mobileMenu.addEventListener('click', onMobileMenuLinkClick);

function onMobileMenuOpen() {
  openMobileMenu();
}

function onMobileMenuLinkClick(evt) {
  if (
    evt.target.nodeName !== 'A' ||
    !evt.target.classList.contains('mobile-menu__link')
  ) {
    return;
  }

  closeMobileMenu();
}

function openMobileMenu() {
  refs.mobileMenu.classList.add('mobile-menu--open');
  document.body.classList.add('modal-open');
}

function closeMobileMenu() {
  refs.mobileMenu.classList.remove('mobile-menu--open');
  document.body.classList.remove('modal-open');
}
