import { FETCH_NEW_NETFLIX_RELEASES } from "../actions/types";

const initialState = {
  newShows: [],
  newMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEW_NETFLIX_RELEASES:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
