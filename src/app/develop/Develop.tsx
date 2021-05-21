import React from "react";
import Navbar from "../home/Nav/Navbar";
import "./develop.css";
import Terminal from "./Terminal";
import Description from "./Description";
import Stack from "./Stack";
import Portfolio from "./Portfolio"

const Develop = () => {
  return (
    <>
      <Navbar />
      <Terminal />
      <Description />
      <Stack />
      <Portfolio />
    </>
  );
};

export default Develop;
