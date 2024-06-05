/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mask.glb -T -S -K
Author: shimtimultimedia (https://sketchfab.com/shimtimultimedia)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/horror-mask-scarecrow-01d803a1bf5849b99b1888148e4022de
Title: Horror Mask Scarecrow
*/

import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";

export default function Mask(props) {
  const { nodes, materials } = useGLTF("/mask-transformed.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <group
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.3}
          position={[0, 0, -0.1]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group>
              <group scale={1.8}>
                <mesh geometry={nodes.horror_mask_mask_0.geometry}>
                  <MeshTransmissionMaterial
                    ior={1.2}
                    thickness={1.5}
                    anisotropy={0.1}
                    chromaticAberration={0.04}
                  />
                </mesh>
                <mesh geometry={nodes.horror_mask_liner_0.geometry}>
                  <MeshTransmissionMaterial
                    ior={1.2}
                    thickness={1.5}
                    anisotropy={0.1}
                    chromaticAberration={0.04}
                  />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mask-transformed.glb");
