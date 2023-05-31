import React from "react";
import Cards from "../Cards/Cards";
import ContainerBox from "../ContainerBox/ContainerBox";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Cards />
      <ContainerBox />
    </div>
  );
};

export default MainDash;
