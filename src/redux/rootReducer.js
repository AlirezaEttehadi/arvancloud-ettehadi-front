import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import articlesReducer from "./articles/reducer";
import GlobalReducer from "./global/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  article: articlesReducer,
  global: GlobalReducer,
});

export default rootReducer;
