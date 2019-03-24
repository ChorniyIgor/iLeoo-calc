import React, { Component } from "react";
import LangChangeSection from "./components/LangChangeSection/LangChangeSection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Erhalten Sie Ihr Preisangebot</h2>
        <LangChangeSection />
      </div>
    );
  }
}

export default App;
