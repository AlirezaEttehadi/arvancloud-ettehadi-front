import React, { forwardRef } from "react";

import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MobileSidebar = ({ closeMobileSidebar }, ref) => {
  return (
    <div ref={ref} id="myNav" className="overlay">
      <Button
        variant="outline-dark"
        className="closebtn close"
        onClick={() => closeMobileSidebar()}
      >
        <span>&times;</span>
      </Button>
      <div className="overlay-content">
        <NavLink
          end
          to="/articles/"
          style={({ isActive }) => ({
            backgroundColor: isActive && "rgba(255, 255, 255, 0.15)",
          })}
          onClick={() => closeMobileSidebar()}
        >
          All Articles
        </NavLink>
        <NavLink
          to="/articles/create"
          style={({ isActive }) => ({
            backgroundColor: isActive && "rgba(255, 255, 255, 0.15)",
          })}
          onClick={() => closeMobileSidebar()}
        >
          New Article
        </NavLink>
      </div>
    </div>
  );
};
export default forwardRef(MobileSidebar);
