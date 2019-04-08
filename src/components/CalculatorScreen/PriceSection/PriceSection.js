import React from "react";
import { connect } from "react-redux";
import classes from "./PriceSection.css";
import { changeDiscountStatus } from "../../../redux/actions/price";
import { showOrderFormScreen } from "../../../redux/actions/app";

const PriceSection = props => {
  return (
    <section className={classes.Price}>
      <div className={classes.PriceHeader}>
        <span>Eingeschätzter Preis</span>
      </div>
      <div className={classes.TotalPriceWrap}>
        <div className={classes.TotalPriceValueWrap}>
          {props.isFilesCountingError && props.totalPrice === 0 ? (
            <span className={classes.PriceValue}>
              {props.pricePerWord / 100} <i>€/Wort</i>
            </span>
          ) : (
            <span className={classes.PriceValue}>{props.totalPrice.toFixed(2)} €</span>
          )}

          {props.isFilesCountingError && props.totalPrice === 0 ? null : (
            <span className={classes.PricePerWordValue}>{props.pricePerWord / 100} €/Wort</span>
          )}
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
        </span>
        <p className={classes.DateItem}>{props.finalDate === 0 ? " " : props.finalDate}</p>
      </div>
      <button className={classes.SendBtn} onClick={props.showOrderFormScreen}>
        Angebot anfordern <br />
        <span>(max. 10 Min. Wartezeit)</span>
        <i className="fas fa-angle-right" />
      </button>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    pricePerWord: state.price.pricePerWord,
    totalPrice: state.price.totalPrice,
    finalDate: state.price.finalDate,
    discountValue: state.price.discount.value,
    isFilesCountingError: state.wordsCounter.isFilesCountingError
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
