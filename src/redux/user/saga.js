import { call, put, takeLatest } from "redux-saga/effects";
import { getUserRequest } from "../../services/user";
import { setUser } from "./action";
import { GET_USER, LOGIN, REGISTER } from "./constants";
import request from "../../apis/request";
import { loginUserEntity, usersEntity } from "../../apis/user/index";
function* getUserSaga() {
  try {
    const user = yield call(getUserRequest);
    yield put(setUser(user.data.data));
  } catch (e) {
    console.log(e);
  }
}
function* registerSaga(action) {
  try {
    const user = yield call(request, "post", usersEntity, action.payload);
    yield put(setUser(user.data.data));
  } catch (e) {
    console.log(e);
  }
}
function* loginSaga(action) {
  try {
    const user = yield call(request, "post", loginUserEntity, action.payload);
    yield put(setUser(user.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* myUserSaga() {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

export default myUserSaga;
