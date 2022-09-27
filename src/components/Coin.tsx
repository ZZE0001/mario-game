import React, { useEffect, useRef } from "react";
import { BLOCK_HEIGHT, BLOCK_WIDTH } from "../constants/constants";
import { useMarioContext } from "../contexts/MarioContext";
import coin from "../assets/coin.png";

interface ICoinProps {
  x: number;
  y: number;
}

export const Coin: React.FC<ICoinProps> = ({ x, y }) => {
  const { marioX, marioY } = useMarioContext();

  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // mario collects coin
    const y = ref.current?.offsetTop ?? 0;
    const x = ref.current?.offsetLeft ?? 0;

    if (
      marioX + 60 > x &&
      marioX + 60 < x + 45 &&
      marioY + 70 > y - 20 &&
      marioY + 70 < y + 70
    ) {
      ref.current?.remove();
    }
  }, [marioX, marioY]);

  return (
    <img
      className="coin"
      src={coin}
      ref={ref}
      style={{
        position: "absolute",
        top: y * BLOCK_HEIGHT,
        left: x * BLOCK_WIDTH,
      }}
      alt=""
      draggable={false}
    ></img>
  );
};
