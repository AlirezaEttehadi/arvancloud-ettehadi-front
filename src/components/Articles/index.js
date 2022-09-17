import React from "react";
import TableComponent from "./TableComponent";
import TablePagination from "./TablePagination";

export default function Articles() {
  return (
    <div className="pt-3 px-3 w-100">
      <h1 className="mb-4">All Posts</h1>
      <TableComponent />
      <TablePagination />
    </div>
  );
}
