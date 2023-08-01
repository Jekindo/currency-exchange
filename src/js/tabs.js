import getRefs from './refecences/get-refs';

const refs = getRefs();

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'A') {
    return;
  }

  const currentActiveControlLink = refs.controls.querySelector(
    '.controls__link--active'
  );

  if (currentActiveControlLink) {
    const currentActivePane = refs.panes.querySelector('.pane--active');
    const currentActiveImage = document.querySelector(`img.tabs__image--show`);

    currentActiveControlLink.classList.remove('controls__link--active');
    currentActivePane.classList.remove('pane--active');
    currentActiveImage.classList.remove('tabs__image--show');
  }

  const controlLink = evt.target;
  controlLink.classList.add('controls__link--active');

  const paneId = controlLink.getAttribute('href').slice(1);
  refs.panes.querySelector(`#${paneId}`).classList.add('pane--active');

  document
    .querySelector(`img[id="${paneId}"]`)
    .classList.add('tabs__image--show');
}
