import Toilet from "./Toilet";
import { PresentationControls, useTexture } from "@react-three/drei";
import Vandal from "./Vandal";

const Experience = () => {
  const normalMap = useTexture("/texture/normal.jpg");
  const roughnessMap = useTexture("/texture/rough.jpg");
  const displacementMap = useTexture("/texture/height.png");
  const color = useTexture("/texture/color.jpg");
  const aoMap = useTexture("/texture/ao.jpg");
  const metalMap = useTexture("/texture/metal.jpg");

  return (
    <>
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
        polar={[-0.3, 0.2]}
        azimuth={[-0.6, 0.6]}
        config={{ mass: 1, tension: 50 }}
        snap={{ mass: 1, tension: 50 }}
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
        <Vandal />
      </PresentationControls>
    </>
  );
};

export default Experience;
