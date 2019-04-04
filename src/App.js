import React, { Component } from "react";
import CalculatorScreen from "./components/CalculatorScreen/CalculatorScreen";
import OrderFormScreen from "./components/OrderFormScreen/OrderFormScreen";
import classes from "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h2 style={{ textAlign: "center", marginTop: "0px" }}>Erhalten Sie Ihr Preisangebot</h2>
        <div className={classes.CalcBody}>
          {this.props.showCalculatorScreen ? <CalculatorScreen /> : null}
          {this.props.showOrderFormScreen ? <OrderFormScreen /> : null}
          <span className={classes.Security}>
            <i className="fas fa-lock" />Sicherheitsgarantie
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showOrderFormScreen: state.app.showOrderFormScreen,
    showCalculatorScreen: state.app.showCalculatorScreen
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
