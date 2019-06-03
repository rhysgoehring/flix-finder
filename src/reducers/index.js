import { combineReducers } from "redux";
import movies from "./movies";
import tv from "./tv";

const rootReducer = combineReducers({
  movies,
  tv
});

export default rootReducer;
