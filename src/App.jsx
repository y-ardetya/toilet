import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { PerspectiveCamera } from "@react-three/drei";

import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Effect from "./components/Effect";

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
            rotation={[-0.2, 0, 0]}
          />
          <Perf position="bottom-left" />

          <Experience />
          <Effect />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
