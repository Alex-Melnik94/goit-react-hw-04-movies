const API_KEY = 'dc7f169c38e74e7a2da871e2cc3bc382';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrendingFilms() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function getFilmByQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function getFilmInfo(movieId) {
  return fetch(`
${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function getFilmCast(movieId) {
  return fetch(`
${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
    },
  );
}

export function getFilmReview(movieId) {
  return fetch(`
${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(
    res => res.json(),
  );
}
