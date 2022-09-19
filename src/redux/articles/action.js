import { DELETE_ARTICLE, GET_ARTICLES, SET_ARTICLES } from "./constants";

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
export const deleteArticle = (data) => {
  return {
    type: DELETE_ARTICLE,
    payload: data,
  };
};
