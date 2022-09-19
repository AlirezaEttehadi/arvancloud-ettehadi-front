import axios from "axios";

export const registerNewUserRequest = () => {
  return axios.post("https://api.realworld.io/api/users", {
    username: "Fred",
    email: "Flintstone",
    password: "Flintstone",
  });
};
export const loginUserRequest = () => {
  return axios.post("https://api.realworld.io/api/users/login", {
    email: "Flintstone",
    password: "Flintstone",
  });
};
export const getUserRequest = () => {
  return axios.get("https://api.realworld.io/api/user");
};
