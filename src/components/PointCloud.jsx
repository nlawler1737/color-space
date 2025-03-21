import { Points } from "@react-three/drei";
import * as THREE from "three";

export default function PointCloud({ positions, colors, size }) {
  const material = new THREE.PointsMaterial({
    size,
    vertexColors: true,
    toneMapped: false,
    depthTest: true,
  });

  return (
    <Points
      positions={positions}
      frustumCulled
      colors={colors}
      material={material}
    ></Points>
  );
}
