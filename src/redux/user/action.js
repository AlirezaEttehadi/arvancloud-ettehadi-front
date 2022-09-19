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
export const register = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};
export const login = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};
