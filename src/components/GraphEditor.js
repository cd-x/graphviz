import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { graphActions } from "../store/slices/graph-slice";

const GraphEditor = () => {
  const dispatch = useDispatch();
  const [src, setSrc] = useState("");
  const [dest, setDest] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const addEdgeHandler = () => {
    if (src && dest) {
      dispatch(graphActions.addVertex({ id: src }));
      if (src !== dest) {
        dispatch(graphActions.addVertex({ id: dest }));
        dispatch(graphActions.addEdge({ from: src, to: dest }));
      }
    }
  };

  const removeEdgeHandler = () => {
    if (src && dest) {
      if (src !== dest) {
        dispatch(graphActions.removeEdge({ from: src, to: dest }));
      } else {
        dispatch(graphActions.removeNode({ id: src }));
      }
    }
  };
  return (
    <Stack
      component="form"
      sx={{
        width: "5ch",
        marginTop: "3.5ch",
      }}
      spacing={1}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        label="src"
        variant="outlined"
        size="small"
        type="text"
        value={src}
        onChange={(e) => {
          setSrc(e.target.value);
        }}
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        label="des"
        variant="outlined"
        size="small"
        type="text"
        value={dest}
        onChange={(e) => {
          setDest(e.target.value);
        }}
      />
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        orientation="vertical"
      >
        <Button onClick={addEdgeHandler}>+</Button>
        <Button onClick={removeEdgeHandler}>-</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default GraphEditor;
