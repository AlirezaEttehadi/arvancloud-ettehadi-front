import {
  GET_ARTICLES,
  SET_ARTICLES,
  SET_ARTICLES_COUNT,
  CLEAR_ARTICLE,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLE,
  SET_ARTICLE,
  GET_TAGS,
  SET_TAGS,
} from "./constants";

// articles
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
export const setArticlesCount = (data) => {
  return {
    type: SET_ARTICLES_COUNT,
    payload: data,
  };
};
// article
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

export const deleteArticle = (data) => {
  return {
    type: DELETE_ARTICLE,
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
// tags
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
