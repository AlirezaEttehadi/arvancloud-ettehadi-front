import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Article() {
  return (
    <div className="d-flex flex-column pt-3 px-3 w-100">
      <h1 className="mb-4">New Article</h1>
      <Form>
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-9 pl-0">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group controlId="formBasicBody">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows="8" name="Body" />
            </Form.Group>
          </div>
          <div className="col-12 col-md-3 pl-0">
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" placeholder="New tag" />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
              <Form.Control as="select" htmlSize={10} custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
