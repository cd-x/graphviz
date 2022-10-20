import { Group, Circle, Text } from "react-konva";
import { randomColor } from "../utilities/Utility";

const { backgroundColor, foregroundColor } = randomColor();

const Vertex = ({ label, xStart, yStart, onVertexMove }) => {
  const dragMoveHandler = (e) => {
    const { x, y } = e.target.position();
    onVertexMove({ id: label, x, y });
  };

  return (
    <Group>
      <Circle
        x={xStart}
        y={yStart}
        fill={backgroundColor}
        radius={25}
        stroke="black"
        shadowBlur={10}
        strokeWidth={2}
        draggable={true}
        onDragMove={dragMoveHandler}
      />
      <Text
        fill={foregroundColor}
        x={xStart - 5}
        y={yStart - 5}
        align="center"
        verticalAlign="middle"
        text={label}
      />
    </Group>
  );
};

export default Vertex;
