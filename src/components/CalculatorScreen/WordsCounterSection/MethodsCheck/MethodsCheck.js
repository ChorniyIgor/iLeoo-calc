import React from "react";
import classes from "./MethodCheck.css";
import { connect } from "react-redux";
import { setMethodOfCalcWords } from "../../../../redux/actions/wordsCounter";

const MethodCheck = props => {
  return (
    <div onChange={props.setMethod} className={classes.MethodCheck}>
      <div>
        <input
          type="radio"
          name="method_of_calculation"
          value="number_of_words"
          id="number_of_words"
          defaultChecked={props.methodOfCalc === "number_of_words" ? true : false}
        />
        <label htmlFor="number_of_words">
          <i className={["fas", "fa-calculator", classes.Icon].join(" ")} />
          Wortzahl
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="method_of_calculation"
          value="text_input"
          id="text_input"
          defaultChecked={props.methodOfCalc === "text_input" ? true : false}
        />
        <label htmlFor="text_input">
          <i className={["far", "fa-edit", classes.Icon].join(" ")} />
          Text eingeben
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="method_of_calculation"
          value="download_files"
          id="download_files"
          defaultChecked={props.methodOfCalc === "download_files" ? true : false}
        />
        <label htmlFor="download_files">
          <i className={["fas", "fa-download", classes.Icon].join(" ")} />
          Dateien hochladen
        </label>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    methodOfCalc: state.wordsCounter.method
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setMethod: evt => {
      dispatch(setMethodOfCalcWords(evt.target.value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MethodCheck);
