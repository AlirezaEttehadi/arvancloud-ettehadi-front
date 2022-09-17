import React, { useRef } from "react";
import SnackbarMessage from "../components/SnackbarMessage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/Sidebar/MobileSidebar";

export default function Dashboard({ children }) {
  const isDesktopSize = window.innerWidth > 768;

  const mobileSidebarRef = useRef(null);

  const openMobileSidebar = () => {
    mobileSidebarRef.current.style.width = "100%";
  };
  const closeMobileSidebar = () => {
    mobileSidebarRef.current.style.width = "0%";
  };

  return (
    <div>
      <Header openMobileSidebar={openMobileSidebar} />
      <SnackbarMessage />
      <div className="d-flex">
        {isDesktopSize ? (
          <Sidebar />
        ) : (
          <MobileSidebar
            ref={mobileSidebarRef}
            closeMobileSidebar={closeMobileSidebar}
          />
        )}
        {children}
      </div>
    </div>
  );
}
