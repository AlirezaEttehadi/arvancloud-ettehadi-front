import { GET_ARTICLES, SET_ARTICLES } from "./constants";

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
  };
};
export const setArticles = (data) => {
  return {
    type: SET_ARTICLES,
    payload: data,
  };
};
