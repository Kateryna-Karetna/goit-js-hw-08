import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = createImgItemMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markup);

function createImgItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
        </a>
    `;
    })
    .join("");
}

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionSelector: "img",
  captionDelay: 250,
  captionPosition: "bottom",
  close: "true",
});
