import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

const TrailingLight = () => {
  const ref = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    ref.current.position.x = ref.current.position.x +=
      (state.mouse.x * viewport.width - ref.current.position.x) * delta;
    ref.current.position.y = ref.current.position.y +=
      (-state.mouse.y * viewport.height - ref.current.position.y) * delta;
    ref.current.position.z = ref.current.position.z +=
      (-state.mouse.y * viewport.height - ref.current.position.z) * delta;
  });
  return <pointLight ref={ref} intensity={0.1} color="red" />;
};

export default TrailingLight;
