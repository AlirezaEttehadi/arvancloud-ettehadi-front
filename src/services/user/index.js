import axios from "axios";

export const getUserRequest = () => {
  return axios.get("https://api.realworld.io/api/user");
};
