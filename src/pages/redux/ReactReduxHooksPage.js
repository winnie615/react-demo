/*
 * @Author: Winnie
 * @Date: 2021-04-19 00:06:25
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-19 00:11:20
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/ReactReduxHooksPage.js
 */
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
const ReactReduxHooksPage = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </div>
  );
};
export default ReactReduxHooksPage;
// 3-2
