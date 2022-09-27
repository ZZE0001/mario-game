import React from "react";
import { Mario } from "./components/Mario";
import { Map } from "./components/Map";
import { MarioProvider } from "./contexts/MarioContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <MarioProvider>
      <div className="app">
        <Map>
          <Mario />
        </Map>
      </div>
    </MarioProvider>
  );
};

export default App;
