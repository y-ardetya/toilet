import Toilet from "./Toilet";
import {
  OrbitControls,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import Vandal from "./Vandal";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Experience = () => {
  const normalMap = useTexture("/texture2/normal.jpg");
  const roughnessMap = useTexture("/texture2/rough.jpg");
  const displacementMap = useTexture("/texture2/height.png");
  const color = useTexture("/texture2/color.jpg");
  const aoMap = useTexture("/texture2/ao.jpg");
  const metalMap = useTexture("/texture2/metal.jpg");

  return (
    <>
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 0, 14]} />
      <ambientLight intensity={1} />
      <spotLight
        intensity={10}
        penumbra={1.5}
        position={[-2, 2, 0]}
        color="orange"
        distance={Math.PI * 5}
      />
      <spotLight
        intensity={10}
        penumbra={1.5}
        position={[2, 2, 0]}
        color="orange"
        distance={Math.PI * 10}
      />
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-0.75, 0.75]}
        config={{ mass: 1, tension: 50 }}
        snap={{ mass: 1, tension: 50 }}
      >
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3.9, 1]}
          scale={[14, 14, 20]}
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
        <Vandal />
      </PresentationControls>
    </>
  );
};

export default Experience;
