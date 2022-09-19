import { SET_ARTICLES, SET_ARTICLES_COUNT } from "./constants";

const initialState = {
  articles: [],
  articlesCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, articles: action.payload };
    case SET_ARTICLES_COUNT:
      return { ...state, articlesCount: action.payload };
    default:
      return state;
  }
};

export default reducer;
