import React from "react";
import classes from "./LangChangeSection.css";
import { connect } from "react-redux";
import Select from "react-select";
import {
  setSourceLanguage,
  setTargetLanguage,
  addNewTargetLang,
  deleteTargetLang
} from "../../../redux/actions/languages";

const LangChangeSection = props => {
  const colourStyles = {
    dropdownIndicator: styles => ({
      ...styles,
      color: "white"
    }),
    control: styles => ({
      ...styles,
      backgroundColor: "#EB7D13",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none"
    }),
    menu: styles => ({
      ...styles,
      marginTop: "5px",
      backgroundColor: "white",
      borderRadius: "5px"
    }),
    menuList: styles => ({
      ...styles,
      border: "2px solid #EB7D13",
      paddingTop: "0px",
      paddingBottom: "0px",
      borderRadius: "5px",
      borderTopRightRadius: "3px",
      borderBottomRightRadius: "3px"
    }),
    placeholder: styles => ({
      ...styles,
      color: "white"
    }),
    singleValue: styles => ({
      ...styles,
      color: "white"
    }),
    option: styles => ({
      ...styles,
      color: "#6F6153",
      cursor: "pointer"
    })
  };
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
        styles={colourStyles}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#EB7D13",
            primary: "#EB7D13"
          }
        })}
        defaultValue={props.source ? { label: props.source, value: props.source } : null}
      />
      <i className={["fas", "fa-arrow-down", classes.ArrowDown].join(" ")} />
      {props.targetLanguagesItems.map((item, i) => {
        return (
          <div className={classes.SelectContainer} key={i}>
            <Select
              name={i}
              key={i}
              options={props.targetLanguages}
              onChange={props.setTargetLanguage}
              className={classes.Select}
              value={item ? { label: item, value: item } : null}
              styles={colourStyles}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#EB7D13",
                  primary: "#EB7D13"
                }
              })}
            />
            {i > 0 ? (
              <span
                className={classes.DeleteLang}
                onClick={() => {
                  props.deleteTargetLang(i);
                }}
              >
                <i className="fas fa-times" />
              </span>
            ) : null}
          </div>
        );
      })}

      {props.targetLanguagesItems.length < 5 ? (
        <button onClick={props.addNewTargetLang} className={classes.AddLangBtn}>
          + Add new target lang
        </button>
      ) : null}
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
    },
    deleteTargetLang: selectNumb => {
      dispatch(deleteTargetLang(selectNumb));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangChangeSection);
