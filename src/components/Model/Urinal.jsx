/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Yaiyeondurising (https://sketchfab.com/5Life)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/silent-hill-2-urinal-toilet-dirty-482b268cdac2414087fec61644ecb2e6
Title: Silent Hill 2 Urinal Toilet Dirty
*/

import { useGLTF } from "@react-three/drei";

export function Urinal(props) {
  const { nodes, materials } = useGLTF("/urinal.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.034}>
        <mesh
          geometry={nodes.s4studio_mesh_1_1.geometry}
          material={materials.DIFFUSE}
          position={[-0.036, 0.005, -0.017]}
          rotation={[0.018, 0.01, 0]}
          scale={1.006}
        />
        <mesh
          geometry={nodes.s4studio_mesh_1001_0.geometry}
          material={materials["DIFFUSE.001"]}
          position={[-0.022, -0.36, -0.032]}
          rotation={[1.61, 0.01, -0.001]}
          scale={0.559}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/urinal.glb");