/*
 * @Author: Winnie
 * @Date: 2021-04-26 13:52:42
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 21:08:25
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/RouterPage.js
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from "./k-react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";
import ProductPage from "./pages/ProductPage";

export class RouterPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <Link to="/"> 首页 </Link>
            <Link to="/user"> 用户中心 </Link>
            <Link to="/login"> 登录 </Link>
            <Link to="/product/123"> 商品 </Link>
          </nav>
          <Switch>
            {/* 渲染优先级：children > component > render */}
            <Route
              exact
              path="/"
              // children={() => <div>children page</div>}
              render={() => <div>render page</div>}
              component={HomePage}
            />
            <Route exact path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route
              path="/product/:id"
              // component={ProductPage}
              render={() => <ProductPage />}
            />
            <Route component={_404Page} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default RouterPage;
