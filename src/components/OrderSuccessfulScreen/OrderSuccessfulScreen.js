import React from "react";
import classes from "./OrderSuccessfulScreen.css";
import { connect } from "react-redux";
import { showCalculatorScreen } from "../../redux/actions/app";

const OrderSuccessfulScreen = props => {
  return (
    <div className={classes.OrderSuccessfulScreen}>
      <h2>Дякуюємо вам велике, сьогодні ви зробили мене із Артуром на крок ближче до ГєліЛіКа!</h2>
      <button onClick={props.showCalculatorScreen}>Назад</button>
    </div>
  );
};

function mapDispatchToProsp(dispatch) {
  return {
    showCalculatorScreen: () => {
      dispatch(showCalculatorScreen());
    }
  };
}
export default connect(
  null,
  mapDispatchToProsp
)(OrderSuccessfulScreen);
