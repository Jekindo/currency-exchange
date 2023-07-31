import getRefs from './refecences/get-refs';

const refs = getRefs();

refs.lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  evt.target.classList.add('lazy-image--appear');
}
