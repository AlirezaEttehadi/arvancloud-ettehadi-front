import React from "react";
import { Pagination } from "react-bootstrap";

export default function TablePagination() {
  return (
    <Pagination className="mb-0">
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}
