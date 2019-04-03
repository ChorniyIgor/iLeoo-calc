import React from "react";
import classes from "./Methods.css";
import { connect } from "react-redux";
import {
  addFiles,
  addTypedText,
  changeWordCountInput
} from "../../../../redux/actions/wordsCounter";
import Textarea from "../../../../hoc/Textarea/Textarea";
import Input from "../../../../hoc/Input/Input";

import DownloadFilesMethod from "./DownloadFilesMethod/DownloadFilesMethod";
const Method = props => {
  return (
    <div className={classes.Methods}>
      {props.methodOfCalc === "number_of_words" ? (
        <div>
          <label className={classes.MethodsInputWrap}>
            <Input
              placeholder="Wortzahl"
              type="number"
              name="words"
              id="words1"
              tabIndex="1"
              defaultValue={props.wordsCountInput}
              min="0"
              onInput={evt => {
                props.changeWordCountInput(evt.target.value);
              }}
            />
          </label>
        </div>
      ) : null}

      {props.methodOfCalc === "text_input" ? (
        <div id="countSimbol">
          <Textarea
            name="text_input"
            placeholder="Text eingeben..."
            id="input_textarea"
            defaultValue={props.textInput.contents}
            className={classes.Textarea}
            onInput={evt => {
              props.addTypedText(evt.target.value);
            }}
          />
          <label>
            <span className={classes.MethodsWordsRes}>
              Total: {props.textInput.wordsCount} Wörter
            </span>
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
