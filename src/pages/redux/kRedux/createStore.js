/*
 * @Author: Winnie
 * @Date: 2021-04-15 23:06:12
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 23:11:43
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/kRedux/createStore.js
 */
const createStore = (reducer,state) => {
  let currentState = state;
  let currentListeners = [];
  const getState = () => {
    return currentState;
  };
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
  };
  const subscribe = (listener) => {
    currentListeners.push(listener);
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
};
export default createStore;
