const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24834136-e9505bd0bc9d49756a350a5db";

function fetchImages(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No results were found for ${query}`));
  });
}

const API = { fetchImages };

export default API;
