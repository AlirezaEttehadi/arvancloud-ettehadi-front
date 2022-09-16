import React from "react";
import { Button, Navbar } from "react-bootstrap";

export default function Articles() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex align-items-center justify-content-between"
    >
      <div>
        <Navbar.Brand className="mr-3">Arvan Challenge</Navbar.Brand>
        <span className="text-white">Welcome alireza</span>
      </div>
      <Button variant="outline-info">Logout</Button>
    </Navbar>
  );
}
