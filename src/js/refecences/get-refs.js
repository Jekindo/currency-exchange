export default function getRefs() {
  return {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),

    panes: document.querySelector('[data-panes]')
  };
}
