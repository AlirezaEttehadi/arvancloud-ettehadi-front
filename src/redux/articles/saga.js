import { call, put, takeLatest } from "redux-saga/effects";
import { setArticles } from "./action";
import { GET_ARTICLES } from "./constants";
import request from "../../apis/request";
import { articlesEntity } from "../../apis/articles/index";

function* getArticlesSaga(action) {
  try {
    const articles = yield call(request, "get", articlesEntity);
    yield put(setArticles(articles.data.articles));
  } catch (e) {
    console.log(e);
  }
}

function* myArticlesSaga() {
  yield takeLatest(GET_ARTICLES, getArticlesSaga);
}

export default myArticlesSaga;
