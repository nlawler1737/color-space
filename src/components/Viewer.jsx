import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Viewer({ children }) {
  return (
    <Canvas camera={{ position: [1, 1.5, 2] }}>
      <OrbitControls />
      {children}
    </Canvas>
  );
}
