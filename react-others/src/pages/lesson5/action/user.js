/*
 * @Author: Winnie
 * @Date: 2021-05-07 22:07:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 11:21:16
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/action/user.js
 */
import LoginService from "../services/login";
import { LOGIN_FAILURE, LOGIN_SAGA, LOGIN_SUCCESS, REQUEST } from "./const"
// 同步
// export const login = (userInfo) => ({type:  LOGIN_SUCCESS, payload: userInfo})

// 异步方法1：redux-thunk
// 缺点：嵌套，容易形成回调地狱
// 优点：简单的异步，易于使用
// export const login = (userInfo) => (dispatch) => {
//   dispatch({ type: REQUEST });
//   LoginService.login(userInfo)
//     .then((res) => {
//       getMore(dispatch, res);
//     })
//     .catch((err) => {
//       dispatch({
//         type: LOGIN_FAILURE,
//         payload: err,
//       });
//     });
// };
// export const getMore = (dispatch, userInfo) => {
//   LoginService.getMoreUserInfo(userInfo)
//     .then((res) => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: LOGIN_FAILURE,
//         payload: err,
//       });
//     });
// };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 方法2：async  await
// 优点：简单，是generator的语法糖
// export const loginPromise = (dispatch,userInfo) => {
//     return LoginService.login(userInfo)
//       .then((res) => {
//         return res
//       })
//       .catch((err) => {
//         dispatch({
//           type: LOGIN_FAILURE,
//           payload: err,
//         });
//       });
//   };
// export const login = (userInfo) => {
//   return async (dispatch) => {
//     dispatch({ type: REQUEST });
//     let res1 = await loginPromise(dispatch, userInfo);
//     if (res1) {
//       getMore(dispatch, res1);
//     }
//   };
// };

// ++++++++++++++++++++++++++++++++++++++++++++++++
// 方法3：redux-saga

export const login = (userInfo) => ({type:  LOGIN_SAGA, payload: userInfo})
