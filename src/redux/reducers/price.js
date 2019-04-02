import {
  CALC_NEW_PRICE_PER_WORD,
  CALC_NEW_TOTAL_PRICE,
  CHANGE_DISCOUNT_STATUS,
  CHANGE_FINAL_DATE
} from "../actions/price";

const initialState = {
  languagesInfo: {
    Arabisch: { price: 14 },
    Bosnisch: { price: 14 },
    Bulgarisch: { price: 12 },
    Chinesisch: { price: 14 },
    Deutsch: { price: 12 },
    Dänisch: { price: 14 },
    Estnisch: { price: 12 },
    Finnisch: { price: 14 },
    Französisch: { price: 12 },
    Griechisch: { price: 10 },
    Italienisch: { price: 12 },
    Japanisch: { price: 14 },
    Kasachisch: { price: 12 },
    Katalanisch: { price: 14 },
    Koreanisch: { price: 14 },
    Kroatisch: { price: 10 },
    Lettisch: { price: 12 },
    Litauisch: { price: 12 },
    Mazedonisch: { price: 12 },
    Montenegrinisch: { price: 14 },
    Niederländisch: { price: 14 },
    Polnisch: { price: 10 },
    Portugiesisch: { price: 12 },
    Rumänisch: { price: 12 },
    Russisch: { price: 10 },
    Schwedisch: { price: 14 },
    Serbisch: { price: 12 },
    Slowakisch: { price: 10 },
    Slowenisch: { price: 10 },
    Spanisch: { price: 10 },
    Tschechisch: { price: 10 },
    Türkisch: { price: 12 },
    Ukrainisch: { price: 10 },
    Ungarisch: { price: 10 }
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
