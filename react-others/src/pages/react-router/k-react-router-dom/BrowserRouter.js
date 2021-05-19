/*
 * @Author: Winnie
 * @Date: 2021-05-04 18:11:16
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 19:07:33
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/k-react-router-dom/BrowserRouter.js
 */
import React, { Component } from "react";
import { createBrowserHistory } from "history";
import Router from "./Router";
export class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }
  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}
export default BrowserRouter;
