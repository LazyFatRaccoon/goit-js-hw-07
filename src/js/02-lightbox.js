import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryRef = document.querySelector('.gallery')

const galleryMarkUp = galleryItems.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" title="${description}" />
</a>`, '')

galeryRef.insertAdjacentHTML('afterbegin', galleryMarkUp)
  
var lightbox = new SimpleLightbox(
    '.gallery a', 
    { 
        overlayOpacity: 0.95, 
        widthRatio: 1.0, 
        heightRatio: 1.0, 
        captionDelay: 250,
    });




