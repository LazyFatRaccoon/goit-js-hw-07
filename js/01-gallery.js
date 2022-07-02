import { galleryItems } from './gallery-items.js';
//import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </div>`
}).join('')



gallery.insertAdjacentHTML('afterbegin', galleryMarkup)

gallery.addEventListener('click', onImageClick)

function onImageClick(e) {
  e.preventDefault();
  const url = e.target.dataset.source;
  if (url) {
    const instance = basicLightbox.create(`<img src="${url}">`);
    window.addEventListener('keyup', onKeyModalPress, {once: true})
    window.myParam = instance
    
    instance.show();
  }
}

function onKeyModalPress(e) {
  if (e.keyCode === 27) {
    e.currentTarget.myParam.close()}
}


