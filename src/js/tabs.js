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

    currentActiveControlLink.classList.remove('controls__link--active');
    currentActivePane.classList.remove('pane--active');
  }

  const controlLink = evt.target;
  controlLink.classList.add('controls__link--active');

  const paneId = controlLink.getAttribute('href').slice(1);
  refs.panes.querySelector(`#${paneId}`).classList.add('pane--active');

  let imageUrl = null;
  let imageUrl2x = null;

  switch (paneId) {
    case 'citizens':
      imageUrl = new URL(`../images/citizens.jpg`, import.meta.url);
      imageUrl2x = new URL(`../images/citizens@2x.jpg`, import.meta.url);

      refs.panesImage.src = imageUrl;
      refs.panesImage.srcset = `${imageUrl} 1x, ${imageUrl2x} 2x`;
      refs.panesImage.alt = 'Щасливий чоловік з доларами в руках';

      break;

    case 'guests':
      imageUrl = new URL(`../images/guests.jpg`, import.meta.url);
      imageUrl2x = new URL(`../images/guests@2x.jpg`, import.meta.url);

      refs.panesImage.src = imageUrl;
      refs.panesImage.srcset = `${imageUrl} 1x, ${imageUrl2x} 2x`;
      refs.panesImage.alt = 'Щасливий чоловік з доларами в руках';

      break;

    case 'businessmen':
      imageUrl = new URL(`../images/businessmen.jpg`, import.meta.url);
      imageUrl2x = new URL(`../images/businessmen@2x.jpg`, import.meta.url);

      refs.panesImage.src = imageUrl;
      refs.panesImage.srcset = `${imageUrl} 1x, ${imageUrl2x} 2x`;
      refs.panesImage.alt = 'Щасливий чоловік з доларами в руках';

      break;
  }
}
