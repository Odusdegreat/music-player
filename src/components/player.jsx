import React from "react";
import { assets, songsData } from "../assets/assets";
import { FaCirclePlay } from "react-icons/fa6";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";

const player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <RxTrackPrevious size={30} />
          <FaCirclePlay size={30} />
          <RxTrackNext size={30} />
          <SlLoop size={30} />
        </div>
        <div className="flex items-center gap-5">
          <p>2:39</p>
          <div className="w-[60vw] max-w[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className=""></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default player;
