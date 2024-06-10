import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

import Scene from "./components/Scene";
import Effect from "./components/Effect";

const App = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0.7, 10.5], fov: 65, rotation: [0.01, 0, 0] }}
        gl={{ antialias: false, toneMapping: THREE.AgXToneMapping }}
      >
        <Suspense fallback={null}>
          <Scene />
          {/* <Effect /> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
