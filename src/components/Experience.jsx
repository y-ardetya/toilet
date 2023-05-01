import Toilet from "./Toilet";
import { OrbitControls, Text, useTexture } from "@react-three/drei";

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
      <fog attach="fog" args={["#000", 0, 18]} />
      <ambientLight intensity={0.2} />
      <spotLight
        intensity={5}
        penumbra={0.9}
        position={[-5, 2, 0]}
        color="orange"
        distance={Math.PI * 6}
      />
      <spotLight
        intensity={5}
        penumbra={0.9}
        position={[5, 2, 0]}
        color="orange"
        distance={Math.PI * 8}
      />
      <OrbitControls enableZoom={false} />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.4, 1]}
        scale={[20, 20, 20]}
      >
        <planeGeometry args={[1, 1, 2.4, 2.4]} />
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
        <planeGeometry args={[1, 1, 2, 2]} />
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
        //position={[3.5, 1.6, 2.03]}
      >
        <planeGeometry args={[1, 1, 2, 2]} />
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
      <mesh position={[0, 0, -6]} scale={[10, 10, 10]}>
        <planeGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Toilet />
      <Text position={[0, 2, -1.3]}>WC UMUM</Text>
      <Text
        position={[0, -2.24, 3]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.4}
      >
        What dwells in the toilet?
      </Text>
    </>
  );
};

export default Experience;
