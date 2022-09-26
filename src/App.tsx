import React from "react";
import { Mario } from "./components/Mario";
import { useMarioController } from "./hooks/useMarioController";
import "./App.css";

const App: React.FC = () => {
  const { marioX, marioY, direction, rightPressed, leftPressed } =
    useMarioController();

  return (
    <div className="app">
      <Mario
        state={rightPressed || leftPressed ? "RUN" : undefined}
        style={{
          position: "absolute",
          top: marioY,
          left: marioX,
          transform: `scaleX(${direction === "RIGHT" ? 1 : -1})`,
        }}
      />
    </div>
  );
};

export default App;
