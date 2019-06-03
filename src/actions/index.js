import axios from "axios";
import {
  FETCH_MOST_POPULAR_MOVIES_TMDB,
  FETCH_NEW_MOVIES_ON_NETFLIX,
  FETCH_MOST_POPULAR_TV_TMDB,
  FETCH_NEW_TV_ON_NETFLIX
} from "./types";
import {
  netflixConfig,
  edhConfig,
  imdbConfig,
  utellyConfig
} from "./util/axios_configs";

const fetchPopularMovies = () => async dispatch => {
  try {
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en`
    );
    const mostPopularMovies = movieResponse.data.results;
    const topPopularMovies = mostPopularMovies.slice(0, 7);

    dispatch({
      type: FETCH_MOST_POPULAR_MOVIES_TMDB,
      mostPopularMovies
    });

    return topPopularMovies;
  } catch (error) {
    console.error("fetchMostPopularTMDB movies redux action error", error);
  }
};

const fetchPopularTV = () => async dispatch => {
  try {
    const showResponse = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FDenver&include_null_first_air_dates=false&with_original_language=en`
    );

    const mostPopularTV = showResponse.data.results;
    const topPopularTV = mostPopularTV.slice(0, 7);

    dispatch({
      type: FETCH_MOST_POPULAR_TV_TMDB,
      mostPopularTV
    });

    return topPopularTV;

  } catch (error) {
    console.error("fetchMostPopularTMDB shows redux action error", error);
  }
};

export { fetchPopularMovies, fetchPopularTV };
