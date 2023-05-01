import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Perf } from "r3f-perf";

const App = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>HOME</li>
          <li>STORY</li>
          <li>CONTACT</li>
          <li>EMAIL</li>
        </ul>
      </div>
      <Canvas
        gl={{
          antialias: true,
          outputEncoding: "sRGB",
          // physicallyCorrectLights: true,
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 2.5, 10]}
          fov={55}
          rotation={[0, 0.4, 0]}
        />
        <Perf />
        <Experience />
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.ADD} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
