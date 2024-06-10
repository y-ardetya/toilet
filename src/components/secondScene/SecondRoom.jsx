import { Text } from "@react-three/drei";
import { Blamp } from "../Model/Blamp";
import { Urinal } from "../Model/Urinal";
import Walls from "../Walls";

const SecondRoom = () => {
  return (
    <>
      <group position-y={12}>
        <Walls
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -47, 1]}
          scale={[20, 20, 20]}
        />

        <Walls
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -57, 1]}
          scale={[20, 20, 20]}
        />

        <Walls
          scale={[20, 10, 10]}
          rotation={[0, 1.53, 0]}
          position={[-10, -50.53, 2.03]}
        />
        <Walls
          scale={[20, 10, 10]}
          rotation={[0, -1.53, 0]}
          position={[10, -50.53, 2.03]}
        />
        <Urinal
          position={[-8, -55.3, -3]}
          scale={3}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Urinal
          position={[-8, -55.3, 0]}
          scale={3}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Urinal
          position={[-8, -55.3, 3]}
          scale={3}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Blamp position={[0, -55.3, 0]} scale={3} />
        <Text
          font="/LosmentHunter-1G1ve.ttf"
          position={[0, -35, 0]}
          rotation={[0, 0, 0]}
          fontSize={1.5}
        >
          YOU ARE NOT ALONE
        </Text>
        <Text
          font="/LosmentHunter-1G1ve.ttf"
          position={[0, -52, 0]}
          rotation={[0, 0, 0]}
          fontSize={1}
          maxWidth={10}
          anchorX={"center"}
          textAlign="center"
        >
          BRAVE ENOUGH TO LOOK BEHIND YOU ?
        </Text>
      </group>
    </>
  );
};

export default SecondRoom;
