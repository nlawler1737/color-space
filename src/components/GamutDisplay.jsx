import { useEffect } from "react";
import { colorSpaces } from "../common/colorspaces";
import { converter } from "culori";
import Viewer from "./Viewer";
import Graph from "./Graph";

export default function GamutDisplay({ colorspace, colors }) {
  const [mode, space] = colorspace.split("-");
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
          colorspace={colorspace}
          points={colors.map((color) => {
            const convertedColor = converter(mode)(color);
            return {
              ...colorSpaces[mode].spaces[space](convertedColor),
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
