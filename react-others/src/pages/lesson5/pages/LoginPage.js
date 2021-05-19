/*
 * @Author: Winnie
 * @Date: 2021-04-27 11:40:23
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-12 23:28:11
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/pages/LoginPage.js
 */
import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { login } from "../action/user";
@connect(
  (state) => ({
    isLogin: state.user.isLogin,
    err: state.user.err,
    loading: state.user.loading,
  }),
  {
    login,
  }
)
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    const { isLogin, location, login, err, loading } = this.props;
    const { from = "/" } = location.state || {};
    if (isLogin) {
      return <Redirect to={from} />;
    }
    const { name } = this.state;
    return (
      <div>
        <h1>LoginPage</h1>
        <input type="text" value={name} onChange={this.nameChange} />
        <p style={{ color: "red" }}>{err.msg}</p>
        <button onClick={() => login({ name })}>
          {loading ? "loading..." : "click login"}
        </button>
      </div>
    );
  }
}
export default LoginPage;
