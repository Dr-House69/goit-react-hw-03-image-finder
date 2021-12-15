function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=24834136-e9505bd0bc9d49756a350a5db&image_type=photo&orientation=horizontal&per_page=12`
  ).then((res) => res.json());
}
const api = { fetchImages };
export default api;
