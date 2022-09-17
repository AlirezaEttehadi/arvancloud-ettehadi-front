import React from "react";
import { Alert } from "react-bootstrap";

export default function SnackbarMessage() {
  return (
    <Alert
      className="position-absolute m-3 snackbarContainer"
      variant="success"
      dismissible
    >
      <span className="font-weight-bold mr-1">Well done!</span>
      <span>Article updated successfuly</span>
    </Alert>
  );
}
