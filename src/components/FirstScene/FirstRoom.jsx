import Walls from "../Walls";

const FirstRoom = () => {
  return (
    <>
      <Walls
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.9, 1]}
        scale={[20, 20, 20]}
      />

      <Walls
        scale={[20, 10, 10]}
        rotation={[0, 1.53, 0]}
        position={[-6.5, 2.53, 2.03]}
      />
      <Walls
        scale={[20, 10, 10]}
        rotation={[0, -1.53, 0]}
        position={[6.5, 2.53, 2.03]}
      />
    </>
  );
};

export default FirstRoom;
