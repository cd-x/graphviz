import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, ButtonGroup } from "@mui/material";

const GraphEditor = () => {
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
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        label="src"
        variant="outlined"
        size="small"
        type="number"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        label="des"
        variant="outlined"
        size="small"
        type="number"
      />
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        orientation="vertical"
      >
        <Button onClick={() => {}}>+</Button>
        <Button onClick={() => {}}>-</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default GraphEditor;
