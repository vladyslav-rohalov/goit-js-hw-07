import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCollectionRef = document.querySelector('.gallery');

function createMarkup() {
  const galleryCollection = galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
  galleryCollectionRef.insertAdjacentHTML('beforeend', galleryCollection);
}

createMarkup();

galleryCollectionRef.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  disableLink(evt);
  let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
  gallery.on('show.simplelightbox');
  console.log(evt.target.alt);
}

function disableLink(evt) {
  evt.preventDefault();
}
