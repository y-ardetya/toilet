import { Text } from "@react-three/drei";
import Mask from "../Model/Mask";

const Mirror = () => {
  return (
    <>
      <Mask position={[0, -13, 0]} />
      <Text position={[0, -13, 3]} font="/LosmentHunter-1G1ve.ttf">
        BOOOOOO
      </Text>
    </>
  );
};

export default Mirror;
