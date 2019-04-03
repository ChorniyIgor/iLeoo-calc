import React from "react";
import classes from "./LangChangeSection.css";
import { connect } from "react-redux";
import Select from "react-select";
import {
  setSourceLanguage,
  setTargetLanguage,
  addNewTargetLang
} from "../../../redux/actions/languages";

const LangChangeSection = props => {
  return (
    <section className={classes.LangChangeSection}>
      <div className={classes.LangChangeSectionNumb}>
        <i>1</i>
        <span>Sprache wählen</span>
      </div>

      <Select
        options={props.sourceLanguages}
        onChange={props.setSourceLanguage}
        className={classes.Select}
        defaultValue={props.source ? { label: props.source, value: props.source } : null}
      />

      {props.targetLanguagesItems.map((item, i) => {
        return (
          <Select
            name={i}
            key={i}
            options={props.targetLanguages}
            onChange={props.setTargetLanguage}
            className={classes.Select}
            defaultValue={item ? { label: item, value: item } : null}
          />
        );
      })}

      <input
        type="button"
        value="Add new target lang"
        onClick={props.addNewTargetLang}
        className={classes.AddLangBtn}
      />
      <span className={classes.Security}>Sicherheitsgarantie</span>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    source: state.languages.source,
    sourceLanguages: state.languages.sourceLanguages,
    targetLanguages: state.languages.targetLanguages,
    targetLanguagesItems: state.languages.targetLanguagesItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSourceLanguage: evt => {
      dispatch(setSourceLanguage(evt.value));
    },
    setTargetLanguage: (evt, select) => {
      dispatch(setTargetLanguage(evt.value, select.name));
    },
    addNewTargetLang: () => {
      dispatch(addNewTargetLang());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangChangeSection);
