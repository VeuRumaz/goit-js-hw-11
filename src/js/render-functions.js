import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery__link">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image"/>
      <div class="description">${image.tags}</div>
      <div class="info">
        <p class="info-item"><b>Likes</b>${image.likes}</p>
        <p class="info-item"><b>Views</b>${image.views}</p>
        <p class="info-item"><b>Comments</b>${image.comments}</p>
        <p class="info-item"><b>Downloads</b>${image.downloads}</p>
      </div>
    </a>`
    )
    .join('');
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery__link">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image"/>
      <div class="description">${image.tags}</div>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${image.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${image.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${image.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${image.downloads}</span>
        </div>
      </div>
    </a>`
    )
    .join('');
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
