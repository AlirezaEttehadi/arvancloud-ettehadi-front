import React, { useEffect, useRef } from "react";

export default function Sidebar({ isSidebarOpen }) {
  const sidebarRef = useRef(null);
  useEffect(() => {
    if (isSidebarOpen) {
      sidebarRef.current.style.width = "250px";
    } else {
      sidebarRef.current.style.width = "0px";
    }
  }, [isSidebarOpen]);

  return (
    <div ref={sidebarRef} className="sidebar-container vh-100">
      <div className="vertical-menu">
        <a className="active">All Articles</a>
        <a>New Article</a>
      </div>
    </div>
  );
}
