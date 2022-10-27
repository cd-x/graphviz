import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Fragment, useState } from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import InsightsIcon from "@mui/icons-material/Insights";
import GestureIcon from "@mui/icons-material/Gesture";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import GraphEditor from "../components/GraphEditor";
import { useDispatch } from "react-redux";
import { toolsActions } from "../store/slices/tools-slice";
import { graphActions } from "../store/slices/graph-slice";

const Tools = () => {
  const [activeTool, setActiveTool] = useState(null);
  const dispatch = useDispatch();
  const isEditGraph = activeTool === "editGraph";
  const handleChange = (event, newAlignment) => {
    dispatch(toolsActions.setTool({ activeTool: newAlignment }));
    if (newAlignment === "clearAll") {
      dispatch(graphActions.clearAll());
    }
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
        <ToggleButton value="clearAll">
          <DeleteSweepIcon />
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
