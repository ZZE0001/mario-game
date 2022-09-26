import React from "react";
import mario from "../assets/mario.png";
import marioRun from "../assets/marioRun.gif";
import marioJump from "../assets/marioJump.png";
import { useMarioController } from "../hooks/useMarioController";

interface IMarioProps {
  state?: "STILL" | "RUN" | "JUMP";
  style?: React.CSSProperties;
}

export const Mario: React.FC<IMarioProps> = ({ state = "STILL", style }) => {
  return (
    <img
      id="mario"
      src={{ STILL: mario, RUN: marioRun, JUMP: marioJump }[state]}
      style={style}
      alt=""
      draggable={false}
    ></img>
  );
};
