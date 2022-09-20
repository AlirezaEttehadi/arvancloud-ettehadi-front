import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  function hasJWT() {
    let flag = false;
    JSON.parse(localStorage.getItem("user"))?.token
      ? (flag = true)
      : (flag = false);
    return flag;
  }
  if (hasJWT()) {
    return <Navigate to="/articles" />;
  }
  return children;
};
