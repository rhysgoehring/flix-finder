import {
  FETCH_MOST_POPULAR_TV_TMDB,
  FETCH_NEW_TV_ON_NETFLIX
} from "../actions/types";

const initialState = {
  tmdbPopular: [],
  netflixNewReleases: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOST_POPULAR_TV_TMDB: {
      return {
        ...state,
        tmdbPopular: action.mostPopularTV
      };
    }
    default:
      return {
        ...state
      };
  }
}
