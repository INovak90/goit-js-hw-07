import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallereRefs = document.querySelector(".gallery");

const createMarkupGalery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallereRefs.insertAdjacentHTML("beforeend", createMarkupGalery);


var lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
