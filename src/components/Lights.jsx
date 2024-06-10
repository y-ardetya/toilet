import { useControls } from "leva";

const Lights = () => {
  const { position } = useControls("Lights", {
    position: {
      value: [0, 5.2, 0],
      step: 0.1,
    },
  });
  return (
    <>
      <ambientLight intensity={1.5} color="orange" />
      <spotLight intensity={10} position={position} color="orange" />
    </>
  );
};

export default Lights;
