import Toilet from "../Model/Toilet";
import { PresentationControls, Image } from "@react-three/drei";
import Vandal from "./Vandal";
import Lamp from "../Model/Lamp";
import blood from "../../assets/blood.svg";
import Room from "./Room";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight intensity={2} position={[0.2, 5.2, 0]} color="orange" />
      <PresentationControls
        polar={[-0.3, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 1, tension: 50 }}
        snap={{ mass: 2, tension: 75 }}
      >
        <Room />

        <Toilet />
        <Image
          url={blood}
          position={[5.15, -0.2, 0.54]}
          rotation={[0, -1.537, 0]}
          scale={5}
          transparent
          opacity={0.5}
        />
        <Lamp />
        <Vandal />
      </PresentationControls>
    </>
  );
};

export default Experience;
