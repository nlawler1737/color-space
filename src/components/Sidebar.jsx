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
import Eye from "./icons/Eye";
import Cube from "./icons/Cube";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
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
      <div key={mode} className="color-space-item">
        <span>
          <code>{name}</code>
        </span>
        <span>
          <button
            className={`select-button color-space-visible-button ${
              selectedColorSpaces.includes(mode) ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(toggleVisibleColorSpace(mode));
            }}
          >
            <Cube />
          </button>
          <div className="vr"></div>
          <button
            className={`select-button preview-button ${
              samplesKey === mode ? "selected" : ""
            }`}
            disabled={samples == null}
            onChange={() => {}}
            onClick={() => {
              if (samplesKey === mode) {
                dispatch(setSamplesKey(null));
              } else {
                dispatch(setSamplesKey(mode));
              }
            }}
          >
            <Eye width="full" height="full" />
          </button>
        </span>
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

  function handleSidebarToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div id="sidebar" className={isOpen ? "" : "closed"}>
      <button id="sidebar-toggle" onClick={() => handleSidebarToggle()}>
        {isOpen ? "<" : ">"}
      </button>
      <div id="sidebar-content">
        <textarea
          placeholder={
            "List your colors\n\nred\n#00ff00\nrgb(0,0,255)\noklab(0.3 -0.2 0.1)\ncolor(--hsv 60 1 1)\nhsl(349.52 100% 87.65%)\noklab(0.42 0.16 -0.10)\ncolor(srgb-linear 1 0 1)\nlab(53.59 0 0)\ncolor(xyz-d50 0.58 0.49 0.05)\nhwb(180 0% 0%)\ncolor(--hsi 120 1 0.17)\ncolor(prophoto-rgb 0.23 0.09 0.40)\ncolor(a98-rgb 0.96 0.84 0.2)"
          }
          value={colors}
          rows={10}
          onChange={handleColorsChange}
          spellCheck="false"
        ></textarea>
        <div>
          <label htmlFor="user-point-size">
            <code>User Point Size</code>
          </label>
          <input
            type="range"
            step="0.0001"
            min="0.0001"
            max="0.3"
            value={userPointSize}
            onChange={(e) => dispatch(setUserPointSize(+e.target.value))}
            style={{ width: "90%" }}
          ></input>
          <label htmlFor="sample-point-size">
            <code>Sample Point Size</code>
          </label>
          <input
            type="range"
            step="0.0001"
            min="0.0001"
            max="0.3"
            value={samplePointSize}
            onChange={(e) => dispatch(setSamplePointSize(+e.target.value))}
            style={{ width: "90%" }}
          ></input>
        </div>
        <div className="color-space-input-container">{colorSpaceInputs}</div>
        <div>
          <code>Accuracy: ¯\_(ツ)_/¯</code>
        </div>
      </div>
    </div>
  );
}
