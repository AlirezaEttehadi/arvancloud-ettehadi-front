import React from "react";
import SnackbarMessage from "../components/SnackbarMessage";

export default function Auth({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100 position-relative">
      <SnackbarMessage
        variant="danger"
        shortMessage="Login Failed!"
        longMessage="User name and/or Password is invalid"
        layoutType="auth"
      />
      {children}
    </div>
  );
}
