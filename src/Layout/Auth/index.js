import React from "react";

export default function Auth({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100 position-relative">
      {children}
    </div>
  );
}
