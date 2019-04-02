import {calcNewPricePerWord} from "./price";
export const SET_SOURCE_LANGUAGE = "SET_SOURCE_LANGUAGE";
export const SET_TARGET_LANGUAGE = "SET_TARGET_LANGUAGE";
export const ADD_NEW_TARGET_LANG = "ADD_NEW_TARGET_LANG";

export function setSourceLanguage(langName) {
  return dispatch =>{
    dispatch({
      type: SET_SOURCE_LANGUAGE,
      langName
    });
    dispatch(calcNewPricePerWord());
  }
}

export function setTargetLanguage(langName, selectId) {
  return dispatch =>{
    dispatch({
      type: SET_TARGET_LANGUAGE,
      langName,
      selectId
    });
    dispatch(calcNewPricePerWord());
  }
}

export function addNewTargetLang() {
  return {
    type: ADD_NEW_TARGET_LANG
  };
}
