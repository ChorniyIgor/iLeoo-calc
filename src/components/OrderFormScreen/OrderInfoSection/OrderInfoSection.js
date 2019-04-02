import React from "react";
import { connect } from "react-redux";
import classes from "./OrderInfoSection.css";

const OrderInfoSection = props => {
  function getLanguagesList(languages) {
    return languages.source ? (
      <ul>
        {languages.targetLanguagesItems.map((item, i) => {
          return item ? (
            <li key={i}>
              {languages.source} - {item}
            </li>
          ) : null;
        })}
      </ul>
    ) : null;
  }
  function getFilesList(files) {
    return (
      <ul>
        {Object.keys(files).map((fileName, i) => {
          const fileInfo = files[fileName];
          return (
            <li key={i}>
              <span>{fileName} </span>
              <span>
                | {fileInfo.wordsCount === "unknown" ? "неможливо визначити" : fileInfo.wordsCount}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className={classes.OrderInfoSection}>
      <h3>1. Sprachpaar</h3>
      {getLanguagesList(props.languages)}
      <h3>2. Angehangte Dateien</h3>
      {props.wordsCountInput > 0 ? <span>Words count: {props.wordsCountInput}</span> : null}
      <br />
      {props.textInput.contents.length > 0 ? (
        <span>
          Text: <br />
          {props.textInput.contents}
        </span>
      ) : null}
      <br />
      {}
      <br />
      {Object.keys(props.files).length > 0 ? <span>Files: {getFilesList(props.files)}</span> : null}
      <h3>3. Eingeschhatfer Priez</h3>
      <span>total price {props.totalPrice}</span>
      <br />
      <span>price per word {props.pricePerWord / 100}</span>
      <br />
      <span>Erhalten Sie Ihre Übersetzung bis zum</span>
      <br />
      <span>{props.finalDate}</span>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    languages: state.languages,
    pricePerWord: state.price.pricePerWord,
    totalPrice: state.price.totalPrice,
    finalDate: state.price.finalDate,
    files: state.wordsCounter.files,
    textInput: state.wordsCounter.textInput,
    wordsCountInput: state.wordsCounter.wordsCountInput
  };
}
export default connect(mapStateToProps)(OrderInfoSection);
