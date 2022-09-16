import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Dashboard({ children }) {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
