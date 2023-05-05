import Toilet from "./Toilet";
import {
  PresentationControls,
  useTexture,
  useHelper,
  Image,
} from "@react-three/drei";
import Vandal from "./Vandal";
import Lamp from "./Lamp";
import { useRef } from "react";
import * as THREE from "three";
import blood from "../assets/blood.svg";

const Experience = () => {
  const normalMap = useTexture("/texture/normal.jpg");
  const roughnessMap = useTexture("/texture/rough.jpg");
  const displacementMap = useTexture("/texture/height.png");
  const color = useTexture("/texture/color.jpg");
  const aoMap = useTexture("/texture/ao.jpg");
  const metalMap = useTexture("/texture/metal.jpg");

  const spotLight = useRef();
  useHelper(spotLight, THREE.DirectionalLightHelper, "cyan");
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={10}
        penumbra={2}
        position={[0.2, 10, 0]}
        color="orange"
        distance={Math.PI * 3}
      />
      <directionalLight intensity={3} position={[0.2, 6, 0]} color="orange" />
      <PresentationControls
        polar={[-0.3, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 1, tension: 50 }}
        snap={{ mass: 2, tension: 75 }}
      >
        //*floor
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3.9, 1]}
          scale={[14, 14, 20]}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            side={2}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            map={color}
            metalnessMap={metalMap}
            aoMap={aoMap}
            metalness={0.5}
          />
        </mesh>
        //*walls
        <mesh
          scale={[20, 8, 10]}
          rotation={[0, 1.53, 0]}
          position={[-6, 1.5, 2.03]}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            map={color}
            metalnessMap={metalMap}
            aoMap={aoMap}
            metalness={0.5}
          />
        </mesh>
        <mesh
          scale={[20, 8, 10]}
          rotation={[0, -1.53, 0]}
          position={[6, 1.5, 2.03]}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            displacementMap={displacementMap}
            map={color}
            metalnessMap={metalMap}
            aoMap={aoMap}
            metalness={0.5}
          />
        </mesh>
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
