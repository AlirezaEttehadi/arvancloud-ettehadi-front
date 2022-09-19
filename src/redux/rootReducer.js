import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import articlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
  userReducer,
  articlesReducer,
});

export default rootReducer;
