import axios from "axios";

const api_key = "df1472d4e70acf1f1e9fbc910410c747";
const url_movie = "https://api.themoviedb.org/3/";

export const getFilmsPopular = () => {
  return axios
    .get(`${url_movie}trending/all/day?api_key=${api_key}`)
    .then((response) => response.data.results);
};

export const getFilmId = (movie_id) => {
  return axios
    .get(`${url_movie}movie/${movie_id}?api_key=${api_key}&language=en-US`)
    .then((response) => response);
};

export const getFilmsReviews = (movie_id) => {
  return axios
    .get(
      `${url_movie}movie/${movie_id}/reviews?api_key=${api_key}&language=en-US&page=1`
    )
    .then((response) => response);
};

export const getFilmsCast = (movie_id) => {
  return axios
    .get(`${url_movie}movie/${movie_id}/credits?api_key=${api_key}`)
    .then((response) => response);
};

const getFilmsFromQuery = (searchQuery) => {
  return axios
    .get(`${url_movie}search/movie?api_key=${api_key}&query=${searchQuery}`)
    .then((response) => response.data.results);
};

export default { getFilmsFromQuery };
