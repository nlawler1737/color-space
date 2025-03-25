import { useEffect } from "react";
import { colorSpaces } from "../common/colorspaces";
import { converter } from "culori";
import Viewer from "./Viewer";
import Graph from "./Graph";

export default function GamutDisplay({ mode, colors }) {
  useEffect(() => {
    console.log("%ccolors changed", "color:red")
  }, [colors])
  useEffect(() => {
    console.log("mode changed")
  }, [mode])
  return (
    <div
      className="color-space"
    >
      <Viewer>
        <Graph
          mode={mode}
          points={colors.map((color) => {
            const convertedColor = converter(mode)(color);
            return {
              ...colorSpaces[mode].to3d(convertedColor),
              color: converter("lrgb")(color),
              gamutColor: convertedColor,
            };
          })}
        />
      </Viewer>
      <code className="title">
        <div>{colorSpaces[mode].name}</div>
      </code>
    </div>
  );
}
