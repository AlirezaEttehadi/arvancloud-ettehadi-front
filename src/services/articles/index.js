import axios from "axios";

export const getArticlesRequest = () => {
  return axios.get("https://api.realworld.io/api/articles");
};
