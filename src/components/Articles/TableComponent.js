import React from "react";
import { Table } from "react-bootstrap";
import TableCellDropDown from "./TableCellDropDown";

export default function TableComponent({ setDeleteModalState }) {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown
                id={1}
                setDeleteModalState={setDeleteModalState}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <span>@mdo </span>
              <TableCellDropDown />
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
