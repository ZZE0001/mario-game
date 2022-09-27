import React, { createContext, useContext, useMemo } from "react";
import { useMarioController } from "../hooks/useMarioController";

type MarioContextType = ReturnType<typeof useMarioController>;

const MarioContext = createContext<MarioContextType>(undefined!);

export const MarioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // state
  const controller = useMarioController();

  // value passed to context consumer
  const value: MarioContextType = useMemo(() => {
    return {
      ...controller,
    };
  }, [controller]);

  return (
    <MarioContext.Provider value={value}>{children}</MarioContext.Provider>
  );
};

export const useMarioContext = () => {
  const context = useContext(MarioContext);

  if (!context) {
    throw new Error(`useMarioContext must be used within a MarioProvider`);
  }

  return context;
};
