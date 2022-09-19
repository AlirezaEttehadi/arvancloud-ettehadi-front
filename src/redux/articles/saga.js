import { call, put, takeLatest } from "redux-saga/effects";
import { getArticlesRequest } from "../../services/articles";
import { setArticles } from "./action";
import { GET_ARTICLES } from "./constants";

function* getArticlesSaga() {
  try {
    const user = yield call(getArticlesRequest);
    yield put(setArticles(user.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* myArticlesSaga() {
  yield takeLatest(GET_ARTICLES, getArticlesSaga);
}

export default myArticlesSaga;
