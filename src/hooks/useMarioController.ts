import React, { useEffect, useState } from "react";
import { BG_MAX_HEIGHT } from "../constants/constants";
import { useEventListener } from "./utils/useEventListener";

export const useMarioController = () => {
  const [marioX, setMarioX] = useState(0);
  const [marioY, setMarioY] = useState(BG_MAX_HEIGHT);
  const [speedY, setSpeedY] = useState(0);
  const [direction, setDirection] = useState<"RIGHT" | "LEFT">("RIGHT");

  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  useEventListener("keydown", onKeyDown);
  useEventListener("keyup", onKeyUp);

  useEffect(() => {
    const interval = setInterval(() => {
      // run
      if (rightPressed) {
        setMarioX((prevState) => prevState + 10);
      } else if (leftPressed) {
        setMarioX((prevState) => prevState - 10);
      }

      // jump
      setMarioY((prevState) =>
        prevState - speedY > BG_MAX_HEIGHT ? BG_MAX_HEIGHT : prevState - speedY
      );
      setSpeedY((prevState) => prevState - 2);
    }, 30);
    return () => clearInterval(interval);
  }, [speedY, marioY, leftPressed, rightPressed]);

  function onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      setSpeedY(20);
    }

    if (event.keyCode === 39) {
      setRightPressed(true);
      setDirection("RIGHT");
    }
    if (event.keyCode === 37) {
      setLeftPressed(true);
      setDirection("LEFT");
    }
  }

  function onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 39) setRightPressed(false);
    if (event.keyCode === 37) setLeftPressed(false);
  }

  return { marioX, marioY, direction, leftPressed, rightPressed };
};
