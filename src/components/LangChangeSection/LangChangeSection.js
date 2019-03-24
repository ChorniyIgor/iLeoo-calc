import React from "react";
const sourceLanguages = [
  "Arabisch",
  "Bosnisch",
  "Bulgarisch",
  "Chinesisch",
  "Deutsch",
  "Dänisch",
  "Estnisch",
  "Finnisch",
  "Französisch",
  "Griechisch",
  "Italienisch",
  "Japanisch",
  "Kasachisch",
  "Katalanisch",
  "Koreanisch",
  "Kroatisch",
  "Lettisch",
  "Litauisch",
  "Mazedonisch",
  "Montenegrinisch",
  "Niederländisch",
  "Polnisch",
  "Portugiesisch",
  "Rumänisch",
  "Russisch",
  "Schwedisch",
  "Serbisch",
  "Slowakisch",
  "Slowenisch",
  "Spanisch",
  "Tschechisch",
  "Türkisch",
  "Ukrainisch",
  "Ungarisch"
];

const targetLanguage = [
  "Arabisch",
  "Bosnisch",
  "Bulgarisch",
  "Chinesisch (traditionell)",
  "Chinesisch (vereinfacht)",
  "Deutsch",
  "Dänisch",
  "Estnisch",
  "Finnisch",
  "Franz. (Belgien)",
  "Französisch",
  "Griechisch",
  "Italienisch",
  "Japanisch",
  "Kasachisch",
  "Katalanisch",
  "Koreanisch",
  "Kroatisch",
  "Lettisch",
  "Litauisch",
  "Mazedonisch",
  "Montenegrinisch",
  "Niederländisch (Belgien)",
  "Niederländisch (Niederlande)",
  "Polnisch",
  "Portugiesisch (Brasilien)",
  "Portugiesisch (Portugal)",
  "Rumänisch",
  "Russisch",
  "Schwedisch",
  "Serbisch",
  "Slowakisch",
  "Slowenisch",
  "Spanisch (Argentinien)",
  "Spanisch (Mexiko)",
  "Spanisch (Spanien)",
  "Tschechisch",
  "Türkisch",
  "Ukrainisch",
  "Ungarisch"
];

export default props => {
  return (
    <div>
      <select data-placeholder="Ausgangssprache" tabIndex="2">
        <option value="error">Ausgangssprache</option>
        {sourceLanguages.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select data-placeholder="Zielsprache" tabIndex="3">
        <option value="error">Zielsprache</option>
        {targetLanguage.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
