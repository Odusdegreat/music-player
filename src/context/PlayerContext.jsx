import { createContext } from "react";

const Player = createContext();

const PlayerContextProvider = () => {
  const contextValue = {};
  return <PlayerContext.Provider>{props.children}</PlayerContext.Provider>;
};
