import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100 position-relative">
      <div className="register-form p-4 mx-3">
        <h1 className="register-header text-center mb-4">REGISTER</h1>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUser">
              <Form.Label>User</Form.Label>
              <Form.Control required type="text" placeholder="Enter username" />
              <Form.Control.Feedback type="invalid">
                Required field
              </Form.Control.Feedback>
            </Form.Group>
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
              Register
            </Button>
          </Form>
        </div>
        <div className="mt-3">
          <span className="mr-2">Already Registered?</span>
          <Link className="register-login-button font-weight-bold" to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
