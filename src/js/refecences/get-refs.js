export default function getRefs() {
  return {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),

    panes: document.querySelector('[data-panes]'),
    panesImage: document.querySelector('[data-panes-image]'),
    controls: document.querySelector('[data-controls]'),

    backToTopButton: document.querySelector(
      'button[data-action="back-top-top"]'
    ),

    lazyImages: document.querySelectorAll('.lazy-image')
  };
}
