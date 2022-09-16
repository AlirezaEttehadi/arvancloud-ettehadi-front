import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Dashboard({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
