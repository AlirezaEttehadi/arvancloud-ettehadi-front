import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function TableCellDropDown({ id, setDeleteModalState }) {
  return (
    <DropdownButton variant="info" id="dropdown-basic-button" title="...">
      <Dropdown.Item>Edit</Dropdown.Item>
      <Dropdown.Item onClick={() => setDeleteModalState({ isOpen: true, id })}>
        Delete
      </Dropdown.Item>
    </DropdownButton>
  );
}
