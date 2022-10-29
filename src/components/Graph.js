import { useEffect, useState } from "react";
import { Layer } from "react-konva";
import Edge from "./Edge";
import Vertex from "./Vertex";
import { useSelector } from "react-redux";

const Graph = (props) => {
  const { vertices, edges } = useSelector((state) => state.graph);
  const [points, setPoints] = useState(vertices);

  useEffect(() => {
    setPoints((prevPoints) => {
      let newPoints = [...prevPoints];
      vertices.forEach((v) => {
        const isExisting =
          newPoints.find((existingPoint) => existingPoint.id === v.id) || null;
        if (!isExisting) {
          newPoints.push(v);
        }
      });
      return newPoints;
    });
  }, [vertices]);

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
      {edges.map((edgeItem) => {
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
