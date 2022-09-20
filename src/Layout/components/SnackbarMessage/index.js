import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function SnackbarMessage({
  variant = "success",
  shortMessage = "Well done!",
  longMessage = "Article updated successfuly",
  layoutType = "dashboard",
}) {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        className={`position-absolute m-3 ${layoutType}Snackbar`}
        variant={variant}
        dismissible
        onClose={() => setShow(false)}
      >
        <span className="font-weight-bold mr-1">{shortMessage}</span>
        <span>{longMessage}</span>
      </Alert>
    );
  } else {
    return null;
  }
}
