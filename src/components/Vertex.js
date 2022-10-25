import { Group, Circle, Text } from "react-konva";

const Vertex = (props) => {
  const { id, xStart, yStart, onVertexMove, backgroundColor, foregroundColor } =
    props;
  const dragMoveHandler = (e) => {
    const { x, y } = e.target.position();
    onVertexMove({ id, x, y });
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
        text={id}
      />
    </Group>
  );
};

export default Vertex;
