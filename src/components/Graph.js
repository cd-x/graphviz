import { Layer, Group } from "react-konva";
import Edge from "./Edge";
import Vertex from "./Vertex";

const EDGES = [
  [
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
  ],
];

const Graph = (props) => {
  return (
    <Layer>
      {EDGES.map((edge) => {
        const [firstNode, secondNode] = edge;
        return (
          <Group>
            <Edge node1={firstNode} node2={secondNode} />
            <Vertex
              label={firstNode.id}
              xStart={firstNode.x}
              yStart={firstNode.y}
            />
            <Vertex
              label={secondNode.id}
              xStart={secondNode.x}
              yStart={secondNode.y}
            />
          </Group>
        );
      })}
    </Layer>
  );
};

export default Graph;
