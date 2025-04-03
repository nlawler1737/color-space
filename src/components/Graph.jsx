import PointCloud from "./PointCloud";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { colorSpaces } from "../common/colorspaces";
import { converter } from "culori";
export default function Graph({ colorspace, points }) {
  const [mode, space] = colorspace.split("-");
  // const { state } = useGlobalState();
  const pointSize = useSelector((state) => state.graph.userPointSize);
  const sampleSize = useSelector((state) => state.graph.samplePointSize);
  const samplesKey = useSelector((state) => state.graph.samplesKey);

  const { samplePositions, sampleColors } = useMemo(() => {
    const samples = samplesKey ? colorSpaces[samplesKey].samples : [];
    if (!samples.length)
      return {
        samplePositions: new Float32Array(0),
        sampleColors: new Float32Array(0),
      };
    const samplePositions = new Float32Array(samples.length * 3);
    const sampleColors = new Float32Array(samples.length * 3);
    console.log("changing samples", mode);
    for (let i = 0; i < samples.length; i++) {
      const convertedColor = converter(mode)(samples[i]);
      const { x, y, z } = colorSpaces[mode].spaces[space](convertedColor);
      const color = converter("lrgb")(samples[i]);
      samplePositions[i * 3] = x;
      samplePositions[i * 3 + 1] = y;
      samplePositions[i * 3 + 2] = z;

      sampleColors[i * 3] = color.r;
      sampleColors[i * 3 + 1] = color.g;
      sampleColors[i * 3 + 2] = color.b;
    }
    return { samplePositions, sampleColors };
  }, [mode, samplesKey, space]);

  const { pointPositions, pointColors } = useMemo(() => {
    const pointPositions = new Float32Array(points.length * 3);
    const pointColors = new Float32Array(points.length * 3);
    // console.log("changing points")
    for (let i = 0; i < points.length; i++) {
      pointPositions[i * 3] = points[i].x;
      pointPositions[i * 3 + 1] = points[i].y;
      pointPositions[i * 3 + 2] = points[i].z;

      pointColors[i * 3] = points[i].color.r;
      pointColors[i * 3 + 1] = points[i].color.g;
      pointColors[i * 3 + 2] = points[i].color.b;
    }
    return { pointPositions, pointColors };
  }, [points]);

  return (
    <group position={[-0, 0, -0]}>
      {/* Axes */}
      <group>
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[1, 0.01, 0.01]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.01, 1, 0.01]} />
          <meshBasicMaterial color="green" />
        </mesh>
        <mesh position={[0, 0, 0.5]}>
          <boxGeometry args={[0.01, 0.01, 1]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </group>

      {/* User Points */}
      <PointCloud
        positions={pointPositions}
        colors={pointColors}
        size={pointSize}
      />

      {/* Sample Points */}
      <PointCloud
        positions={samplePositions}
        colors={sampleColors}
        size={sampleSize}
      />
    </group>
  );
}
