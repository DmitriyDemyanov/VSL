import { LANGUAGES_ACTION_TYPES } from "./languages.types";

const INITIAL_STATE = {
  languages: [],
  currentLanguage: {
    id: 1,
    code: 'en',
    name: 'english',
  },
};

export const languagesReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case LANGUAGES_ACTION_TYPES.SET_ALL_LANGUAGES:
      return {
        ...state,
        languages: payload
      }
    case LANGUAGES_ACTION_TYPES.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload
      }
    default:
      return state;
  }
}