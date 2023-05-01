import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Effect = () => {
  return (
    <EffectComposer>
      <Noise premultiply blendFunction={BlendFunction.ADD} />
      <Vignette eskil={false} offset={0.3} darkness={0.9} />
    </EffectComposer>
  );
};

export default Effect;
