import React from "react";

import { Button, Modal } from "react-bootstrap";

export default function DeleteModal(props) {
  const { onHide, slug, _deleteArticle } = props;
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
        <Button variant="outline-dark" onClick={onHide}>
          No
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            _deleteArticle(slug);
            onHide();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
