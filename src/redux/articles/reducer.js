import {
  CLEAR_ARTICLE,
  SET_ARTICLE,
  SET_ARTICLES,
  SET_ARTICLES_COUNT,
  SET_TAGS,
} from "./constants";

const initialState = {
  articles: [],
  articlesCount: 0,
  tags: [],
  article: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, articles: action.payload };
    case SET_ARTICLES_COUNT:
      return { ...state, articlesCount: action.payload };
    case SET_TAGS:
      return { ...state, tags: action.payload };
    case SET_ARTICLE:
      return { ...state, article: action.payload };
    case CLEAR_ARTICLE:
      return { ...state, article: null };
    default:
      return state;
  }
};

export default reducer;
