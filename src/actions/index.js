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

const fetchMostPopularTMDB = () => async dispatch => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en`
    );
    console.log("response", response);
    const mostPopularMovies = response.data.results;
    const top5PopularMovies = mostPopularMovies.slice(0, 5);
    console.log("most popular movies", top5PopularMovies);
    dispatch({
      type: FETCH_MOST_POPULAR_MOVIES_TMDB,
      mostPopularMovies
    });
    return top5PopularMovies;
  } catch (error) {
    console.error("fetchMostPopularTMDB redux action error", error);
  }
};

export { fetchMostPopularTMDB };
