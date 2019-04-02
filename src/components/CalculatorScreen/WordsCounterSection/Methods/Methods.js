import React from "react";
import classes from "./Methods.css";
import { connect } from "react-redux";
import {
  addFiles,
  addTypedText,
  changeWordCountInput
} from "../../../../redux/actions/wordsCounter";

import DownloadFilesMethod from "./DownloadFilesMethod/DownloadFilesMethod";
const Method = props => {
  return (
    <div className={classes.Methods}>
      {props.methodOfCalc === "number_of_words" ? (
        <div>
          <label>
            <input
              placeholder="Wortzahl"
              type="number"
              name="words"
              id="words1"
              tabIndex="1"
              value={props.wordsCountInput}
              onInput={evt => {
                props.changeWordCountInput(evt.target.value);
              }}
            />
          </label>
        </div>
      ) : null}

      {props.methodOfCalc === "text_input" ? (
        <div id="countSimbol">
          <textarea
            name="text_input"
            placeholder="Text eingeben..."
            id="input_textarea"
            cols={50}
            rows={10}
            value={props.textInput.contents}
            onInput={evt => {
              props.addTypedText(evt.target.value);
            }}
          />
          <label>
            Total:
            <h2>{props.textInput.wordsCount}</h2>
            <span>Wörter</span>
          </label>
        </div>
      ) : null}

      {props.methodOfCalc === "download_files" ? <DownloadFilesMethod /> : null}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    methodOfCalc: state.wordsCounter.method,
    wordsCountInput: state.wordsCounter.wordsCountInput,
    textInput: state.wordsCounter.textInput,
    files: state.wordsCounter.files
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeWordCountInput: count => {
      dispatch(changeWordCountInput(count));
    },
    addTypedText: text => {
      dispatch(addTypedText(text));
    },
    addFiles: files => {
      dispatch(addFiles(files));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Method);
