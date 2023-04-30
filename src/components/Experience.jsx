import React from "react";
import Toilet from "./Toilet";
import { OrbitControls, Text, useTexture } from "@react-three/drei";

const Experience = () => {
  const normalMap = useTexture("/texture/normal.jpg");
  const roughnessMap = useTexture("/texture/rough.jpg");
  const displacementMap = useTexture("/texture/displace.png");
  const diffuseMap = useTexture("/texture/diff.jpg");

  return (
    <>
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 1, 18]} />
      <ambientLight intensity={1} />
      <spotLight
        intensity={100}
        penumbra={1}
        position={[0, 3.5, 0]}
        color="orange"
        distance={Math.PI * 8}
      />
      <OrbitControls enableZoom={false} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <planeGeometry args={[25, 25, 2, 2]} />
        <meshStandardMaterial
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          map={diffuseMap}
        />
      </mesh>
      <Toilet />
      <Text position={[0, 2, -1.3]}>WC UMUM</Text>
      <Text
        position={[-3, -1.9, 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.3}
        color="gray"
      >
        Born to shit, forced to siram
      </Text>
    </>
  );
};

export default Experience;
