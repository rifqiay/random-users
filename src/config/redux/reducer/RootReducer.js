import { combineReducers } from "redux";
import { getReducers } from "./GetReducer";

export const rootReducer = combineReducers({
  getAllUsers: getReducers,
});
