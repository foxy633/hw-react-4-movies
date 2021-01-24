import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ac9dd75b5f8b9939df4f9d156389ec05";

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  return results;
};

export const fetchMoviesByName = async (name) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieCredits = async (id) => {
  const {
    data: { cast },
  } = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
  return cast;
};

export const fetchMovieReviews = async (id) => {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
  return results;
};
