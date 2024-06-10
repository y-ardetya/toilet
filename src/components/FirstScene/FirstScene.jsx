import { useMemo } from "react";
import { AdditiveBlending, Color } from "three";
import { PresentationControls, Image } from "@react-three/drei";

import FirstRoom from "./FirstRoom";
import Vandal from "./Vandal";
import Lamp from "../Model/Lamp";
import Toilet from "../Model/Toilet";
import blood from "../../assets/blood.svg";

const FirstScene = () => {
  const uniforms = useMemo(
    () => ({
      color: { value: new Color("orange") },
      transparency: { value: 0.2 },
      edgeThickness: { value: 1 },
      mRefractionRatio: { value: 1.02 },
      mFresnelBias: { value: 0.2 },
      mFresnelPower: { value: 2.0 },
      mFresnelScale: { value: 1.0 },
    }),
    []
  );
  return (
    <>
      <PresentationControls
        polar={[-0.3, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 1, tension: 50 }}
        snap={{ mass: 2, tension: 75 }}
      >
        <FirstRoom />
        <Toilet />
        <Image
          url={blood}
          position={[5.63, -0.2, 0.54]}
          rotation={[0, -1.537, 0]}
          scale={5}
          transparent
          opacity={0.5}
        />
        <Vandal />
        <mesh scale={0.58} position-y={1.5}>
          <coneGeometry args={[5, 13, 32, 32]} />
          <shaderMaterial
            transparent={true}
            dithering={true}
            blending={AdditiveBlending}
            uniforms={uniforms}
            vertexShader={`
              varying vec2 vUv;
              varying vec3 vNormal;
              varying vec3 vViewPosition;
              
              void main() {
                vec3 transformedNormal = normalMatrix * normal;
                vNormal = normalize(transformedNormal);
                vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
                vViewPosition = -viewPosition.xyz;
                gl_Position = projectionMatrix * viewPosition;

                vUv = uv;
              }
        `}
            fragmentShader={`
              varying vec2 vUv;
              varying vec3 vNormal;
              varying vec3 vViewPosition;

              uniform vec3 color;           // Base color of the mesh
              uniform float transparency;    // Overall transparency of the mesh
              uniform float edgeThickness;  // Controls the thickness of the transparent edge
              #include <common>
              #ifdef DITHERING
              vec3 dithering( vec3 color ) {
              float grid_position = rand( gl_FragCoord.xy );
              vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
              dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
              return color + dither_shift_RGB;
              }
              vec4 dithering(vec4 color) {
              float grid_position = rand(gl_FragCoord.xy);
              vec4 dither_shift_RGBA = vec4(0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0, -0.25 / 255.0);
              dither_shift_RGBA = mix(2.0 * dither_shift_RGBA, -2.0 * dither_shift_RGBA, grid_position);
              return color + dither_shift_RGBA;
              }

              #endif

              void main() {
              // Calculate the dot product between the view direction and the surface normal
              float fresnel = abs(dot(vNormal, normalize(vViewPosition)));

              // Calculate alpha based on the Fresnel-like effect
              float alpha = mix( 0. , transparency , pow(fresnel, edgeThickness));
              alpha = alpha * smoothstep(0.6, 0.3, abs(0.5 - vUv.y));
              alpha = clamp(alpha,0.0,1.0);
              gl_FragColor = vec4(color, alpha);
              // gl_FragColor = vec4(vNormal , 1.0);

              #ifdef DITHERING
              gl_FragColor.rgba = dithering( gl_FragColor.rgba );
              #endif

              }
`}
          />
        </mesh>
      </PresentationControls>
      <Lamp />
    </>
  );
};

export default FirstScene;
