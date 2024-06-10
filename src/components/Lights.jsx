import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="orange" />
      <pointLight intensity={10} position={[0, 5.2, 0]} color="orange" />
      <LightSource />
    </>
  );
};

export default Lights;

function LightSource() {
  const light = useRef();
  const light2 = useRef();
  const light3 = useRef();

  useFrame((state, delta) => {
    easing.damp3(
      light.current.position,
      [
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        1,
      ],
      0.4,
      delta
    );

    easing.damp3(
      light2.current.position,
      [
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        1.1,
      ],
      0.4,
      delta
    );

    easing.damp3(
      light3.current.position,
      [
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        1,
      ],
      0.4,
      delta
    );
  });

  return (
    <>
      <pointLight color={"white"} ref={light} intensity={2} />
      <pointLight color={"white"} ref={light2} intensity={3} />
      <pointLight color={"white"} ref={light3} intensity={2.5} />
    </>
  );
}
