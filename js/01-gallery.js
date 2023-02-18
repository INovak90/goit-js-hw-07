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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallereRefs.insertAdjacentHTML("beforeend", createMarkupGalery);

function onTargetClickImage(e) {
  e.preventDefault();

  if (e.target.classList.value !== "gallery__image") {
    return;
  }
  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${e.target.dataset.source}"/>
    </div>`
  );
  instance.show();
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

gallereRefs.addEventListener("click", onTargetClickImage);
