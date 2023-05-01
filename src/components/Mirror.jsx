import { Text } from "@react-three/drei";
import Mask from "./Mask";

const Mirror = () => {
  return (
    <>
      <Mask position={[0, -12, 0]} />
      <Text position={[0, -12, 4]} font="/LosmentHunter-1G1ve.ttf">
        BOOOOOO
      </Text>
    </>
  );
};

export default Mirror;
