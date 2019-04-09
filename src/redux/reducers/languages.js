import {
  SET_SOURCE_LANGUAGE,
  SET_TARGET_LANGUAGE,
  ADD_NEW_TARGET_LANG,
  DELETE_TARGET_LANG
} from "../actions/languages";

const initialState = {
  sourceLanguages: [
    { value: "Deutsch", label: "Deutsch" },
    { value: "Englisch", label: "Englisch" },
    { value: "Französisch", label: "Französisch" },
    { value: "Chinesisch", label: "Chinesisch" },
    { value: "Italienisch", label: "Italienisch" },
    { value: "Spanisch", label: "Spanisch" },
    { value: "Griechisch", label: "Griechisch" },
    { value: "Portugiesisch", label: "Portugiesisch" },
    { value: "Polnisch", label: "Polnisch" },
    { value: "Arabisch", label: "Arabisch" },
    { value: "Albanisch", label: "Albanisch" },
    { value: "Bosnisch", label: "Bosnisch" },
    { value: "Bulgarisch", label: "Bulgarisch" },
    { value: "Dänisch", label: "Dänisch" },
    { value: "Isländisch", label: "Isländisch" },
    { value: "Estnisch", label: "Estnisch" },
    { value: "Finnisch", label: "Finnisch" },
    { value: "Japanisch", label: "Japanisch" },
    { value: "Kasachisch", label: "Kasachisch" },
    { value: "Katalanisch", label: "Katalanisch" },
    { value: "Koreanisch", label: "Koreanisch" },
    { value: "Kroatisch", label: "Kroatisch" },
    { value: "Lettisch", label: "Lettisch" },
    { value: "Luxemburgisch", label: "Luxemburgisch" },
    { value: "Litauisch", label: "Litauisch" },
    { value: "Mazedonisch", label: "Mazedonisch" },
    { value: "Montenegrinisch", label: "Montenegrinisch" },
    { value: "Niederländisch", label: "Niederländisch" },
    { value: "Rumänisch", label: "Rumänisch" },
    { value: "Russisch", label: "Russisch" },
    { value: "Schwedisch", label: "Schwedisch" },
    { value: "Serbisch", label: "Serbisch" },
    { value: "Slowakisch", label: "Slowakisch" },
    { value: "Slowenisch", label: "Slowenisch" },
    { value: "Tschechisch", label: "Tschechisch" },
    { value: "Türkisch", label: "Türkisch" },
    { value: "Ukrainisch", label: "Ukrainisch" },
    { value: "Weißrussisch", label: "Weißrussisch" },
    { value: "Ungarisch", label: "Ungarisch" }
  ],
  targetLanguages: [
    { value: "Englisch", label: "Englisch" },
    { value: "Englisch (Amerikanisches Engl.)", label: "Englisch (Amerikanisches Engl.)" },
    { value: "Englisch (Britisches Englisch)", label: "Englisch (Britisches Englisch)" },
    { value: "Chinesisch", label: "Chinesisch" },
    { value: "Chinesisch (traditionell)", label: "Chinesisch (traditionell)" },
    { value: "Chinesisch (vereinfacht)", label: "Chinesisch (vereinfacht)" },
    { value: "Französisch", label: "Französisch" },
    { value: "Spanisch", label: "Spanisch" },
    { value: "Spanisch (Argentinien)", label: "Spanisch (Argentinien)" },
    { value: "Spanisch (Mexiko)", label: "Spanisch (Mexiko)" },
    { value: "Deutsch", label: "Deutsch" },
    { value: "Albanisch", label: "Albanisch" },
    { value: "Arabisch", label: "Arabisch" },
    { value: "Bosnisch", label: "Bosnisch" },
    { value: "Bulgarisch", label: "Bulgarisch" },
    { value: "Dänisch", label: "Dänisch" },
    { value: "Estnisch", label: "Estnisch" },
    { value: "Finnisch", label: "Finnisch" },
    { value: "Griechisch", label: "Griechisch" },
    { value: "Isländisch", label: "Isländisch" },
    { value: "Italienisch", label: "Italienisch" },
    { value: "Japanisch", label: "Japanisch" },
    { value: "Kasachisch", label: "Kasachisch" },
    { value: "Katalanisch", label: "Katalanisch" },
    { value: "Koreanisch", label: "Koreanisch" },
    { value: "Kroatisch", label: "Kroatisch" },
    { value: "Lettisch", label: "Lettisch" },
    { value: "Luxemburgisch", label: "Luxemburgisch" },
    { value: "Litauisch", label: "Litauisch" },
    { value: "Mazedonisch", label: "Mazedonisch" },
    { value: "Montenegrinisch", label: "Montenegrinisch" },
    { value: "Niederländisch", label: "Niederländisch" },
    { value: "Niederländisch (Belgien)", label: "Niederländisch (Belgien)" },
    { value: "Niederländisch (Niederlande)", label: "Niederländisch (Niederlande)" },
    { value: "Polnisch", label: "Polnisch" },
    { value: "Portugiesisch", label: "Portugiesisch" },
    { value: "Portugiesisch (Brasilien)", label: "Portugiesisch (Brasilien)" },
    { value: "Portugiesisch (Portugal)", label: "Portugiesisch (Portugal)" },
    { value: "Rumänisch", label: "Rumänisch" },
    { value: "Russisch", label: "Russisch" },
    { value: "Schwedisch", label: "Schwedisch" },
    { value: "Serbisch", label: "Serbisch" },
    { value: "Slowakisch", label: "Slowakisch" },
    { value: "Slowenisch", label: "Slowenisch" },
    { value: "Tschechisch", label: "Tschechisch" },
    { value: "Türkisch", label: "Türkisch" },
    { value: "Ukrainisch", label: "Ukrainisch" },
    { value: "Ungarisch", label: "Ungarisch" },
    { value: "Weißrussisch", label: "Weißrussisch" }
  ],
  source: null,
  targetLanguagesItems: [undefined]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SOURCE_LANGUAGE:
      return {
        ...state,
        source: action.langName
      };
    case SET_TARGET_LANGUAGE: {
      const newTargetLanguagesItems = [...state.targetLanguagesItems];
      newTargetLanguagesItems.splice(action.selectId, 1, action.langName);
      return {
        ...state,
        targetLanguagesItems: newTargetLanguagesItems
      };
    }
    case ADD_NEW_TARGET_LANG: {
      return {
        ...state,
        targetLanguagesItems: [...state.targetLanguagesItems, undefined]
      };
    }
    case DELETE_TARGET_LANG: {
      const newTargetLanguagesItems = [...state.targetLanguagesItems];
      newTargetLanguagesItems.splice(action.selectNumb, 1);
      return {
        ...state,
        targetLanguagesItems: [...newTargetLanguagesItems]
      };
    }
    default:
      return { ...state };
  }
};
