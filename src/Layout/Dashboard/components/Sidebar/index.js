import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="vertical-menu">
        <NavLink
          end
          to="/articles/"
          style={({ isActive }) => ({
            backgroundColor: isActive && "rgba(255, 255, 255, 0.15)",
          })}
        >
          All Articles
        </NavLink>
        <NavLink
          to="/articles/create"
          style={({ isActive }) => ({
            backgroundColor: isActive && "rgba(255, 255, 255, 0.15)",
          })}
        >
          New Article
        </NavLink>
      </div>
    </div>
  );
}
