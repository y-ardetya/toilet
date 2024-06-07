import { Text } from "@react-three/drei";
import Mask from "../Model/Mask";

const Mirror = () => {
  return (
    <>
      <Mask position={[0, -13, 0]} />
      <Text
        scale={1}
        color={"white"}
        position={[0, -12.5, 1]}
        font="/LosmentHunter-1G1ve.ttf"
      >
        {`BOOOOO\nBOOOOO\nBOOOOO\nBOOOOO\nBOOOOO\nBOOOOO`}
      </Text>
    </>
  );
};

export default Mirror;
