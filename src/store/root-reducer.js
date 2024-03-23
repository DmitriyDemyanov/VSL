import { combineReducers } from "redux";
import { usersReducer } from './users/users.reducer';
import { languagesReducer } from "./languages/languages.reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  languages: languagesReducer,
});

const a = 10;

const multipleBy = function (a) {
  return function (b) {
    return a * b;
  }
}

const multipleBySeven = multipleBy(7);
const multipleByFive = multipleBy(5);