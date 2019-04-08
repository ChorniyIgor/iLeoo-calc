import React from "react";
import classes from "./Steps.css";
import { connect } from "react-redux";

const Steps = props => {
  return (
    <ul className={classes.Steps}>
      <li className={props.showCalculatorScreen ? classes.Active : null}>Informationen</li>
      <li className={props.showOrderFormScreen ? classes.Active : null}>
        Anmerkungen<br /> u. Kontaktdaten
      </li>
    </ul>
  );
};
function mapStateToProps(state) {
  return {
    showOrderFormScreen: state.app.showOrderFormScreen,
    showCalculatorScreen: state.app.showCalculatorScreen
  };
}
export default connect(mapStateToProps)(Steps);
