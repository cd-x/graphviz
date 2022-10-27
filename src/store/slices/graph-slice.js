import { createSlice } from "@reduxjs/toolkit";

const WINDOW_WIDTH = window.innerWidth - 30;
const WINDOW_HEIGHT = window.innerHeight - 30;
const defaultState = {
  vertices: (function () {
    const number = 10;
    let result = [];
    while (result.length < number) {
      result.push({
        id: "V-" + result.length,
        x: WINDOW_WIDTH * Math.random(),
        y: WINDOW_HEIGHT * Math.random(),
      });
    }
    return result;
  })(),
  edges: (function () {
    const number = 10;
    let result = [];
    while (result.length < number) {
      var from = "V-" + Math.floor(Math.random() * 10);
      var to = "V-" + Math.floor(Math.random() * 10);
      if (from === to) {
        continue;
      }
      result.push({
        id: "connector-" + result.length,
        from: from,
        to: to,
      });
    }
    return result;
  })(),
};

const graphSlice = createSlice({
  name: "graph",
  initialState: defaultState,
  reducers: {
    addVertex(state, action) {
      const id = "V-" + action.payload.id;
      const existingNode = state.vertices.find((v) => v.id === id) || null;
      if (existingNode) {
        return;
      }
      const x = WINDOW_WIDTH * Math.random();
      const y = WINDOW_HEIGHT * Math.random();
      state.vertices.push({
        id,
        x,
        y,
      });
    },
    addEdge(state, action) {
      const from = "V-" + action.payload.from;
      const to = "V-" + action.payload.to;
      if (from === to) {
        this.addVertex(state, { payload: { id: action.payload.from } });
        return;
      }
      const srcVertex = state.vertices.find((v) => v.id === from);
      const destVertex = state.vertices.find((v) => v.id === to);

      /**
       * in case edge exist already
       */
      if (
        srcVertex &&
        destVertex &&
        state.edges.find(
          (e) =>
            (e.from === from && e.to === to) || (e.from === to && e.to === from)
        )
      ) {
        return;
      }
      if (!srcVertex) {
        this.addVertex(state, { payload: { id: action.payload.from } });
      }
      if (!destVertex) {
        this.addVertex(state, { payload: { id: action.payload.to } });
      }
      const newEdge = {
        id: "connector-" + new Date().getTime(),
        from: from,
        to: to,
      };

      state.edges.push(newEdge);
    },
    removeNode(state, action) {
      const id = "V-" + action.payload.id;
      state.vertices = state.vertices.filter((v) => v.id !== id);
    },
    removeEdge(state, action) {
      const from = "V-" + action.payload.from;
      const to = "V-" + action.payload.to;
      if (from === to) {
        this.removeNode(state, { payload: { id: action.payload.from } });
        return;
      }
      const srcVertex = state.vertices.find((v) => v.id === from);
      const destVertex = state.vertices.find((v) => v.id === to);
      if (srcVertex && destVertex) {
        state.edges = state.edges.filter(
          (e) =>
            (e.from === from && e.to === to) || (e.from === to && e.to === from)
        );
      }
    },
  },
});

export const graphActions = graphSlice.actions;
export default graphSlice;
