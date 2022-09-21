import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="d-flex flex-column">
        <Alert variant="danger">Page Not Found!</Alert>
        <Button variant="primary" onClick={() => navigate("/")}>
          GO TO HOME PAGE!
        </Button>
      </div>
    </div>
  );
}
