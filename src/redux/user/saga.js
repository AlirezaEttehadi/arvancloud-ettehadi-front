import { call, put, takeLatest } from "redux-saga/effects";

import { setUser } from "./action";
import { GET_USER, LOGIN, REGISTER } from "./constants";
import request from "../../apis/request";
import {
  loginUserEntity,
  usersEntity,
  userEntity,
} from "../../apis/user/index";
import {
  setSnackbarMessage,
  startLoading,
  stopLoading,
} from "../global/action";

function* getUserSaga(action) {
  try {
    yield put(startLoading());
    const user = yield call(request, "post", userEntity, action.payload);
    yield put(setUser(user.data.data));
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}
function* registerSaga(action) {
  try {
    yield put(startLoading());
    const user = yield call(request, "post", usersEntity, action.payload);
    yield put(setUser(user.data.user));
    localStorage.setItem("user", JSON.stringify(user.data.user));
    if (user.data.user.token) {
      yield call(action.callback, "/articles");
    }
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    console.log(e);
  }
}
function* loginSaga(action) {
  try {
    yield put(startLoading());
    const user = yield call(request, "post", loginUserEntity, action.payload);
    yield put(setUser(user.data.user));
    localStorage.setItem("user", JSON.stringify(user.data.user));
    if (user.data.user.token) {
      yield call(action.callback, "/articles");
    }
    yield put(stopLoading());
  } catch (e) {
    yield put(stopLoading());
    yield put(
      setSnackbarMessage({
        variant: "danger",
        shortMessage: "Login Failed!",
        longMessage: "Username and/or Password is invalid",
        layoutType: "auth",
        show: true,
      })
    );
    console.log(e);
  }
}

function* myUserSaga() {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

export default myUserSaga;
