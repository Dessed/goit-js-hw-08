import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const fotoMarkup = creatingImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', fotoMarkup);

function creatingImageGallery(pictures) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');
};

gallery.addEventListener('click', onGallerySimpleLightbox);

function onGallerySimpleLightbox (evt) { 
  evt.preventDefault();
  
  let lightbox = new SimpleLightbox('.gallery a',
   {captionsData: 'alt',
    captionDelay: 250,
    navText: ['←','→']
    });
};

