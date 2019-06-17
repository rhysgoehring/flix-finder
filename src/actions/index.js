import axios from "axios";
import {
  FETCH_MOST_POPULAR_MOVIES_TMDB,
  FETCH_NEW_NETFLIX_RELEASES,
  FETCH_MOST_POPULAR_TV_TMDB
} from "./types";
import { netflixConfig } from "./util/axios_configs";

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

    return { topPopularMovies, mostPopularMovies };
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

    return { topPopularTV, mostPopularTV };
  } catch (error) {
    console.error("fetchMostPopularTMDB shows redux action error", error);
  }
};

const fetchNewNetflixReleases = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:new7:US&p=1&t=ns&st=adv",
      netflixConfig
    );

    const allReleases = response.data.ITEMS;
    const allNewMovies = allReleases.filter(
      release => release.type === "movie"
    );

    const allNewShows = allReleases.filter(
      release => release.type === "series"
    );

    const newNetflixShows = allNewShows.slice(0, 7);
    const newNetflixMovies = allNewMovies.slice(0, 7);

    dispatch({
      type: FETCH_NEW_NETFLIX_RELEASES,
      allNewMovies,
      allNewShows
    });
    return {
      newNetflixMovies,
      newNetflixShows
    };
  } catch (error) {
    console.error("fetchNewNetflixReleases redux error", error);
  }
};

export { fetchPopularMovies, fetchPopularTV, fetchNewNetflixReleases };
