/*
 * @Author: Winnie
 * @Date: 2021-04-15 23:52:04
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 20:20:37
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/index.js
 */
// const array1 = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => {
//   console.log(
//     "%c 🍦 accumulator: ",
//     "font-size:20px;background-color: #ED9EC7;color:#fff;",
//     accumulator
//   );
//   console.log(
//     "%c 🍸 currentValue: ",
//     "font-size:20px;background-color: #ED9EC7;color:#fff;",
//     currentValue
//   );
//   return accumulator + currentValue;
// };
// acc是上一次的运行结果
// curr是当前的值
// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));
function f1(arg) {
  return `函数f1(${arg})`;
}
function f2(arg) {
  return `函数f2(${arg})`;
}
function f3(arg) {
  return `函数f3(${arg})`;
}
f3(f2(f1('omg')))
function compose(...funcs)  {
    return  funcs.reduce((a,b) => (...args) => a(b(...args)))

}
// compose(f1,f2,f3)('omg')
console.log('%c 🍚 compose(f1,f2,f3)(omg): ', 'font-size:20px;background-color: #F5CE50;color:#fff;', compose(f1,f2,f3)('omg'));
// const series = ['a1','a3','a1','a5','a7','a1','a3','a4','a2','a1'];

// const  result = series.reduce((acc,curr) => {
//   if(curr in acc) {
//     acc[curr]++
//   } else {
//     acc[curr]  =  1
//   }
//   return acc
// },{})
// console.log(result);