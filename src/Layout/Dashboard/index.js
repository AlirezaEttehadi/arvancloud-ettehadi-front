import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Dashboard({ children }) {
  const [isSidebarOpen, toggleSidebar] = useState(true);
  return (
    <div>
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        {children}
      </div>
    </div>
  );
}
