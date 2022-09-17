import React from "react";
import { Button, Navbar } from "react-bootstrap";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex align-items-center justify-content-between"
    >
      <HamburgerMenu className="d-md-none d-inline-block" />
      <div>
        <Navbar.Brand className="mr-3">Arvan Challenge</Navbar.Brand>
        <span className="text-white">Welcome alireza</span>
      </div>
      <Button variant="outline-info">Logout</Button>
    </Navbar>
  );
}
