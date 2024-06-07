import { Scroll, ScrollControls } from "@react-three/drei";
import Lights from "./Lights";
import FirstScene from "./FirstScene/FirstScene";
import SecondScene from "./secondScene/SecondScene";
import Navbar from "./Navbar";

const Scene = () => {
  return (
    <>
      <Lights />
      <fog attach="fog" args={["#000", -2, 18]} />
      <ScrollControls pages={5} damping={0.3} distance={1.2}>
        <Scroll html>
          <Navbar />
        </Scroll>
        <Scroll>
          <FirstScene />
          <SecondScene />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;
