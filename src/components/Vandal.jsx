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
        position={[0, -2.32, 3.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.4}
        maxWidth={8}
        anchorX={"center"}
        anchorY={"middle"}
      >
        "Delve into the darkest corners of the human psyche and uncover chilling tales that will haunt your dreams - welcome to X, where nightmares become reality and the line between fiction and terror blurs."
      </Text>
      <Text
        font="/LosmentHunter-1G1ve.ttf"
        position={[5.13, -0.20, 0.54]}
        rotation={[0, -1.537, 0]}
        fontSize={1.5}
      >
        YON STUDIO
      </Text>
    </>
  );
};

export default Vandal;
