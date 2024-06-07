import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping, DoubleSide } from "three";

const Walls = ({ ...props }) => {
  const [normal, roughness, displacement, color, ao, metal] = useTexture([
    "/texture/normal.jpg",
    "/texture/rough.jpg",
    "/texture/height.png",
    "/texture/color.jpg",
    "/texture/ao.jpg",
    "/texture/metal.jpg",
  ]);

  color.wrapS = MirroredRepeatWrapping;
  color.wrapT = MirroredRepeatWrapping;
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        {...props}
        side={DoubleSide}
        normalMap={normal}
        roughnessMap={roughness}
        displacementMap={displacement}
        map={color}
        metalnessMap={metal}
        aoMap={ao}
        metalness={0.5}
      />
    </mesh>
  );
};

export default Walls;
