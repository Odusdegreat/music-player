import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const DisplayAlbum = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <NavBar />
    </>
  );
};

export default DisplayAlbum;
