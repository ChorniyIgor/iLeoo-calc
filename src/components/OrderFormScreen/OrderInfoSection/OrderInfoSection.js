import React from "react";
import { connect } from "react-redux";
import classes from "./OrderInfoSection.css";

const OrderInfoSection = props => {
  function getLanguagesList(languages) {
    return languages.source ? (
      <ul className={classes.LangList}>
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
      <ul className={classes.FilesList}>
        <h4>Files:</h4>
        {Object.keys(files).map((fileName, i) => {
          const fileInfo = files[fileName];
          return (
            <li key={i}>
              <span>{fileName} </span>
              <span>{fileInfo.wordsCount === "unknown" ? "Error" : fileInfo.wordsCount}</span>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className={classes.OrderInfoSection}>
      <h3>
        <span>1</span>Sprachpaar
      </h3>
      {getLanguagesList(props.languages)}
      <h3>
        <span>2</span>Angehangte Dateien
      </h3>
      {props.wordsCountInput > 0 ? (
        <span className={classes.wordsCountInfo}>Words count: {props.wordsCountInput}</span>
      ) : null}
      {props.textInput.contents.length > 0 ? (
        <div className={classes.InputTextContainer}>
          <h4>Text:</h4>
          <span className={classes.InputText}>{props.textInput.contents}</span>
        </div>
      ) : null}
      {Object.keys(props.files).length > 0 ? getFilesList(props.files) : null}
      <h3>
        <span>3</span>Eingeschhatfer Priez
      </h3>
      {props.totalPrice > 0 ? (
        <div className={classes.TotalText}>
          Total price <span>{props.totalPrice} €</span>
        </div>
      ) : null}
      <div className={classes.TotalText}>
        Price per word <span>{props.pricePerWord / 100} €/Wort</span>
      </div>
      {props.finalDate !== 0 ? (
        <div className={classes.TotalText}>
          Erhalten Sie Ihre Übersetzung bis zum {props.finalDate}
        </div>
      ) : null}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    languages: state.languages,
    pricePerWord: state.price.pricePerWord,
    totalPrice: state.price.totalPrice,
    finalDate: state.price.finalDate,
    method: state.wordsCounter.method,
    files: state.wordsCounter.files,
    textInput: state.wordsCounter.textInput,
    wordsCountInput: state.wordsCounter.wordsCountInput
  };
}
export default connect(mapStateToProps)(OrderInfoSection);
