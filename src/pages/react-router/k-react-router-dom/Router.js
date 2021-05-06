/*
 * @Author: Winnie
 * @Date: 2021-05-05 19:06:03
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 19:46:01
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/k-react-router-dom/Router.js
 */
import React, { Component } from "react";
import { RouterContext } from "./RouterContext";
export class Router extends Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
    // 监听路由
    this.unListen = props.history.listen((location) => {
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    if (this.unListen) {
      this.unListen();
    }
  }
  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname),
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
export default Router;
