/*
 * @Author: Winnie
 * @Date: 2021-04-15 18:07:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 22:21:42
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/ReactReduxPage.js
 */
import React, { Component } from "react";
import store from "./store";
import "./index";
export class ReactReduxPage extends Component {
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
  render() {
    return (
      <div>
        <h3> ReactReduxPage </h3>
        <span> {store.getState().count} </span>
        <button onClick={this.add}> + </button>
      </div>
    );
  }
}
export default ReactReduxPage;
