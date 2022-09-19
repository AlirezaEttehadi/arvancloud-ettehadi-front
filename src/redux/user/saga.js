import { call, put, takeLatest } from "redux-saga/effects";
import { getUserRequest } from "../../services/user";
import { setUser } from "./action";
import { GET_USER } from "./constants";

function* getUserSaga() {
  try {
    const user = yield call(getUserRequest);
    yield put(setUser(user.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* myUserSaga() {
  yield takeLatest(GET_USER, getUserSaga);
}

export default myUserSaga;
