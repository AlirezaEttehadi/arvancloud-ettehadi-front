import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      {show && (
        <Alert
          className="position-absolute m-3 login-alert"
          variant="danger"
          dismissible
          onClose={() => setShow(false)}
        >
          <span className="font-weight-bold mr-1">Login Failed!</span>
          <span>User name and/or Password is invalid</span>
        </Alert>
      )}
      <div className="login-form p-4 mx-3">
        <h1 className="login-header text-center mb-4">LOGIN</h1>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                Required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">
                Required field
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </div>
        <div className="mt-3">
          <span className="mr-2">Don't have an account?</span>
          <Link
            className="login-register-button font-weight-bold"
            to="/register"
          >
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
}
