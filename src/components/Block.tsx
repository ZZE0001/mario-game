import React, { useEffect, useRef } from "react";
import { BLOCK_HEIGHT, BLOCK_WIDTH } from "../constants/constants";
import { useMarioContext } from "../contexts/MarioContext";
import block from "../assets/block.png";

interface IBlockProps {
  x: number;
  y: number;
}

export const Block: React.FC<IBlockProps> = ({ x, y }) => {
  const { marioX, marioY, setMarioY, setSpeedY } = useMarioContext();

  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // make mario jump on blocks
    const y = ref.current?.offsetTop ?? 0;
    const x = ref.current?.offsetLeft ?? 0;

    if (
      marioX + 60 > x &&
      marioX + 60 < x + 45 &&
      marioY + 100 > y &&
      marioY + 100 < y + 70
    ) {
      setMarioY(y - 100);
      setSpeedY(0);
    }
  }, [marioX, marioY]);

  return (
    <img
      className="block"
      src={block}
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
