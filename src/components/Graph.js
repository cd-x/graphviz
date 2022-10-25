import { useState } from "react";
import { Layer } from "react-konva";
import Edge from "./Edge";
import Vertex from "./Vertex";

const WINDOW_WIDTH = window.innerWidth - 30;
const WINDOW_HEIGHT = window.innerHeight - 30;

const VERTICES = (function () {
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
})();

const EDGES = (function () {
  const number = 10;
  let result = [];
  while (result.length < number) {
    var from = "V-" + Math.floor(Math.random() * VERTICES.length);
    var to = "V-" + Math.floor(Math.random() * VERTICES.length);
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
})();

const Graph = (props) => {
  const [points, setPoints] = useState(VERTICES);
  const vertexMoveHandler = ({ id, x, y }) => {
    setPoints((prevPoints) => {
      const idx = prevPoints.findIndex((pp) => pp.id === id);
      let updatedPoints = [...prevPoints];
      updatedPoints[idx] = { id, x, y };
      return updatedPoints;
    });
  };
  return (
    <Layer>
      {EDGES.map((edgeItem) => {
        const { id, from, to } = edgeItem;
        const fromNode = points.find((p) => p.id === from);
        const toNode = points.find((p) => p.id === to);
        return <Edge from={fromNode} to={toNode} key={id} />;
      })}
      {points.map((p) => {
        return (
          <Vertex
            key={p.id}
            id={p.id}
            xStart={p.x}
            yStart={p.y}
            onVertexMove={vertexMoveHandler}
          />
        );
      })}
    </Layer>
  );
};

export default Graph;
