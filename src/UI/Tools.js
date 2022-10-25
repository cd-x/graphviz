import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Fragment, useState } from "react";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import InsightsIcon from "@mui/icons-material/Insights";
import GestureIcon from "@mui/icons-material/Gesture";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import GraphEditor from "../components/GraphEditor";

const Tools = () => {
  const [activeTool, setActiveTool] = useState("disable");

  const isEditGraph = activeTool === "editGraph";
  const handleChange = (event, newAlignment) => {
    setActiveTool(newAlignment);
  };

  return (
    <Fragment>
      <ToggleButtonGroup
        color="primary"
        value={activeTool}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        orientation="vertical"
      >
        <ToggleButton value="disable">
          <DoNotTouchIcon />
        </ToggleButton>
        <ToggleButton value="draw">
          <GestureIcon />
        </ToggleButton>
        <ToggleButton value="erase">
          <AutoFixHighOutlinedIcon />
        </ToggleButton>
        <ToggleButton value="editGraph">
          <InsightsIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      {isEditGraph && <GraphEditor />}
    </Fragment>
  );
};

export default Tools;
