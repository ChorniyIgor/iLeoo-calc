import React from "react";
import LangChangeSection from "./LangChangeSection/LangChangeSection";
import WordsCounterSection from "./WordsCounterSection/WordsCounterSection";
import PriceSection from "./PriceSection/PriceSection";

const CalculatorScreen = props => {
  return (
    <React.Fragment>
      <LangChangeSection />
      <WordsCounterSection />
      <PriceSection />
    </React.Fragment>
  );
};
export default CalculatorScreen;
