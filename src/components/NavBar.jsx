import React from "react";
import {} from "../assets/assets";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
const NavBar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <SlArrowLeft
            size={25}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
          <SlArrowRight
            size={25}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
