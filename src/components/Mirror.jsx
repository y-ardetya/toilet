import { Text } from "@react-three/drei";
import Mask from "./Mask";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SpinningCube = (props) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} {...props}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const Mirror = (props) => {
  return (
    <>
      <Mask position={[0, -13, 0]} />
      <Text position={[0, -13, 3]} font="/LosmentHunter-1G1ve.ttf">
        BOOOOOO
      </Text>
      <SpinningCube position={[5, -15, 0]} scale={1} />
      <SpinningCube position={[-7, -12, 0]} scale={1} />
      <SpinningCube position={[5, -6, 0]} scale={1} />
      <SpinningCube position={[3, -9, -2]} scale={1} />
    </>
  );
};

export default Mirror;
