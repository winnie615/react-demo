/*
 * @Author: Winnie
 * @Date: 2021-04-17 00:14:24
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 21:55:52
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/kRedux/combineReducers.js
 */
const combineReducers = (reducers) => {
  return function combination(state = {},action) {
    let nextState = {};

    let hasChanged = false;
    for (let key in reducers)  {
        const  reducer  =  reducers[key]
        nextState[key]  =  reducer(state[key],action);
        hasChanged = hasChanged ||  nextState !== state[key]
    }
    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    return hasChanged? nextState :state
  }
}
export default combineReducers;