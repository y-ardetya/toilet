import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

const Effect = () => {
  return (
    <EffectComposer autoClear>
      <Vignette eskil={false} offset={0.3} darkness={0.9} />
      <Bloom mipmapBlur luminanceThreshold={1} />
    </EffectComposer>
  );
};

export default Effect;
