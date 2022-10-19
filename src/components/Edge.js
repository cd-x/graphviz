import { Group, Arrow, Text } from "react-konva";

const Edge = ({ node1, node2 }) => {
  const dx = node1.x - node2.x;
  const dy = node1.y - node2.y;
  let angle = Math.atan2(-dy, dx);

  const radius = 20;

  const arrowStart = {
    x: node2.x + -radius * Math.cos(angle + Math.PI),
    y: node2.y + radius * Math.sin(angle + Math.PI),
  };

  const arrowEnd = {
    x: node1.x + -radius * Math.cos(angle),
    y: node1.y + radius * Math.sin(angle),
  };

  const arrowMiddle = {
    x: (arrowStart.x + arrowEnd.x) / 2,
    y: (arrowStart.y + arrowEnd.y) / 2,
  };

  const text = "SOme text";

  return (
    <Group>
      <Arrow
        points={[
          arrowStart.x,
          arrowStart.y,
          arrowMiddle.x,
          arrowMiddle.y,
          arrowEnd.x,
          arrowEnd.y,
        ]}
        stroke="#000"
        fill="#000"
        strokeWidth={2}
        pointerWidth={0}
      />
      <Text
        fill="red"
        x={(node1.x + node2.x) / 2 - 100}
        y={(node1.y + node2.y) / 2 - 100}
        width={200}
        height={200}
        align="center"
        verticalAlign="middle"
        text={text}
      />
    </Group>
  );
};

export default Edge;
