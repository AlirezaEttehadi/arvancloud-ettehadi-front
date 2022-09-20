import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/user/action";

function Login({ _login, loading }) {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      _login({
        user: { email, password },
      });
    }
    setValidated(true);
  };
  return (
    <>
      <div className="login-form p-4 mx-3">
        <h1 className="login-header text-center mb-4">LOGIN</h1>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              controlId="formBasicEmail"
              onChange={(event) => setEmail(event.target.value)}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                Required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              onChange={(event) => setPassword(event.target.value)}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">
                Required field
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="mt-4"
              variant="primary"
              type="submit"
              block
              disabled={loading}
            >
              {loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="mr-1"
                />
              )}
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

function mapStateToProps(state) {
  return { user: state.user.user, loading: state.global.loading };
}

function mapDispatchToProps(dispatch) {
  return {
    _login: (data) => dispatch(login(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
