import { Canvas } from "@react-three/fiber";
import Experience from "./components/First/Experience";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Suspense } from "react";
import Effect from "./components/Effect";
import Mirror from "./components/Second/Mirror";
import Card from "./components/Second/Card";
import Navbar from "./components/First/Navbar";
import Monster from "./components/Second/Monster";

const App = () => {
  return (
    <>
      <Canvas gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0.7, 10.5]}
            fov={65}
            rotation={[0.01, 0, 0]}
          />
          <fog attach="fog" args={["#000", -2, 18]} />
          <ScrollControls pages={3} damping={0.3} distance={1.2}>
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
              <Monster />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
