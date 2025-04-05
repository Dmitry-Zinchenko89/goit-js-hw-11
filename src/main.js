import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  toggleLoader(true);

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      message: `Error: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    toggleLoader(false);
  }
});

function toggleLoader(show) {
  loader.classList.toggle('hidden', !show);
}