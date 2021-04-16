/*
 * @Author: Winnie
 * @Date: 2021-04-15 19:44:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-17 00:09:58
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/store/index.js
 */
import { createStore,applyMiddleware,combineReducers } from "redux";
// import createStore from "../kRedux/createStore";
// import applyMiddleware from "../kRedux/applyMiddleware";
// import thunk from "redux-thunk"; // 异步解决方案
// import logger from 'redux-logger'; //  打印日志

// 定义修改规则
function countReducer(state = 0, { type }) {
  switch (type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state <= 100 ? 0 : state - 1;
    default:
      return state;
  }
}
// logger要作为applyMiddleware最后一个参数，不然不能保证action是plain object
const store = createStore(countReducer, applyMiddleware(thunk, logger));
export default store;

function logger({ getState, dispatch }) {
  return (next) => (action) => {
    console.log("*****************************");
    const prevState = getState();
    console.log("prevState", prevState);
    const returnVal = next(action);
    const nextState = getState();
    console.log("nextState", nextState);
    console.log("*****************************");
    return returnVal;
  };
}
function thunk({ getState, dispatch }) {
  return (next) => (action) => {
    if(typeof action  === 'function') {
      return action(dispatch,getState)
    }
    return  next(action)
  };
}
