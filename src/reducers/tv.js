import { FETCH_MOST_POPULAR_TV_TMDB } from "../actions/types";

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
