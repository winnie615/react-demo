/*
 * @Author: Winnie
 * @Date: 2021-05-07 21:31:25
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-07 21:57:52
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/routers/PrivateRoute.js
 */
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default connect(
  // mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin })
  // mapDispatchToProps
)(function PrivateRoute({ isLogin, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
});
