/*
 * @Author: Winnie
 * @Date: 2021-05-06 20:29:09
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-06 20:51:29
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux-saga/store/index.js
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "../store/mySaga";

const userInit = {
  isLogin: false,
  userInfo: { id: null, name: "", score: 0 },
  loading: false,
  err: { msg: "" },
};

// 定义用户基本信息修改规则
export const loginReducer = (state = { ...userInit }, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        loading: false,
        userInfo: { ...payload },
      };
    case "LOGIN_FAILURE":
      return { ...state, ...userInit, ...payload };
    case "LOGOUT_SUCCESS":
      return { ...state, isLogin: false, loading: false };
    default:
      return state;
  }
};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ user: loginReducer }),

  // applyMiddleware(thunk),

  applyMiddleware(sagaMiddleware)
);
//   运行
sagaMiddleware.run(mySaga);

export default store;
