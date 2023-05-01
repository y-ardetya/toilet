import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Effect from "./components/Effect";
import Mirror from "./components/Mirror";

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
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 1, 10]}
            fov={65}
            rotation={[0, 0, 0]}
            //rotation={[-0.2, 0, 0]}
          />
          <color attach="background" args={["#000"]} />
          <fog attach="fog" args={["#000", 0, 14]} />
          <Perf position="bottom-left" />
          <ScrollControls pages={2} damping={0.4}>
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
