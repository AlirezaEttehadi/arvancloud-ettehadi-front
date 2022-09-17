import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";

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
        <a href="#">All Articles</a>
        <a href="#">New Article</a>
      </div>
    </div>
  );
};
export default forwardRef(MobileSidebar);
