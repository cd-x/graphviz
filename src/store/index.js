import { configureStore } from "@reduxjs/toolkit";
import graphSlice from "./slices/graph-slice";

const store = configureStore({
  reducer: { graph: graphSlice.reducer },
});

export default store;
