const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  mobileMenu: document.querySelector('[data-menu]'),
};

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
