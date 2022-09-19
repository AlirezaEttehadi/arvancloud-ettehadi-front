import { all } from "redux-saga/effects";
import myArticlesSaga from "./articles/saga";
import myUserSaga from "./user/saga";

export default function* rootSaga() {
  yield all([myUserSaga(), myArticlesSaga()]);
}
