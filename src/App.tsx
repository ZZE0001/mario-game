import React from "react";
import "./App.css";
import mario from "./assets/mario.png"; // with import

function App() {
  return (
    <div className="app">
      <img id="mario" src={mario}></img>
    </div>
  );
}

export default App;
