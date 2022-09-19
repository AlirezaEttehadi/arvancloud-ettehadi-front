import { call, put, takeLatest } from "redux-saga/effects";
import { setArticles } from "./action";
import { DELETE_ARTICLE, GET_ARTICLES } from "./constants";
import request from "../../apis/request";
import { articlesEntity, articleEntity } from "../../apis/articles/index";
import { startLoading, stopLoading } from "../global/action";

function* getArticlesSaga(action) {
  try {
    yield put(startLoading());
    const articles = yield call(request, "get", articlesEntity);
    yield put(setArticles(articles.data.articles));
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}
function* deleteArticleSaga(action) {
  try {
    yield put(startLoading());
    const articles = yield call(
      request,
      "delete",
      articleEntity(action.payload)
    );
    yield call(getArticlesSaga);
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}

function* myArticlesSaga() {
  yield takeLatest(GET_ARTICLES, getArticlesSaga);
  yield takeLatest(DELETE_ARTICLE, deleteArticleSaga);
}

export default myArticlesSaga;
