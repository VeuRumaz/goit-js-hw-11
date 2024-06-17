import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

iziToast.settings({
  position: 'topRight',
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }
  gallery.innerHTML = '';
  loader.classList.remove('hidden'); // Показать индикатор загрузки

  // Добавим задержку в 3 секунды перед выполнением запроса
  setTimeout(async () => {
    try {
      const { hits } = await fetchImages(query);
      if (hits.length === 0) {
        iziToast.warning({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(hits);
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    } finally {
      loader.classList.add('hidden'); // Скрыть индикатор загрузки после завершения запроса
    }
  }, 3000); // Задержка в 3 секунды
});
