import React, { useContext } from "react";
import Sidebar from "./components/SidebarNew.jsx";
import Player from "./components/Player.jsx";
import Display from "./components/DisplayNew.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search.jsx";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>

      <Routes>
        <Route path="/search" element={<Search />} />
        {/* other routes */}
      </Routes>
    </div>
  );
};

export default App;
