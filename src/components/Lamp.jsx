/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 lamp.glb --transform --simplify
Author: chris_models (https://sketchfab.com/chris_models)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lamp-02-lowpoly-0f5519beb6644e5ea714055382c20d5f
Title: Lamp_02 lowpoly
*/
import { useGLTF } from "@react-three/drei";

export default function Lamp(props) {
  const { nodes, materials } = useGLTF("/lamp-transformed.glb");
  return (
    <group {...props} dispose={null} position={[0.2, 3, 0]}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.re_lamp_02}
        position={[0, 0.09, -0.24]}
      />
    </group>
  );
}

useGLTF.preload("/lamp-transformed.glb");
