import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
            </a>
        </div> `;
        })
        .join('');
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
    instance.show();

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            instance.close();
        }
    });
}
