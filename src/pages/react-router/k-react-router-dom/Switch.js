/*
 * @Author: Winnie
 * @Date: 2021-05-05 19:52:28
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 20:24:11
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/k-react-router-dom/Switch.js
 */
import React, { Component } from "react";
import matchPath from "./matchPath";
import { RouterContext } from "./RouterContext";
//  独占路由
// 渲染与该地址匹配的 第一个子节点<Route>或者<Redirect>
// 遍历子节点，找到匹配的，就走了
export class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location;
          let match; // 标记匹配
          let ele; // 记录比配的元素
          React.Children.forEach(this.props.children, (child) => {
            if (match == null && React.isValidElement(child)) {
              ele = child;
              match = child.props.path
                ? matchPath(location.pathname, child.props)
                : context.path;
            }
          });
          return match ? React.cloneElement(ele,{computedMatch: match}) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Switch;
