const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1926db5a40fd48c26a4b6852bb32f657';

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://themoviedb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'original';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
