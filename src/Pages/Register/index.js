import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/user/action";

function Register({ _register, loading }) {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      _register(
        {
          user: { username, email, password },
        },
        navigate
      );
    }
    setValidated(true);
  };

  return (
    <>
      <div className="register-form p-4 mx-3">
        <h1 className="register-header text-center mb-4">REGISTER</h1>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              controlId="formBasicUser"
              onChange={(event) => setUsername(event.target.value)}
            >
              <Form.Label>User</Form.Label>
              <Form.Control required type="text" placeholder="Enter username" />
              <Form.Control.Feedback type="invalid">
                Required field
              </Form.Control.Feedback>
            </Form.Group>
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
    </>
  );
}

function mapStateToProps(state) {
  return { user: state.user.user, loading: state.global.loading };
}

function mapDispatchToProps(dispatch) {
  return {
    _register: (data, callback) => dispatch(register(data, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
