import React from "react";

import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TableComponent({ setDeleteModalState, articles }) {
  const navigate = useNavigate();
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
            <tr key={article.slug}>
              <td>{index + 1}</td>
              <td>{article.title}</td>
              <td>{article.author.username}</td>
              <td>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {article.tagList.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </td>
              <td>{article.description}</td>
              <td>
                <div className="d-flex align-items-center justify-content-between">
                  <span>{article.createdAt}</span>
                  <DropdownButton
                    variant="info"
                    id="dropdown-basic-button"
                    title="..."
                  >
                    <Dropdown.Item
                      onClick={() => navigate(`/articles/edit/${article.slug}`)}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setDeleteModalState({
                          isOpen: true,
                          slug: article.slug,
                        })
                      }
                    >
                      Delete
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
