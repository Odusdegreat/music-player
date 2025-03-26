import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumsData = albumsData[id];
  console.log(albumsData);
  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col"></div>
    </>
  );
};

export default DisplayAlbum;
