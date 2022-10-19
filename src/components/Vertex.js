import { useState } from "react";
import { Group, Circle, Text } from "react-konva";

const Vertex = ({ label, xStart, yStart }) => {
  const [position, setPosition] = useState({
    x: xStart,
    y: yStart,
  });
  const dragMoveHandler = (e) => {
    const { x, y } = e.target.position();
    setPosition((position) => {
      return {
        ...position,
        x: x,
        y: y,
      };
    });
  };
  return (
    <Group>
      <Circle
        x={position.x}
        y={position.y}
        fill="green"
        radius={20}
        stroke="black"
        strokeWidth={2}
        draggable={true}
        onDragMove={dragMoveHandler}
      />
      <Text
        fill="red"
        x={position.x - 5}
        y={position.y - 5}
        align="center"
        verticalAlign="middle"
        text={label}
      />
    </Group>
  );
};

export default Vertex;
