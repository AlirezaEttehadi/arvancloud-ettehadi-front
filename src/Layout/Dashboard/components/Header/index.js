import React from "react";
import { Button, Navbar } from "react-bootstrap";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({ openMobileSidebar }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="d-flex align-items-center justify-content-between"
    >
      <Button
        variant="outline-info"
        onClick={() => openMobileSidebar()}
        className="d-inline-block d-md-none"
      >
        <HamburgerMenu />
      </Button>
      <div>
        <Navbar.Brand className="mr-3">Arvan Challenge</Navbar.Brand>
        <span className="text-white">Welcome alireza</span>
      </div>
      <Button variant="outline-info">Logout</Button>
    </Navbar>
  );
}
