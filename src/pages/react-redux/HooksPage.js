/*
 * @Author: Winnie
 * @Date: 2021-04-19 13:55:59
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-19 14:53:45
 * @Description: 作用
 * @FilePath: \react-demo\src\pages\react-redux\HooksPage.js
 */
import React, { useReducer, useCallback } from "react";
import { countReducer } from "./store";
const HooksPage = () => {
  const [state, dispatch] = useReducer(countReducer, 0);
  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, []);
  const minus = useCallback(() => {
    dispatch({ type: "MINUS" });
  }, []);
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
