import Draw from "../components/Draw";
import { useState, useRef, useEffect } from "react";
import { Stage } from "react-konva";
import Graph from "../components/Graph";
import { useSelector } from "react-redux";

const StageInternal = () => {
  const activeTool = useSelector((state) => state.tools.activeTool);
  const isDrawingTool = activeTool === "draw" || activeTool === "erase";
  const tool = activeTool === "draw" ? "pen" : "eraser";
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  useEffect(() => {
    if (activeTool === "clearAll") {
      setLines([]);
    }
  }, [activeTool]);

  const handleMouseDown = (e) => {
    if (isDrawingTool) {
      isDrawing.current = true;
    }
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Draw lines={lines} />
      <Graph />
    </Stage>
  );
};

export default StageInternal;
