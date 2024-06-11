import React from "react";
import Scary from "../Model/Scary";
import Mirror from "./Mirror";
import Card from "./Card";
import SecondRoom from "./SecondRoom";
import { useScroll } from "@react-three/drei";
import { useStore } from "../store/store";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const SecondScene = () => {
  const scroll = useScroll();
  const { setEnableBloom, enableBloom } = useStore();

  useFrame(() => {
    if (scroll.offset > 0.8 && enableBloom === false) {
      setEnableBloom(true);
    } else if (enableBloom === true) {
      setEnableBloom(false);
    }
  });

  // useEffect(() => {
  //   if (scroll.offset > 0.8 && enableBloom === false) {
  //     setEnableBloom(true);
  //   } else if (enableBloom === true) {
  //     setEnableBloom(false);
  //   }
  // }, [scroll.offset]);
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
