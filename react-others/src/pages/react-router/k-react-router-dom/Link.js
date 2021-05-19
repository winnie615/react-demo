/*
 * @Author: Winnie
 * @Date: 2021-05-04 18:11:24
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 19:51:01
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/k-react-router-dom/Link.js
 */
import React, { useContext } from "react";
import { RouterContext } from "./RouterContext";
const Link = ({ to, children, ...restProps }) => {
  const context = useContext(RouterContext);
  const handleClick = (e) => {
    e.preventDefault();
    context.history.push(to);
  };
  return (
    <a href={to} {...restProps} onClick={handleClick}>
      {children}
    </a>
  );
};
export default Link;
