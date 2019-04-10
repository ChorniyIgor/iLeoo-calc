import React, { Component } from "react";
import CalculatorScreen from "./components/CalculatorScreen/CalculatorScreen";
import OrderFormScreen from "./components/OrderFormScreen/OrderFormScreen";
import OrderSuccessfulScreen from "./components/OrderSuccessfulScreen/OrderSuccessfulScreen";
import classes from "./App.css";
import { connect } from "react-redux";
import Steps from "./components/Steps/Steps";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h2 style={{ textAlign: "center", paddingTop: "10px", marginTop: "0px" }}>
          Ihr Weg zum Preisangebot
        </h2>
        <div className={classes.CalcBody}>
          {this.props.showCalculatorScreen ? <CalculatorScreen /> : null}
          {this.props.showOrderFormScreen ? <OrderFormScreen /> : null}
          {this.props.showOrderSuccessfulScreen ? <OrderSuccessfulScreen /> : null}
          <span className={classes.Security}>
            <i className="fas fa-lock" />
            Sicherheitsgarantie
          </span>
          <Steps />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showOrderFormScreen: state.app.showOrderFormScreen,
    showCalculatorScreen: state.app.showCalculatorScreen,
    showOrderSuccessfulScreen: state.app.showOrderSuccessfulScreen
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
