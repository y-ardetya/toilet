import { Text } from "@react-three/drei";

const Vandal = () => {
  return (
    <>
      <Text
        font="/LosmentHunter-1G1ve.ttf"
        position={[-4.98, 1.62, -2.53]}
        rotation={[0, 1.52, 0]}
      >
        Look behind you !
      </Text>
      <Text
        font="/LosmentHunter-1G1ve.ttf"
        position={[0, -2.32, 3]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.4}
        maxWidth={6}
      >
        What dwells in the toilet? Curious? Go check it out!
        We offer creepy experiences for the whole family!
      </Text>
      <Text
        font="/LosmentHunter-1G1ve.ttf"
        position={[5.0, -0.20, 0.54]}
        rotation={[0, -1.52, 0]}
        fontSize={1.5}
      >
        YON STUDIO
      </Text>
    </>
  );
};

export default Vandal;
