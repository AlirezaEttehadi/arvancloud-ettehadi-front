import { call, put, takeLatest } from "redux-saga/effects";
import { setArticle, setArticles, setArticlesCount, setTags } from "./action";
import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLE,
  GET_ARTICLES,
  GET_TAGS,
} from "./constants";
import request from "../../apis/request";
import {
  articlesEntity,
  articleEntity,
  tagsEntity,
} from "../../apis/articles/index";
import {
  setSnackbarMessage,
  startLoading,
  stopLoading,
} from "../global/action";

function* getArticlesSaga(action) {
  try {
    yield put(startLoading());
    const articles = yield call(request, "get", articlesEntity);
    yield put(setArticles(articles.data.articles));
    yield put(setArticlesCount(articles.data.articlesCount));
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
    yield put(
      setSnackbarMessage({
        variant: "success",
        shortMessage: "Well done!",
        longMessage: "Article deleted successfuly",
        layoutType: "dashboard",
        show: true,
      })
    );
    yield call(getArticlesSaga);
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}
function* createArticleSaga(action) {
  try {
    yield put(startLoading());
    const article = yield call(request, "post", articlesEntity, action.payload);
    yield call(action.callback, "/articles");
    yield put(
      setSnackbarMessage({
        variant: "success",
        shortMessage: "Well done!",
        longMessage: "Article created successfuly",
        layoutType: "dashboard",
        show: true,
      })
    );
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}
function* getTagsSaga() {
  try {
    yield put(startLoading());
    const tags = yield call(request, "get", tagsEntity);
    yield put(setTags(tags.data.tags));
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}

function* editArticleSaga(action) {
  try {
    yield put(startLoading());
    const article = yield call(
      request,
      "put",
      articleEntity(action.slug),
      action.payload
    );
    yield call(action.callback, "/articles");
    yield put(
      setSnackbarMessage({
        variant: "success",
        shortMessage: "Well done!",
        longMessage: "Article edited successfuly",
        layoutType: "dashboard",
        show: true,
      })
    );
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}
function* getArticleSaga(action) {
  try {
    yield put(startLoading());
    const article = yield call(request, "get", articleEntity(action.payload));
    yield put(setArticle(article.data.article));
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}

function* myArticlesSaga() {
  yield takeLatest(GET_ARTICLES, getArticlesSaga);
  yield takeLatest(DELETE_ARTICLE, deleteArticleSaga);
  yield takeLatest(CREATE_ARTICLE, createArticleSaga);
  yield takeLatest(GET_TAGS, getTagsSaga);
  yield takeLatest(EDIT_ARTICLE, editArticleSaga);
  yield takeLatest(GET_ARTICLE, getArticleSaga);
}

export default myArticlesSaga;
