import React from "react";
import { Table } from "react-bootstrap";
import TableCellDropDown from "./TableCellDropDown";

export default function TableComponent({ setDeleteModalState, articles }) {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Tags</th>
          <th>Exerpt</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {articles?.map((article, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{article.title}</td>
              <td>{article.author.username}</td>
              <td>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {article.tagList.map((tag) => (
                    <span>{tag}</span>
                  ))}
                </div>
              </td>
              <td>{article.description}</td>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <span>{article.createdAt}</span>
                  <TableCellDropDown
                    id={1}
                    setDeleteModalState={setDeleteModalState}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
