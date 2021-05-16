/*
 * @Author: Winnie
 * @Date: 2021-04-10 09:58:06
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-07 21:25:56
 * @Description: 作用
 * @FilePath: /demo/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./pages/lesson5/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// yield只能用在Generator函数里
// function* helloWorldGenerator() {
//   yield "hello";
//   yield "world";
//   return "ending";
// }
// var hw = helloWorldGenerator();
// //执⾏
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// let a = 0;
// function* fun() {
//   let aa = yield (a = 1 + 1);
//   return aa;
// }
// console.log("fun0", a);
// let b = fun();
// console.log("fun", b.next()); //注释下这句试试，⽐较下前后a的值
// console.log("fun1", a);
