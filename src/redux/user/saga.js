import { call, put, takeLatest } from "redux-saga/effects";
import { getUserRequest } from "../../services/user";
import { setUser } from "./action";
import { GET_USER, REGISTER } from "./constants";
import request from "../../apis/request";
import { usersEntity } from "../../apis/user/index";
function* getUserSaga() {
  try {
    const user = yield call(getUserRequest);
    yield put(setUser(user.data.data));
  } catch (e) {
    console.log(e);
  }
}
function* registerSaga(action) {
  console.log(action.payload);
  try {
    const user = yield call(request, "post", usersEntity, action.payload);
    console.log(user);
    yield put(setUser(user.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* myUserSaga() {
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(REGISTER, registerSaga);
}

export default myUserSaga;
