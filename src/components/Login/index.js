import React from "react";
import { Button, Form } from "react-bootstrap";
import "./index.scss";

export default function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="login-form p-4 mx-3">
        <h1 className="login-header text-center mb-4">LOGIN</h1>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </div>
        <div className="mt-3">
          <span className="mr-2">Don't have an account?</span>
          <span className="font-weight-bold">Register Now</span>
        </div>
      </div>
    </div>
  );
}
