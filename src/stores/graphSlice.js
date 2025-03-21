import { createSlice } from "@reduxjs/toolkit";
import { colorSpaces } from "../common/colorspaces";

export const graphSlice = createSlice({
  name: "graph",
  initialState: {
    userPointSize: 0.05,
    samplePointSize: 0.01,
    samplesKey: null,
    userColors: [],
    visibleColorSpaces: ["rgb", "hsv"],
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
      const mode = action.payload;
      const index = state.visibleColorSpaces.indexOf(mode);
      if (index === -1) {
        state.visibleColorSpaces = Object.keys(colorSpaces).filter(
          (key) => key === mode || state.visibleColorSpaces.includes(key)
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
