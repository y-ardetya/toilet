import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const LoadingScreen = () => {
  const { active, progress } = useProgress();
  useEffect(() => {}, [active, progress]);
  return (
    <Html style={{ color: "red", fontSize: "10em" }} center>
      {progress} % loaded
    </Html>
  );
};

export default LoadingScreen;
