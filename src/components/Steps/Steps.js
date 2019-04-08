import React from "react";
import classes from "./Steps.css";
import { connect } from "react-redux";

const Steps = props => {
  const stepsClassNames = [classes.Steps];
  if (props.inWordsCountingSection) stepsClassNames.push(classes.StepsInCountingSection);
  return (
    <ul className={stepsClassNames.join(" ")}>
      <li className={props.showCalculatorScreen ? classes.Active : null}>Informationen</li>
      <li className={props.showOrderFormScreen ? classes.Active : null}>
        Anmerkungen
        <br /> u. Kontaktdaten
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
