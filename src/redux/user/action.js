import { GET_USER, SET_USER, LOGIN, REGISTER } from "./constants";

// user
export const getUser = () => {
  return {
    type: GET_USER,
  };
};
export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

// auth
export const register = (data, callback) => {
  return {
    type: REGISTER,
    payload: data,
    callback,
  };
};
export const login = (data, callback) => {
  return {
    type: LOGIN,
    payload: data,
    callback,
  };
};
