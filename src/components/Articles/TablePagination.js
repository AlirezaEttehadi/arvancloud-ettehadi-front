import React from "react";
import { Pagination } from "react-bootstrap";

export default function TablePagination({ numberOfPages }) {
  const active = 1;
  const pages = [];
  for (let number = 1; number <= numberOfPages; number++) {
    pages.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className="align-self-center my-5">
      <Pagination.Prev disabled={active === 1} />
      {pages}
      <Pagination.Next disabled={active === numberOfPages} />
    </Pagination>
  );
}
