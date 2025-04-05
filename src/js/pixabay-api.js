import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49651039-b61b5892bf5245ff30c976637'; // Замінити на власний ключ

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
