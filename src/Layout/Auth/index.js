import React from "react";

import PropTypes from "prop-types";

import SnackbarMessage from "../components/SnackbarMessage";

export default function Auth({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100 position-relative">
      <SnackbarMessage />
      {children}
    </div>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
