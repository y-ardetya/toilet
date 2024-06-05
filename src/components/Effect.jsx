import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Effect = () => {
  return (
    <EffectComposer>
      <Noise premultiply blendFunction={BlendFunction.ADD} />
      <Vignette eskil={false} offset={0.3} darkness={0.9} />
      <Bloom luminanceThreshold={1} luminanceSmoothing={0.2} height={600} />
    </EffectComposer>
  );
};

export default Effect;
