import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useStore } from "./store/store";

const Effect = () => {
  const { enableBloom } = useStore();

  return (
    <EffectComposer>
      <Vignette offset={0.3} darkness={0.9} />
      <Bloom mipmapBlur luminanceThreshold={enableBloom ? 0.9 : 1.5} />
    </EffectComposer>
  );
};

export default Effect;
