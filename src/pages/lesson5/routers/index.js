/*
 * @Author: Winnie
 * @Date: 2021-04-26 13:52:42
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-07 21:38:37
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/routers/index.js
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import _404Page from "../pages/_404Page";
import PrivateRoute from "./PrivateRoute";

export class RouterPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <Link to="/"> 首页 </Link>
            <Link to="/user"> 用户中心 </Link>
            <Link to="/login"> 登录 </Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route exact path="/user" component={UserPage} /> */}
            <PrivateRoute path="/user" component={UserPage}/>
            <Route component={_404Page} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default RouterPage;
