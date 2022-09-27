import React, { useMemo } from "react";
import { useMarioContext } from "../contexts/MarioContext";
import { Block } from "./Block";
import { Coin } from "./Coin";

interface IMapProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Map: React.FC<IMapProps> = ({ children }) => {
  // 8 x 20
  const mapBlueprint = [
    ".T.$...............$",
    "..##..............##",
    "................$...",
    "...........##..##...",
    ".....$$.....####....",
    "....#######.........",
    "....................",
    "S...............$$$Z",
  ];

  const map = useMemo(
    () =>
      mapBlueprint.map((y, indexY) => {
        const yArray = y.split("");

        return yArray.map((x, indexX) => {
          let char = mapBlueprint[indexY][indexX];

          if (char === "#")
            return <Block key={indexX + indexY} x={indexX} y={indexY} />;
          if (char === "$")
            return <Coin key={indexX + indexY} x={indexX} y={indexY} />;

          return null;
        });
      }),
    []
  );

  return (
    <>
      {map}
      {children}
    </>
  );
};
