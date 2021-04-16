/*
 * @Author: Winnie
 * @Date: 2021-04-15 23:06:12
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-16 22:52:36
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/kRedux/createStore.js
 */
const createStore = (reducer, enhancer) => {
  if (enhancer) {
    // enhancer是用于加强store的dispatch的
    return enhancer(createStore)(reducer);
  }
  // 状态
  let currentState;
  // 监听
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
    // 返回取消订阅函数，这样才能成对出现
    return () => {
      currentListeners = currentListeners.filter((l) => l !== listener);
    };
  };
  // 手动执行一次dispatch，派发初始值
  dispatch({ type: "INIT" });
  return {
    getState,
    dispatch,
    subscribe,
  };
};
export default createStore;
