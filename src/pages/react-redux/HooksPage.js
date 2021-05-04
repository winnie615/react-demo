/*
 * @Author: Winnie
 * @Date: 2021-04-19 13:55:59
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-19 22:02:35
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-redux/HooksPage.js
 */
import React, { useReducer, useCallback,useEffect,useLayoutEffect } from "react";
import { countReducer } from "./store";
const initArg = (init) => init - 0;
const HooksPage = () => {
  // const [state, dispatch] = useReducer(countReducer, 0);
  // initArg第三个为可选参数
  const [state, dispatch] = useReducer(countReducer, "0", initArg);
  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, []);
  const minus = useCallback(() => {
    dispatch({ type: "MINUS" });
  }, []);
  // 赋值给 useEffect 的函数会在组件渲染到屏幕之后延迟执行
  useEffect(() => {
    console.log('didMount');
    return () => {
      console.log('willUnmount');
    }
  }, [state])
  // 但它会在所有的 DOM 变更之后同步调用 effect
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  },[])
  return (
    <div>
      <h3>HooksPage</h3>
      <button onClick={minus}>minus</button>
      <p>{state}</p>
      <button onClick={add}>add</button>
    </div>
  );
};
export default HooksPage;
// 3-2
