import { SHOW_ORDER_FORM_SCREEN, SHOW_CALCULATOR_SCREEN } from "../actions/app";

const initialState = {
  showOrderFormScreen: false,
  showCalculatorScreen: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ORDER_FORM_SCREEN:
      return {
        ...state,
        showOrderFormScreen: true,
        showCalculatorScreen: false
      };
    case SHOW_CALCULATOR_SCREEN:
      return {
        ...state,
        showOrderFormScreen: false,
        showCalculatorScreen: true
      };
    default:
      return { ...state };
  }
};
