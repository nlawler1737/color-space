import { createSlice } from "@reduxjs/toolkit";
import { colorSpaces } from "../common/colorspaces";

const possibleColorSpaces = Object.entries(colorSpaces).reduce((acc, [mode, value]) => {
  for (const space in value.spaces) {
    acc.push(`${mode}-${space}`);
  }
  return acc
}, []);

export const graphSlice = createSlice({
  name: "graph",
  initialState: {
    userPointSize: 0.05,
    samplePointSize: 0.01,
    samplesKey: null,
    userColors: [],
    visibleColorSpaces: ["rgb-cube", "hsv-cone"],
  },
  reducers: {
    setUserPointSize(state, action) {
      state.userPointSize = action.payload;
    },
    setSamplePointSize(state, action) {
      state.samplePointSize = action.payload;
    },
    setSamplesKey(state, action) {
      state.samplesKey = action.payload;
    },
    setUserColors(state, action) {
      state.userColors = action.payload;
    },
    toggleVisibleColorSpace(state, action) {
      const colorspace = action.payload;
      const index = state.visibleColorSpaces.indexOf(colorspace);
      if (index === -1) {        
        state.visibleColorSpaces = possibleColorSpaces.filter(
          (key) => key === colorspace || state.visibleColorSpaces.includes(key)
        );
      } else {
        state.visibleColorSpaces.splice(index, 1);
      }
    },
  },
});

export const {
  setUserPointSize,
  setSamplePointSize,
  setSamplesKey,
  setUserColors,
  toggleVisibleColorSpace,
} = graphSlice.actions;

export default graphSlice.reducer;
