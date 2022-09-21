import { Navigate } from "react-router-dom";

const RouteGaurd = ({ children, type = "Protected" }) => {
  function hasJWT() {
    let flag = false;
    JSON.parse(localStorage.getItem("user"))?.token
      ? (flag = true)
      : (flag = false);
    return flag;
  }
  if (type === "Auth") {
    if (hasJWT()) {
      return <Navigate to="/articles" />;
    } else {
      return children;
    }
  } else if (type === "Protected") {
    if (!hasJWT()) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  }
};

export default RouteGaurd;
