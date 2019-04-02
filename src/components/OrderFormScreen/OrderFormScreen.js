import React from "react";
import { connect } from "react-redux";
import { showCalculatorScreen } from "../../redux/actions/app";
import OrderInfoSection from "./OrderInfoSection/OrderInfoSection";
import UserInfoSection from "./UserInfoSection/UserInfoSection";
import classes from "./OrderFormScreen.css";

const OrderFormScreen = props => {
  return (
    <React.Fragment>
      <input type="button" value="back" onClick={props.showCalculatorScreen} />
      <div className={classes.OrderFormScreen}>
        <OrderInfoSection />
        <UserInfoSection />
      </div>
    </React.Fragment>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    showCalculatorScreen: () => {
      dispatch(showCalculatorScreen());
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(OrderFormScreen);
