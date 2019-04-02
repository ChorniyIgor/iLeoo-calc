import React from "react";
import { connect } from "react-redux";
import classes from "./PriceSection.css";
import { changeDiscountStatus } from "../../../redux/actions/price";
import { showOrderFormScreen } from "../../../redux/actions/app";

const PriceSection = props => {
  return (
    <section className={classes.Price}>
      <div>
        <i>3</i>
        <p>Kostenvoranschlag</p>
      </div>
      <h2>total price {props.totalPrice}</h2>
      <h2>price per word {props.pricePerWord / 100}</h2>
      <br />
      <label>
        <input type="checkbox" onChange={props.changeDiscountStatus} />
        für Neukunden -15%
      </label>
      <hr />
      <div>
        Erhalten Sie Ihre Übersetzung bis zum <br />
        <span>{props.finalDate}</span>
      </div>
      <input type="button" value="Preisangebot erhalten" onClick={props.showOrderFormScreen} />
    </section>
  );
};

function mapStateToProps(state) {
  return {
    pricePerWord: state.price.pricePerWord,
    totalPrice: state.price.totalPrice,
    finalDate: state.price.finalDate
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeDiscountStatus: value => {
      dispatch(changeDiscountStatus(value.target.checked));
    },
    showOrderFormScreen: () => {
      dispatch(showOrderFormScreen());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceSection);
