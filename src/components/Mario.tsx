import React from "react";
import mario from "../assets/mario.png";
import marioRun from "../assets/marioRun.gif";
import marioJump from "../assets/marioJump.png";
import { useMarioController } from "../hooks/useMarioController";
import { useMarioContext } from "../contexts/MarioContext";

interface IMarioProps {}

type TState = "STILL" | "RUN" | "JUMP";

export const Mario: React.FC<IMarioProps> = ({}) => {
  const { marioX, marioY, direction, rightPressed, leftPressed } =
    useMarioContext();

  const state: TState = rightPressed || leftPressed ? "RUN" : "STILL";

  return (
    <img
      id="mario"
      src={{ STILL: mario, RUN: marioRun, JUMP: marioJump }[state]}
      style={{
        position: "absolute",
        top: marioY,
        left: marioX,
        transform: `scaleX(${direction === "RIGHT" ? 1 : -1})`,
      }}
      alt=""
      draggable={false}
    ></img>
  );
};
