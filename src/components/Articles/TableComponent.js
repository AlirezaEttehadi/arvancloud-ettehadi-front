import React from "react";
import { Table } from "react-bootstrap";

export default function TableComponent() {
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
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Larry the Bird</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
