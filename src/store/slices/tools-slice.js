import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  activeTool: null,
};
const toolsSlice = createSlice({
  name: "tools",
  initialState: defaultState,
  reducers: {
    setTool(state, action) {
      state.activeTool = action.payload.activeTool;
    },
  },
});

export const toolsActions = toolsSlice.actions;
export default toolsSlice;
