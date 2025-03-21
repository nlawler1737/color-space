import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./stores/graphSlice";

export default configureStore({
  reducer: {
    graph: graphReducer,
  },
});
