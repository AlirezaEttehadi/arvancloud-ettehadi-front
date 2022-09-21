import {
  CLEAR_ARTICLE,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLE,
  GET_ARTICLES,
  GET_TAGS,
  SET_ARTICLE,
  SET_ARTICLES,
  SET_ARTICLES_COUNT,
  SET_TAGS,
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
export const createArticle = (data, callback) => {
  return {
    type: CREATE_ARTICLE,
    payload: data,
    callback,
  };
};
export const getTags = () => {
  return {
    type: GET_TAGS,
  };
};
export const setTags = (data) => {
  return {
    type: SET_TAGS,
    payload: data,
  };
};
export const editArticle = (data, callback, slug) => {
  return {
    type: EDIT_ARTICLE,
    payload: data,
    callback,
    slug,
  };
};
export const getArticle = (data) => {
  return {
    type: GET_ARTICLE,
    payload: data,
  };
};
export const setArticle = (data) => {
  return {
    type: SET_ARTICLE,
    payload: data,
  };
};
export const clearArticle = () => {
  return {
    type: CLEAR_ARTICLE,
  };
};
