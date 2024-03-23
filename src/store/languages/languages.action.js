import { LANGUAGES_ACTION_TYPES } from "./languages.types";

export const setAllLanguages = (languages) => ({ type: LANGUAGES_ACTION_TYPES.SET_ALL_LANGUAGES,payload: languages });
export const setCurrentLanguage = (language) => ({ type: LANGUAGES_ACTION_TYPES.SET_CURRENT_LANGUAGE,payload: language });