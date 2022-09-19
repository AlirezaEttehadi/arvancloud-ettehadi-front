import { SET_ARTICLES } from "./constants";

const initialState = {
  articles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export default reducer;
