import { Fragment, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { MenuItem, Menu, IconButton } from "@mui/material";

const Tools = () => {
  const [triggerElement, setTriggerElement] = useState(null);
  const [isDrawing, setIsDrwaing] = useState(false);
  let toolItems = ["Graph"];
  toolItems.push(isDrawing ? "Eraser" : "Pen");
  const open = Boolean(triggerElement);

  const handleClick = (event) => {
    setTriggerElement(event.currentTarget);
  };
  const handleClose = () => {
    setTriggerElement(null);
  };
  const menuItemClickHandler = (e) => {
    const val = e.target.innerText;
    if (val === "Pen") {
      setIsDrwaing(true);
    }
    if (val === "Eraser") {
      setIsDrwaing(false);
    }
    handleClose();
  };
  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "tool-menu" : undefined}
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
            opacity: "5",
          },
        }}
      >
        {toolItems.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={menuItemClickHandler}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default Tools;
