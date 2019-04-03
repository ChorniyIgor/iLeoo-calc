import React from "react";
import MetodthCheck from "./MethodsCheck/MethodsCheck";
import Methods from "./Methods/Methods";
import classes from "./WordsCounterSection.css";

export default props => {
  return (
    <section className={classes.WordsCounterSection}>
      <div className={classes.WordsCounterSectionNumb}>
        <i>2</i>
        <span>Anzahl der Wörter</span>
      </div>
      <MetodthCheck />
      <Methods />
    </section>
  );
};
