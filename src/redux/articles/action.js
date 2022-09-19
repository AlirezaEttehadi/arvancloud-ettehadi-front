import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTICLES,
  SET_ARTICLES,
  SET_ARTICLES_COUNT,
} from "./constants";

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
export const setArticlesCount = (data) => {
  return {
    type: SET_ARTICLES_COUNT,
    payload: data,
  };
};
export const createArticle = (data) => {
  return {
    type: CREATE_ARTICLE,
    payload: data,
  };
};
