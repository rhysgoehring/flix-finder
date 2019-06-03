import {
  FETCH_MOST_POPULAR_MOVIES_TMDB,
  FETCH_NEW_MOVIES_ON_NETFLIX
} from "../actions/types";

const initialState = {
  tmdbPopular: [],
  netflixNewReleases: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOST_POPULAR_MOVIES_TMDB:
      return {
        ...state,
        tmdbPopular: action.mostPopularMovies
      };
    default:
      return {
        ...state
      };
  }
}
