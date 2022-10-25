import { Arrow } from "react-konva";

const getConnectorPoints = (from, to) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  let angle = Math.atan2(-dy, dx);

  const radius = 50;

  return [
    from.x + -radius * Math.cos(angle + Math.PI),
    from.y + radius * Math.sin(angle + Math.PI),
    to.x + -radius * Math.cos(angle),
    to.y + radius * Math.sin(angle),
  ];
};

const Edge = (props) => {
  const { from, to } = props;
  const connectionPoints = getConnectorPoints(from, to);

  return (
    <Arrow
      points={connectionPoints}
      stroke="#000"
      fill="#000"
      strokeWidth={2}
      pointerWidth={0}
    />
  );
};

export default Edge;
