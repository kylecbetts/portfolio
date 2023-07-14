import { OrbitControls } from "@react-three/drei";
import Space from "./Space";

function Scene() {
  return (
    <>
      <Space />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Scene;
