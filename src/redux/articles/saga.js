import { call, put, takeLatest } from "redux-saga/effects";
import { setArticles } from "./action";
import { DELETE_ARTICLE, GET_ARTICLES } from "./constants";
import request from "../../apis/request";
import { articlesEntity, articleEntity } from "../../apis/articles/index";

function* getArticlesSaga(action) {
  try {
    const articles = yield call(request, "get", articlesEntity);
    yield put(setArticles(articles.data.articles));
  } catch (e) {
    console.log(e);
  }
}
function* deleteArticleSaga(action) {
  try {
    const articles = yield call(
      request,
      "delete",
      articleEntity(action.payload)
    );
    yield call(getArticlesSaga);
  } catch (e) {
    console.log(e);
  }
}

function* myArticlesSaga() {
  yield takeLatest(GET_ARTICLES, getArticlesSaga);
  yield takeLatest(DELETE_ARTICLE, deleteArticleSaga);
}

export default myArticlesSaga;
