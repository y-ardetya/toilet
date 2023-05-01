import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Effect from "./components/Effect";
import Mirror from "./components/Mirror";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return (
    <>
      <Navbar />
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
          <fog attach="fog" args={["#000", 1, 14]} />
          <ScrollControls pages={2} damping={0.5}>
            <Scroll>
              <Experience />
              <Effect />
            </Scroll>
            <Scroll>
              <Mirror />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
