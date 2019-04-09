import {
  CALC_NEW_PRICE_PER_WORD,
  CALC_NEW_TOTAL_PRICE,
  CHANGE_DISCOUNT_STATUS,
  CHANGE_FINAL_DATE
} from "../actions/price";

const initialState = {
  languagesInfo: {
    Deutsch: { price: 8 },
    Englisch: { price: 8 },
    Französisch: { price: 8 },
    Chinesisch: { price: 10 },
    Italienisch: { price: 8 },
    Spanisch: { price: 8 },
    Griechisch: { price: 8 },
    Portugiesisch: { price: 8 },
    Polnisch: { price: 8 },
    Arabisch: { price: 10 },
    Albanisch: { price: 10 },
    Bosnisch: { price: 10 },
    Bulgarisch: { price: 8 },
    Dänisch: { price: 10 },
    Isländisch: { price: 10 },
    Estnisch: { price: 8 },
    Finnisch: { price: 10 },
    Japanisch: { price: 12 },
    Kasachisch: { price: 10 },
    Katalanisch: { price: 10 },
    Koreanisch: { price: 10 },
    Kroatisch: { price: 10 },
    Lettisch: { price: 10 },
    Luxemburgisch: { price: 10 },
    Litauisch: { price: 8 },
    Mazedonisch: { price: 8 },
    Montenegrinisch: { price: 10 },
    Niederländisch: { price: 10 },
    Rumänisch: { price: 8 },
    Russisch: { price: 6 },
    Schwedisch: { price: 10 },
    Serbisch: { price: 10 },
    Slowakisch: { price: 10 },
    Slowenisch: { price: 10 },
    Tschechisch: { price: 8 },
    Türkisch: { price: 8 },
    Ukrainisch: { price: 6 },
    Weißrussisch: { price: 8 },
    Ungarisch: { price: 8 },
    "Englisch (Amerikanisches Engl.)": { price: 8 },
    "Englisch (Britisches Englisch)": { price: 8 },
    "Chinesisch (traditionell)": { price: 10 },
    "Chinesisch (vereinfacht)": { price: 10 },
    "Spanisch (Argentinien)": { price: 8 },
    "Spanisch (Mexiko)": { price: 8 },
    "Niederländisch (Belgien)": { price: 10 },
    "Niederländisch (Niederlande)": { price: 10 },
    "Portugiesisch (Brasilien)": { price: 8 },
    "Portugiesisch (Portugal)": { price: 8 }
  },
  pricePerWord: 0,
  totalPrice: 0,
  discount: {
    active: false,
    value: 0.15
  },
  finalDate: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CALC_NEW_PRICE_PER_WORD:
      return {
        ...state,
        pricePerWord: action.newPricePerWord
      };
    case CALC_NEW_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.totalPrice
      };
    case CHANGE_DISCOUNT_STATUS:
      return {
        ...state,
        discount: { ...state.discount, ...{ active: action.isChecked } }
      };
    case CHANGE_FINAL_DATE:
      return {
        ...state,
        finalDate: action.newFinalDate
      };
    default:
      return { ...state };
  }
};
