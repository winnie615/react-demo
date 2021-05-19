/*
 * @Author: Winnie
 * @Date: 2021-05-06 20:29:09
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 11:35:49
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/store/index.js
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import {loginReducer} from './loginReducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import loginSaga from "../action/loginSaga";
import rootSaga from "../action/rootSaga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({ user: loginReducer }),
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
);
//   运行
sagaMiddleware.run(rootSaga)
export default store;
