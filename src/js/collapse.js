import getRefs from './refecences/get-refs';

const refs = getRefs();

refs.panes.addEventListener('click', onCollapseLinkClick);

function onCollapseLinkClick(evt) {
  evt.preventDefault();

  if (
    evt.target.nodeName !== 'A' &&
    !evt.target.classList.contains('collapse-link__icon')
  ) {
    return;
  }

  const currentActiveCollapseLink = refs.panes.querySelector(
    '.collapse-link--active'
  );

  if (currentActiveCollapseLink && currentActiveCollapseLink !== evt.target) {
    currentActiveCollapseLink.classList.remove('collapse-link--active');
    currentActiveCollapseLink.classList.add('collapse-link--inactive');

    const collapseId = currentActiveCollapseLink.getAttribute('href').slice(1);
    const collapse = refs.panes.querySelector(`#${collapseId}`);

    collapse.classList.remove('collapse--active');
  }

  const collapseLink = evt.target;
  collapseLink.classList.toggle('collapse-link--inactive');
  collapseLink.classList.toggle('collapse-link--active');

  const collapseId = collapseLink.getAttribute('href').slice(1);
  const collapse = refs.panes.querySelector(`#${collapseId}`);

  collapse.classList.toggle('collapse--active');
}
