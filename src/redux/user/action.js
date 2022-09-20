import { GET_USER, LOGIN, REGISTER, SET_USER } from "./constants";

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
