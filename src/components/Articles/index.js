import React, { useState } from "react";
import TableComponent from "./TableComponent";
import TablePagination from "./TablePagination";
import DeleteModal from "./DeleteModal";

export default function Articles() {
  const [deleleModalState, setDeleteModalState] = useState({
    isOpen: false,
    id: null,
  });
  return (
    <div className="d-flex flex-column pt-3 px-3 w-100">
      <h1 className="mb-4">All Posts</h1>
      <TableComponent setDeleteModalState={setDeleteModalState} />
      <TablePagination />
      <DeleteModal
        show={deleleModalState.isOpen}
        id={deleleModalState.id}
        setDeleteModalState={setDeleteModalState}
        onHide={() => setDeleteModalState({ isOpen: false, id: null })}
      />
    </div>
  );
}
