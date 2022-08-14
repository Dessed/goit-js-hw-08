import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

const fotoMarkup = creatingImageGallery(galleryItems);
// console.log(fotoMarkup);

gallery.insertAdjacentHTML('beforeend', fotoMarkup);

function creatingImageGallery(pictures) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
};


gallery.addEventListener('click', onGalleryBasicLightbox)

function onGalleryBasicLightbox (evt) {
  evt.preventDefault();

  let originalPicture = evt.target.dataset.source;

  const html = `
  <img width="1400" height="900" src="${originalPicture}">
	`
	basicLightbox.create(html, {
		onClose: () => {alert ('Jdfgdfgdffg')},
    onShow: (instance) => { 
      
    document.addEventListener("keydown", closeLightboxButton)

    function closeLightboxButton(evt) {
      if (evt.key === `Escape`) {
        console.log(instance);
        instance.close();
      } 
    }},
	}).show()

 
}