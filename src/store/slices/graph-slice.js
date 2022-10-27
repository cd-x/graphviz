import { createSlice } from "@reduxjs/toolkit";

const WINDOW_WIDTH = window.innerWidth - 30;
const WINDOW_HEIGHT = window.innerHeight - 30;
// const defaultState = {
//   vertices: (function () {
//     const number = 10;
//     let result = [];
//     while (result.length < number) {
//       result.push({
//         id: "V-" + result.length,
//         x: WINDOW_WIDTH * Math.random(),
//         y: WINDOW_HEIGHT * Math.random(),
//       });
//     }
//     return result;
//   })(),
//   edges: (function () {
//     const number = 10;
//     let result = [];
//     while (result.length < number) {
//       var from = "V-" + Math.floor(Math.random() * 10);
//       var to = "V-" + Math.floor(Math.random() * 10);
//       if (from === to) {
//         continue;
//       }
//       result.push({
//         id: "connector-" + result.length,
//         from: from,
//         to: to,
//       });
//     }
//     return result;
//   })(),
// };

const emptyState = {
  vertices: [],
  edges: [],
};
const graphSlice = createSlice({
  name: "graph",
  initialState: emptyState,
  reducers: {
    addVertex(state, action) {
      const id = "V-" + action.payload.id;
      const existingNode = state.vertices.find((v) => v.id === id) || null;
      if (!existingNode) {
        const x = WINDOW_WIDTH * Math.random();
        const y = WINDOW_HEIGHT * Math.random();
        state.vertices.push({
          id,
          x,
          y,
        });
      }
    },
    addEdge(state, action) {
      const _from = "V-" + action.payload.from;
      const _to = "V-" + action.payload.to;
      const edgeExisting =
        state.edges.find((edge) => {
          const { from, to } = edge;
          return (
            (from === _from && to === _to) || (from === _to && to === _from)
          );
        }) || null;
      if (!edgeExisting) {
        const newEdge = {
          id: `connector-${new Date().getTime()}`,
          from: _from,
          to: _to,
        };
        state.edges.push(newEdge);
      }
    },
    removeNode(state, action) {
      const id = "V-" + action.payload.id;
      state.vertices = state.vertices.filter((v) => v.id !== id);
    },
    removeEdge(state, action) {
      let _from = "V-" + action.payload.from;
      let _to = "V-" + action.payload.to;
      state.edges = state.edges.filter((edge) => {
        let { from, to } = edge;
        if (from > to) {
          [from, to] = [to, from];
        }
        if (_from > _to) {
          [_from, _to] = [_to, _from];
        }
        return _from !== from || _to !== to;
      });
    },
  },
});

export const graphActions = graphSlice.actions;
export default graphSlice;
