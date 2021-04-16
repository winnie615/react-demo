/*
 * @Author: Winnie
 * @Date: 2021-04-15 19:44:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 23:13:15
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/store/index.js
 */
// import { createStore } from "redux";
import createStore  from "../kRedux/createStore";

function countReducer(state = 0, { type, payload }) {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state <= 100 ? 0 : state - payload;
    default:
      return state;
  }
}

const store = createStore(countReducer, 0);
export default store;
