import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// console.log(galleryItems);

const galeryList = document.querySelector('.gallery');

function makeGalery (obj) {   
   const galeryMarcup = obj.map(({ description, original, preview }) => {
      return `      
  <a class="gallery__item" 
  href="${original}">
  <img class="gallery__image" 
  src="${preview}"
   alt="${description}"/>
</a>
      `;
   }).join('');
galeryList.insertAdjacentHTML('beforeend', galeryMarcup);
}

makeGalery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: '250',
   animationSpeed: '100',
   fadeSpeed: '150'
});
