/*
 * @Author: Winnie
 * @Date: 2021-04-15 18:07:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 21:51:14
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/ReduxPage.js
 */
import React, { Component } from "react";
import store from "./store";
import "./index";
export class ReduxPage extends Component {
  componentDidMount() {
    // store发生变化之后，执行subscribe的监听函数
    // 重点，有订阅，一定要有取消订阅
    this.unSubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unSubscribe && this.unSubscribe();
  }
  add = () => {
    store.dispatch({
      type: "ADD",
      payload: 100,
    });
  };
  minus = () => {
    store.dispatch({
      type: "MINUS",
      payload: 100,
    });
  };
  asyncAdd = () => {
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: "ADD" });
      }, 1000);
    });
  };
  add2 = () => {
    store.dispatch({
      type: "ADD2",
      payload: 200,
    });
  }
  render() {
    return (
      <div>
        <h3> ReduxPage </h3>
        <button onClick={this.minus}> - </button>
        <span> {store.getState().count} </span>
        <button onClick={this.asyncAdd}> + </button>
        <div>{store.getState().count2}</div>
        <button onClick={this.add2}> +100 </button>
      </div>
    );
  }
}
export default ReduxPage;
