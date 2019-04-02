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
        />
        <label htmlFor="number_of_words">Wortzahl</label>
      </div>
      <div>
        <input type="radio" name="method_of_calculation" value="text_input" id="text_input" />
        <label htmlFor="text_input">Text eingeben</label>
      </div>
      <div>
        <input
          type="radio"
          name="method_of_calculation"
          value="download_files"
          id="download_files"
        />
        <label htmlFor="download_files">Dateien hochladen</label>
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
