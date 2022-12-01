import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryCollectionRef = document.querySelector('.gallery');

function createMarkup() {
  const galleryCollection = galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
  galleryCollectionRef.insertAdjacentHTML('beforeend', galleryCollection);
}

createMarkup();

galleryCollectionRef.addEventListener('click', onOpenModal);

let instance;

function onOpenModal(evt) {
  disableLink(evt);
  window.addEventListener('keydown', onEscKeyPress);
  const largeImg = evt.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${largeImg}" width="1280">
`);
  instance.show();
}

function disableLink(evt) {
  evt.preventDefault();
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  if (evt.code === ESC_KEY_CODE) {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
  }
}
