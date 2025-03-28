import { createContext } from "react";

const Player = createContext();

const PlayerContextProvider = () => {
  const contextValue = {};
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
