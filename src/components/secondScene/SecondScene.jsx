import React from "react";
import Scary from "../Model/Scary";
import Mirror from "./Mirror";
import Card from "./Card";
import SecondRoom from "./SecondRoom";

const SecondScene = () => {
  return (
    <>
      <Scary />
      <Mirror />
      <Card />
      <SecondRoom />
    </>
  );
};

export default SecondScene;
