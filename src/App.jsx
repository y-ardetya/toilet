import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import Effect from "./components/Effect";
import Mirror from "./components/Mirror";
import LoadingScreen from "./components/LoadingScreen";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          outputEncoding: "sRGB",
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0.7, 10.5]}
            fov={65}
            rotation={[0.01, 0, 0]}
          />
          <fog attach="fog" args={["#000", 3, 15]} />
          <ScrollControls pages={3} damping={0.3} distance={1}>
            <Scroll html>
              <Navbar />
            </Scroll>
            <Scroll>
              <Experience />
              <Effect />
            </Scroll>
            <Scroll>
              <Mirror />
              <Card />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
