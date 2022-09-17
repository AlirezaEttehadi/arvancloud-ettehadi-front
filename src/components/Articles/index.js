import React from "react";
import TableComponent from "./TableComponent";

export default function Articles() {
  return (
    <div className="p-3 w-100">
      <h1 className="mb-4">All Posts</h1>
      <TableComponent />
    </div>
  );
}
