import { Text } from "@react-three/drei";
import Mask from "./Mask";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Mirror = () => {
  const texRef = useRef();
  const [hovered, setHovered] = useState(false);

  //* use hovered to change color
  useFrame(() => {
    if (hovered) {
      texRef.current.color = "red";
    } else {
      texRef.current.color = "white";
    }
  });

  return (
    <>
      <Mask position={[0, -13, 0]} />
      <Text position={[0, -13, 3]} font="/LosmentHunter-1G1ve.ttf">
        BOOOOOO
      </Text>
      <Text
        position={[0, -16, 3]}
        font="/LosmentHunter-1G1ve.ttf"
        ref={texRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        Contribute to this site here
      </Text>
    </>
  );
};

export default Mirror;
