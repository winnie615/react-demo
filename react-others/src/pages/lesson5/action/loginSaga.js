/*
 * @Author: Winnie
 * @Date: 2021-05-12 23:48:56
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 13:53:58
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/action/loginSaga.js
 */
import {
  call,
  put,
  // takeEvery,
  take,
  fork,
} from "redux-saga/effects";
import LoginService from "../services/login";
import { LOGIN_FAILURE, LOGIN_SAGA, LOGIN_SUCCESS, REQUEST } from "./const";
// 调用异步操作
// 状态更新 put
// 做监听 take takeEvery

// redux-saga里是generator函数
// worker saga
function* loginHandle(action) {
  yield put({ type: REQUEST });
  try {
    // 两个顺序异步请求
    const res1 = yield call(LoginService.login, action.payload);
    const res2 = yield call(LoginService.getMoreUserInfo, res1);
    // 状态更新
    yield put({ type: LOGIN_SUCCESS, payload: res2 });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE, payload: err });
  }
}
// watch saga
function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle);

  // take:只能处理一次，使用while多次处理
  // while(true){
  //     const action = yield take(LOGIN_SAGA);
  // call阻塞型的任务，即generator在调用结束之前不能执行或处理任何其他事情
  // yield  call(loginHandle,action)
  // fork非阻塞型，任务会在后台启动，调用者也可以继续它自己的流程，而不用等待被fork的任务结束
  //     yield  fork(loginHandle,action)
  //     console.log(action);
  // }
}

export default loginSaga;

const takeEvery = (pattern, saga, ...args) =>
  fork(function* () {
    //   为什么没有死循环：有状态
    while (true) {
      const action = yield take(pattern);
      yield fork(saga, ...args.concat(action));
    }
  });
