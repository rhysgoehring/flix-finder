import {
  FETCH_MOST_POPULAR_MOVIES_TMDB,
  FETCH_NEW_MOVIES_ON_NETFLIX
} from "../actions/types";

const initialState = {
  tmdbPopularMovies: [],
  netflixNewReleases: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOST_POPULAR_MOVIES_TMDB:
      return {
        ...state,
        tmdbPopularMovies: action.mostPopularMovies
      };
    default:
      return {
        ...state
      };
  }
}
