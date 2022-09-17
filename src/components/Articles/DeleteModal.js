import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function DeleteModal(props) {
  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>Are you sure to delete article?</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>
          No
        </Button>
        <Button variant="danger" onClick={() => console.log(props.id)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
