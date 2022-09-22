import React from "react";

import { Button, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

import HamburgerMenu from "./HamburgerMenu";
import logout from "../../../../utils/logout";

export default function Header({ openMobileSidebar }) {
  const user = JSON.parse(localStorage.getItem("user"));
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
        <span className="text-white">Welcome {user?.username}</span>
      </div>
      <Button variant="outline-info" onClick={() => logout()}>
        Logout
      </Button>
    </Navbar>
  );
}

Header.propTypes = {
  openMobileSidebar: PropTypes.func,
};
