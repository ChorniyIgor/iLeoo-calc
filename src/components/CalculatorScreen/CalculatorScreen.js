import React from "react";
import LangChangeSection from "./LangChangeSection/LangChangeSection";
import WordsCounterSection from "./WordsCounterSection/WordsCounterSection";
import PriceSection from "./PriceSection/PriceSection";
import classes from "./CalculatorScreen.css";

const CalculatorScreen = props => {
  return (
    <div className={classes.CalculatorScreen}>
      <LangChangeSection />
      <WordsCounterSection />
      <PriceSection />
    </div>
  );
};
export default CalculatorScreen;
