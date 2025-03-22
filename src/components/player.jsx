import React from "react";
import { songsData } from "../assets/assets";
import { FaCirclePlay } from "react-icons/fa6";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";
import { PiShuffleLight } from "react-icons/pi";
import { LuSquarePlay } from "react-icons/lu";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { TbVolume } from "react-icons/tb";
import { CgMiniPlayer } from "react-icons/cg";

const player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <PiShuffleLight size={25} />
          <RxTrackPrevious size={25} />
          <FaCirclePlay size={30} />
          <RxTrackNext size={25} />
          <SlLoop size={25} />
        </div>
        <div className="flex items-center gap-5">
          <p>1:20</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-80 bg-green-800 rounded-full"></hr>
          </div>
          <p>2:39</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <LuSquarePlay size={25} />
        <TbMicrophone2 size={25} />
        <HiOutlineQueueList size={25} />
        <LuMonitorSpeaker size={25} />
        <TbVolume size={25} />
        <div className="w-20 bg-slate-50 h-1 rounded" />
        <CgMiniPlayer size={25} />
      </div>
    </div>
  );
};

export default player;
