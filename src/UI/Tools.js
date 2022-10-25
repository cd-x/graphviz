import { Fragment, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";

const Tools = () => {
  const [triggerElement, setTriggerElement] = useState(null);
  const [toolItems, setToolItems] = useState(["Draw", "Graph"]);
  const open = Boolean(triggerElement);

  const handleClick = (event) => {
    setTriggerElement(event.currentTarget);
  };
  const handleClose = () => {
    setTriggerElement(null);
  };
  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddCircleIcon color="primary" />
      </IconButton>
      <Menu
        id="tool-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={triggerElement}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        {toolItems.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Tools;
