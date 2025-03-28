import { createContext, useRef } from "react";

export const PlayerContext = createContext(

    const audioRef = useRef();
);

const PlayerContextProvider = (props) => {
  const contextValue = {
    audioRef
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
