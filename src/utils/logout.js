import axios from "axios";

const logout = () => {
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
  window.location.href = "/";
};
export default logout;
