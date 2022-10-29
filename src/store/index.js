import { configureStore } from "@reduxjs/toolkit";
import graphSlice from "./slices/graph-slice";
import toolsSlice from "./slices/tools-slice";

const store = configureStore({
  reducer: {
    graph: graphSlice.reducer,
    tools: toolsSlice.reducer,
  },
});

export default store;
