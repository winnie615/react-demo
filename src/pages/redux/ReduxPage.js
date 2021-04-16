/*
 * @Author: Winnie
 * @Date: 2021-04-15 18:07:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 23:52:25
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/ReduxPage.js
 */
import React, { Component } from "react";
import store from "./store";
import './index'
export class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
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
  }
  render() {
    return (
      <div>
        <h3> ReduxPage </h3> 
        <button onClick={this.minus}> - </button>{" "}
        <span> {store.getState()} </span>{" "}
        <button onClick={this.add}> + </button>{" "}
      </div>
    );
  }
}
export default ReduxPage;
