export const SHOW_ORDER_FORM_SCREEN = "SHOW_ORDER_FORM_SCREEN";
export const SHOW_CALCULATOR_SCREEN = "SHOW_CALCULATOR_SCREEN";

export function showOrderFormScreen() {
  return {
    type: SHOW_ORDER_FORM_SCREEN
  };
}

export function showCalculatorScreen() {
  return {
    type: SHOW_CALCULATOR_SCREEN
  };
}
