import React from "react";
import { connect } from "react-redux";
import classes from "./PriceSection.css";
import { changeDiscountStatus } from "../../../redux/actions/price";
import { showOrderFormScreen } from "../../../redux/actions/app";

const PriceSection = props => {
  return (
    <section className={classes.Price}>
      <div className={classes.PriceHeader}>
        <span>Kostenvoranschlag</span>
      </div>
      <div className={classes.TotalPriceWrap}>
        <div className={classes.TotalPriceValueWrap}>
          <span className={classes.PriceValue}>{props.totalPrice.toFixed(2)} €</span>
          <span className={classes.PricePerWordValue}>{props.pricePerWord / 100} €/Wort</span>
        </div>
        <span className={classes.MwSt}>zzgl. Grundpreis und MwSt.</span>
        <label className={classes.DiscountBtn}>
          <input type="checkbox" onChange={props.changeDiscountStatus} />
          <span>
            <i className={["fas", "fa-tags", classes.DiscountIcon].join(" ")} />
            für Neukunden -{props.discountValue * 100}%
          </span>
        </label>
      </div>
      <div className={classes.Time}>
        <span>
          <i className={["far", "fa-clock", classes.Icon].join(" ")} />
          Erhalten Sie Ihre Übersetzung bis zum
        </span>{" "}
        <br />
        <span>{props.finalDate === 0 ? "" : props.finalDate}</span>
      </div>
      <input
        className={classes.SendBtn}
        type="button"
        value="Preisangebot erhalten"
        onClick={props.showOrderFormScreen}
      />
    </section>
  );
};

function mapStateToProps(state) {
  return {
    pricePerWord: state.price.pricePerWord,
    totalPrice: state.price.totalPrice,
    finalDate: state.price.finalDate,
    discountValue: state.price.discount.value
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
