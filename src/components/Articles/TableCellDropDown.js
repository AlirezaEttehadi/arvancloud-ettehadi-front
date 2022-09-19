import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function TableCellDropDown({ slug, setDeleteModalState }) {
  return (
    <DropdownButton variant="info" id="dropdown-basic-button" title="...">
      <Dropdown.Item>Edit</Dropdown.Item>
      <Dropdown.Item
        onClick={() => setDeleteModalState({ isOpen: true, slug })}
      >
        Delete
      </Dropdown.Item>
    </DropdownButton>
  );
}
