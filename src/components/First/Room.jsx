import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping } from "three";

import { DoubleSide } from "three";

const Walls = ({ ...props }) => {
  const normalMap = useTexture("/texture/normal.jpg");
  const roughnessMap = useTexture("/texture/rough.jpg");
  const displacementMap = useTexture("/texture/height.png");
  const color = useTexture("/texture/color.jpg");
  const aoMap = useTexture("/texture/ao.jpg");
  const metalMap = useTexture("/texture/metal.jpg");

  color.wrapS = MirroredRepeatWrapping;
  color.wrapT = MirroredRepeatWrapping;
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        {...props}
        side={DoubleSide}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        displacementMap={displacementMap}
        map={color}
        metalnessMap={metalMap}
        aoMap={aoMap}
        metalness={0.5}
      />
    </mesh>
  );
};

const Room = () => {
  return (
    <>
      <Walls
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.9, 1]}
        scale={[20, 20, 20]}
      />

      <Walls
        scale={[20, 10, 10]}
        rotation={[0, 1.53, 0]}
        position={[-6.5, 2.53, 2.03]}
      />
      <Walls
        scale={[20, 10, 10]}
        rotation={[0, -1.53, 0]}
        position={[6.5, 2.53, 2.03]}
      />
    </>
  );
};

export default Room;
