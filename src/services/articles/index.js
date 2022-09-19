import axios from "axios";

export const getArticlesRequest = (page = 1, pageSize = 20) => {
  return axios.get(
    `https://api.realworld.io/api/articles?limit=${pageSize}&offset=${
      page * pageSize
    }`
  );
};
export const createArticleRequest = (slug) => {
  return axios.get("https://api.realworld.io/api/articles/", {
    body: "sdfsd",
    description: "adsfsdf",
    title: "SDFsfd",
    tags: ["Sdfsdf", "sdfsdf"],
  });
};
export const getArticleRequest = (slug) => {
  return axios.get(`https://api.realworld.io/api/articles/${slug}`);
};
export const editArticleRequest = (slug) => {
  return axios.put(`https://api.realworld.io/api/articles/${slug}`, {
    author: "sdf",
    body: "sdfsdf",
    createdAt: "sdf",
    id: "sdfsf",
    updatedAt: "Sdfsdf",
  });
};
export const deleteArticleRequest = (slug) => {
  return axios.delete(`https://api.realworld.io/api/articles/${slug}`);
};
export const getTagsRequest = () => {
  return axios.delete("https://api.realworld.io/api/tags");
};
