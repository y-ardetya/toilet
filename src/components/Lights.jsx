const Lights = () => {
  return (
    <>
      <ambientLight intensity={10} />
      <pointLight intensity={2} position={[0, 5.2, 0]} color="orange" />
    </>
  );
};

export default Lights;
