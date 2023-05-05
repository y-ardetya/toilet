import { useTexture } from "@react-three/drei";
import gambar1 from "../assets/1.jpg";
import gambar2 from "../assets/2.jpg";
import gambar3 from "../assets/3.jpg";
import gambar4 from "../assets/4.jpg";
import gambar5 from "../assets/5.jpg";
import gambar6 from "../assets/6.jpg";
import gambar7 from "../assets/7.jpg";

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
  const textureLoader = useTexture(gambar1);
  const textureLoader2 = useTexture(gambar2);
  const textureLoader3 = useTexture(gambar3);
  const textureLoader4 = useTexture(gambar4);
  const textureLoader5 = useTexture(gambar5);
  const textureLoader6 = useTexture(gambar6);
  const textureLoader7 = useTexture(gambar7);

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
        map={textureLoader2}
      />
      <StackCard
        position={[-3, -14, -1]}
        scale={[3, 8, null]}
        map={textureLoader3}
      />
      <StackCard
        position={[0.5, -11, -1]}
        scale={[3, 8, null]}
        map={textureLoader4}
      />
      <StackCard
        position={[4, -12, -1]}
        scale={[3, 8, null]}
        map={textureLoader5}
      />
      <StackCard
        position={[7.5, -13, -1]}
        scale={[3, 8, null]}
        map={textureLoader6}
      />
      <StackCard
        position={[11, -12, -1]}
        scale={[3, 8, null]}
        map={textureLoader7}
      />
    </>
  );
};

export default Card;
