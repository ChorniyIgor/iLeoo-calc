import {
  SET_SOURCE_LANGUAGE,
  SET_TARGET_LANGUAGE,
  ADD_NEW_TARGET_LANG
} from "../actions/languages";

const initialState = {
  sourceLanguages: [
    { value: "Arabisch", label: "Arabisch" },
    { value: "Bosnisch", label: "Bosnisch" },
    { value: "Bulgarisch", label: "Bulgarisch" },
    { value: "Chinesisch", label: "Chinesisch" },
    { value: "Deutsch", label: "Deutsch" },
    { value: "Dänisch", label: "Dänisch" },
    { value: "Estnisch", label: "Estnisch" },
    { value: "Finnisch", label: "Finnisch" },
    { value: "Französisch", label: "Französisch" },
    { value: "Griechisch", label: "Griechisch" },
    { value: "Italienisch", label: "Italienisch" },
    { value: "Japanisch", label: "Japanisch" },
    { value: "Kasachisch", label: "Kasachisch" },
    { value: "Katalanisch", label: "Katalanisch" },
    { value: "Koreanisch", label: "Koreanisch" },
    { value: "Kroatisch", label: "Kroatisch" },
    { value: "Lettisch", label: "Lettisch" },
    { value: "Litauisch", label: "Litauisch" },
    { value: "Mazedonisch", label: "Mazedonisch" },
    { value: "Montenegrinisch", label: "Montenegrinisch" },
    { value: "Niederländisch", label: "Niederländisch" },
    { value: "Polnisch", label: "Polnisch" },
    { value: "Portugiesisch", label: "Portugiesisch" },
    { value: "Rumänisch", label: "Rumänisch" },
    { value: "Russisch", label: "Russisch" },
    { value: "Schwedisch", label: "Schwedisch" },
    { value: "Serbisch", label: "Serbisch" },
    { value: "Slowakisch", label: "Slowakisch" },
    { value: "Slowenisch", label: "Slowenisch" },
    { value: "Spanisch", label: "Spanisch" },
    { value: "Tschechisch", label: "Tschechisch" },
    { value: "Türkisch", label: "Türkisch" },
    { value: "Ukrainisch", label: "Ukrainisch" },
    { value: "Ungarisch", label: "Ungarisch" }
  ],
  targetLanguages: [
    { value: "Arabisch", label: "Arabisch" },
    { value: "Bosnisch", label: "Bosnisch" },
    { value: "Bulgarisch", label: "Bulgarisch" },
    { value: "Chinesisch (traditionell)", label: "Chinesisch (traditionell)" },
    { value: "Chinesisch (vereinfacht)", label: "Chinesisch (vereinfacht)" },
    { value: "Deutsch", label: "Deutsch" },
    { value: "Dänisch", label: "Dänisch" },
    { value: "Estnisch", label: "Estnisch" },
    { value: "Finnisch", label: "Finnisch" },
    { value: "Franz. (Belgien)", label: "Franz. (Belgien)" },
    { value: "Französisch", label: "Französisch" },
    { value: "Griechisch", label: "Griechisch" },
    { value: "Italienisch", label: "Italienisch" },
    { value: "Japanisch", label: "Japanisch" },
    { value: "Kasachisch", label: "Kasachisch" },
    { value: "Katalanisch", label: "Katalanisch" },
    { value: "Koreanisch", label: "Koreanisch" },
    { value: "Kroatisch", label: "Kroatisch" },
    { value: "Lettisch", label: "Lettisch" },
    { value: "Litauisch", label: "Litauisch" },
    { value: "Mazedonisch", label: "Mazedonisch" },
    { value: "Montenegrinisch", label: "Montenegrinisch" },
    { value: "Niederländisch (Belgien)", label: "Niederländisch (Belgien)" },
    { value: "Niederländisch (Niederlande)", label: "Niederländisch (Niederlande)" },
    { value: "Polnisch", label: "Polnisch" },
    { value: "Portugiesisch (Brasilien)", label: "Portugiesisch (Brasilien)" },
    { value: "Portugiesisch (Portugal)", label: "Portugiesisch (Portugal)" },
    { value: "Rumänisch", label: "Rumänisch" },
    { value: "Russisch", label: "Russisch" },
    { value: "Schwedisch", label: "Schwedisch" },
    { value: "Serbisch", label: "Serbisch" },
    { value: "Slowakisch", label: "Slowakisch" },
    { value: "Slowenisch", label: "Slowenisch" },
    { value: "Spanisch (Argentinien)", label: "Spanisch (Argentinien)" },
    { value: "Spanisch (Mexiko)", label: "Spanisch (Mexiko)" },
    { value: "Spanisch (Spanien)", label: "Spanisch (Spanien)" },
    { value: "Tschechisch", label: "Tschechisch" },
    { value: "Türkisch", label: "Türkisch" },
    { value: "Ukrainisch", label: "Ukrainisch" },
    { value: "Ungarisch", label: "Ungarisch" }
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
      const newTargetLanguagesItems = state.targetLanguagesItems;
      newTargetLanguagesItems.splice(action.selectId, 1, action.langName);
      return {
        ...state,
        target: newTargetLanguagesItems
      };
    }
    case ADD_NEW_TARGET_LANG: {
      return {
        ...state,
        targetLanguagesItems: [...state.targetLanguagesItems, undefined]
      };
    }
    default:
      return { ...state };
  }
};
