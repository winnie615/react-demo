/*
 * @Author: Winnie
 * @Date: 2021-04-15 23:52:04
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 23:56:41
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/index.js
 */
function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg);
  return arg;
}
function compose(...funcs)  {
    return  funcs.reduce((a,b) => (...args) => a(b(...args)))
    
}
compose(f1,f2,f3)('omg')