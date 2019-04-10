import {
  SHOW_ORDER_FORM_SCREEN,
  SHOW_CALCULATOR_SCREEN,
  SHOW_ORDER_SUCCESSGUL_SCREEN
} from "../actions/app";

const initialState = {
  showOrderFormScreen: false,
  showCalculatorScreen: false,
  showOrderSuccessfulScreen: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ORDER_FORM_SCREEN:
      return {
        ...state,
        showOrderFormScreen: true,
        showCalculatorScreen: false,
        showOrderSuccessfulScreen: false
      };
    case SHOW_CALCULATOR_SCREEN:
      return {
        ...state,
        showOrderFormScreen: false,
        showCalculatorScreen: true,
        showOrderSuccessfulScreen: false
      };
    case SHOW_ORDER_SUCCESSGUL_SCREEN:
      return {
        ...state,
        showOrderFormScreen: false,
        showCalculatorScreen: false,
        showOrderSuccessfulScreen: true
      };
    default:
      return { ...state };
  }
};
