import { Image, useScroll } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Card = () => {
  const group = useRef();
  const data = useScroll();

  useFrame(() => {
    group.current.children[0].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[1].material.zoom = 
      1 + data.range(0, 1 / 3) / 1;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[5].material.zoom =
      1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 1);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 1;
  });

  return (
    <>
      <group ref={group}>
        {[
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
          "/5.jpg",
          "/6.jpg",
          "/7.jpg",
        ].map((url, index) => (
          <Image
            key={url}
            position={[-11 + index * 3.5, -8 - index, -2]}
            scale={[3, 8, 1]}
            url={url}
          />
        ))}
      </group>
    </>
  );
};

export default Card;
