/*
 * @Author: Winnie
 * @Date: 2021-05-05 21:18:12
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 21:27:54
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/k-react-router-dom/hooks.js
 */
// useHistory, useLocation, useParams, useRouteMatch

import { useContext } from "react";
import { RouterContext } from "./RouterContext";
export function useHistory() {
  return useContext(RouterContext).history;
  
}
export function useLocation() {
  return useContext(RouterContext).location;
}
export function useRouteMatch() {
  return useContext(RouterContext).match;
}
export function useParams() {
  const match = useContext(RouterContext).match;
  return match ? match.params : {};
}
