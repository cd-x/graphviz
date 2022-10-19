import { useState } from "react";
import { Layer, Circle } from "react-konva";
import Edge from "./Edge";

const BLUE1_DEFAULTS = {
  x: 100,
  y: 100,
  fill: "blue",
  width: 30,
  height: 30,
  draggable: true,
};

const BLUE2_DEFAULTS = {
  x: 100,
  y: 300,
  fill: "blue",
  width: 30,
  height: 30,
  draggable: true,
};

const Graph = (props) => {
  const [blue1Node, setBlue1Node] = useState(BLUE1_DEFAULTS);
  const [blue2Node, setBlue2Node] = useState(BLUE2_DEFAULTS);
  return (
    <Layer>
      <Edge node1={blue2Node} node2={blue1Node} />
      <Circle
        {...blue1Node}
        onDragMove={(e) => {
          setBlue1Node({ ...blue1Node, ...e.target.position() });
        }}
      />
      <Circle
        {...blue2Node}
        onDragMove={(e) => {
          setBlue2Node({ ...blue2Node, ...e.target.position() });
        }}
      />
    </Layer>
  );
};

export default Graph;
