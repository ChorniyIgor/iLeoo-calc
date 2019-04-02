import React from "react";
import MetodthCheck from "./MethodsCheck/MethodsCheck";
import Methods from "./Methods/Methods";
import classes from "./WordsCounterSection.css";

export default props => {
  return (
    <section className={classes.WordsCounterSection}>
      <i>2</i>
      <p>Anzahl der Wörter</p>
      <MetodthCheck />
      <Methods />
    </section>
  );
};
