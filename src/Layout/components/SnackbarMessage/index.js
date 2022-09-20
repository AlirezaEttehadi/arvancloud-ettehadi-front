import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

function SnackbarMessage({ snackbarMessage }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(snackbarMessage.show);
  }, [snackbarMessage]);
  if (show) {
    return (
      <Alert
        className={`position-absolute m-3 ${snackbarMessage.layoutType}Snackbar`}
        variant={snackbarMessage.variant}
        dismissible
        onClose={() => setShow(false)}
      >
        <span className="font-weight-bold mr-1">
          {snackbarMessage.shortMessage}
        </span>
        <span>{snackbarMessage.longMessage}</span>
      </Alert>
    );
  } else {
    return null;
  }
}

function mapStateToProps(state) {
  return { snackbarMessage: state.global.snackbarMessage };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarMessage);
