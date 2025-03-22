import { useEffect, useMemo, useState } from "react";
import { parse } from "culori";
import { colorSpaces } from "../common/colorspaces";
import { useDispatch, useSelector } from "react-redux";
import { setUserColors } from "../stores/graphSlice";
import {
  setSamplePointSize,
  setUserPointSize,
  setSamplesKey,
  toggleVisibleColorSpace,
} from "../stores/graphSlice";

export default function Sidebar() {
  const userPointSize = useSelector((state) => state.graph.userPointSize);
  const samplePointSize = useSelector((state) => state.graph.samplePointSize);
  const samplesKey = useSelector((state) => state.graph.samplesKey);
  const selectedColorSpaces = useSelector(
    (state) => state.graph.visibleColorSpaces
  );
  const dispatch = useDispatch();

  const [colors, setColors] = useState("");

  const colorSpaceInputs = useMemo(() => {
    return Object.values(colorSpaces).map(({ mode, name, samples }) => (
      <div
        key={mode}
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 20px 20px",
          textAlign: "left",
        }}
      >
        <code>{name}</code>
        <input
          type="checkbox"
          name="color-space-visible"
          style={{ margin: 2 }}
          checked={selectedColorSpaces.includes(mode)}
          onChange={() => {
            dispatch(toggleVisibleColorSpace(mode));
          }}
        />
        {samples ? (
          <input
            type="radio"
            name="color-space-preview"
            disabled={samples == null}
            checked={samplesKey === mode}
            style={{ margin: 2 }}
            onChange={() => {
              dispatch(setSamplesKey(mode));
            }}
            onClick={() => {
              if (samplesKey === mode) {
                dispatch(setSamplesKey(null));
              }
            }}
          />
        ) : (
          <span className="radio-disabled"></span>
        )}
      </div>
    ));
  }, [selectedColorSpaces, samplesKey, dispatch]);

  useEffect(() => {
    const text = localStorage.getItem("colors:colors");

    if (!text) return;

    setColors(text);

    const parsedColors = parseColors(text);
    dispatch(setUserColors(parsedColors));
  }, []);

  function handleColorsChange(e) {
    const text = e.target.value;
    setColors(text);

    localStorage.setItem("colors:colors", text);

    const parsedColors = parseColors(text);

    dispatch(setUserColors(parsedColors));
  }

  function parseColors(text) {
    return text
      .trim()
      .split("\n")
      .map((color) => parse(color.trim()))
      .filter((a) => a != null);
  }

  return (
    <div id="sidebar">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
          gap: "0px 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 20px 20px",
            textAlign: "center",
          }}
        >
          <code
            style={{ fontWeight: "bolder" }}
            title="Name of the color space"
          >
            Name
          </code>
          <code style={{ fontWeight: "bolder" }} title="Visible">
            V
          </code>
          <code style={{ fontWeight: "bolder" }} title="Preview">
            P
          </code>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 20px 20px",
            textAlign: "center",
          }}
        >
          <code
            style={{ fontWeight: "bolder" }}
            title="Name of the color space"
          >
            Name
          </code>
          <code style={{ fontWeight: "bolder" }} title="Visible">
            V
          </code>
          <code style={{ fontWeight: "bolder" }} title="Preview">
            P
          </code>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
          gap: "0px 2rem",
        }}
      >
        {colorSpaceInputs}
      </div>
      <div>
        <input
          type="range"
          step="0.0001"
          min="0.0001"
          max="0.3"
          value={userPointSize}
          onChange={(e) => dispatch(setUserPointSize(+e.target.value))}
        ></input>
        <input
          type="range"
          step="0.0001"
          min="0.0001"
          max="0.3"
          value={samplePointSize}
          onChange={(e) => dispatch(setSamplePointSize(+e.target.value))}
        ></input>
      </div>

      <textarea
        placeholder={
          "List your colors\n\nred\n#00ff00\nrgb(0,0,255)\noklab(0.3 -0.2 0.1)\ncolor(--hsv 60 1 1)\nhsl(349.52 100% 87.65%)\noklab(0.42 0.16 -0.10)\ncolor(srgb-linear 1 0 1)\nlab(53.59 0 0)\ncolor(xyz-d50 0.58 0.49 0.05)\nhwb(180 0% 0%)\ncolor(--hsi 120 1 0.17)\ncolor(prophoto-rgb 0.23 0.09 0.40)\ncolor(a98-rgb 0.96 0.84 0.2)"
        }
        value={colors}
        rows={10}
        cols={20}
        onChange={handleColorsChange}
        spellCheck="false"
      ></textarea>
      <div>
        <code>Accuracy: ¯\_(ツ)_/¯</code>
      </div>
    </div>
  );
}
