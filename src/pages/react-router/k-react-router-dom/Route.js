/*
 * @Author: Winnie
 * @Date: 2021-05-04 18:11:35
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 21:13:08
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/k-react-router-dom/Route.js
 */
import React, { Component } from "react";
import { RouterContext } from "./RouterContext";
import matchPath from "./matchPath";
export class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;
          const {
            path,
            children,
            component,
            render,
            computedMatch,
          } = this.props;
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match; // location.pathname === path;
          const props = {
            ...context,
            match,
          };
          // 判断优先级
          // match：children，component，render，null

          // 不匹配：children（function），null
          //   return match ? React.createElement(component) : null;
          return match
            ? children
              ? typeof children === "function"
                ? children(props)
                : children
              : component
              ? React.createElement(component, props)
              : render
              ? render(props)
              : null
            : typeof children === "function"
            ? children(props)
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Route;
