import { PresentationControls, Image } from "@react-three/drei";
import FirstRoom from "./FirstRoom";

import Vandal from "./Vandal";
import Lamp from "../Model/Lamp";
import Toilet from "../Model/Toilet";
import blood from "../../assets/blood.svg";
import { AdditiveBlending } from "three";

const FirstScene = () => {
  return (
    <>
      <PresentationControls
        polar={[-0.3, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 1, tension: 50 }}
        snap={{ mass: 2, tension: 75 }}
      >
        <FirstRoom />
        <Toilet />
        <Image
          url={blood}
          position={[5.63, -0.2, 0.54]}
          rotation={[0, -1.537, 0]}
          scale={5}
          transparent
          opacity={0.5}
        />
        <Vandal />
        <mesh scale={0.58} position-y={1.5}>
          <coneGeometry args={[5, 13, 32]} />
          <meshBasicMaterial
            color="orange"
            transparent
            opacity={0.2}
            blending={AdditiveBlending}
          />
        </mesh>
      </PresentationControls>
      <Lamp />
    </>
  );
};

export default FirstScene;
