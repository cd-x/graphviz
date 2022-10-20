import { useState } from "react";
import { Layer } from "react-konva";
import Edge from "./Edge";
import Vertex from "./Vertex";

const EDGES = [[0, 1]];

const VERTICES = [
  {
    id: 0,
    x: 100,
    y: 100,
  },
  {
    id: 1,
    x: 100,
    y: 300,
  },
];

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
      {points.map((p) => {
        return (
          <Vertex
            label={p.id}
            xStart={p.x}
            yStart={p.y}
            onVertexMove={vertexMoveHandler}
          />
        );
      })}
      {EDGES.map((edge) => {
        const [u, v] = edge;
        const node1 = points.find((p) => p.id === u);
        const node2 = points.find((p) => p.id === v);
        return <Edge node1={node1} node2={node2} />;
      })}
    </Layer>
  );
};

export default Graph;
