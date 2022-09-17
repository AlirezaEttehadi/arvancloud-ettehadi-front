import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function TableCellDropDown() {
  return (
    <DropdownButton variant="info" id="dropdown-basic-button" title="...">
      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
    </DropdownButton>
  );
}
