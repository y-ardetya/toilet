import image from "../assets/3.jpg";
import { useTexture } from "@react-three/drei";

const StackCard = ({ ...props }) => {
  return (
    <>
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial {...props} />
      </mesh>
    </>
  );
};

const Card = () => {
  const textureLoader = useTexture(image);
  return (
    <>
      <StackCard
        position={[-10, -13, -1]}
        scale={[3, 8, null]}
        map={textureLoader}
      />
      <StackCard
        position={[-6.5, -12, -1]}
        scale={[3, 8, null]}
        color="green"
      />
      <StackCard position={[-3, -14, -1]} scale={[3, 8, null]} color="blue" />
      <StackCard position={[0.5, -11, -1]} scale={[3, 8, null]} color="red" />
      <StackCard position={[4, -12, -1]} scale={[3, 8, null]} color="green" />
      <StackCard position={[7.5, -13, -1]} scale={[3, 8, null]} color="blue" />
      <StackCard
        position={[11, -12, -1]}
        scale={[3, 8, null]}
        color="hotpink"
      />
    </>
  );
};

export default Card;
