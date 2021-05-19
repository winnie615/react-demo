/*
 * @Author: Winnie
 * @Date: 2021-04-15 18:07:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-19 22:05:38
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-redux/ReactReduxPage.js
 */
import React, { Component } from "react";
import {connect} from 'react-redux'
@connect(
  // mapStateToProps  function
  ({count}) => ({count}),
  // mapDispatchToProps object
  // {
  //   add:  () => ({
  //     type: 'ADD'
  //   })
  // }
  // mapDispatchToProps function
  (dispatch) => {
    const add = () => dispatch({type:'ADD'})
    return {dispatch,add}
  }
)
class ReactReduxPage extends Component {
  dispatchAdd = () => {
    this.props.dispatch({
      type: "ADD",
      payload: 100,
    });
  };
  render() {
    const {count, add}  =  this.props;
    console.log(this.props); 
    return (
      <div>
        <h3> ReactReduxPage </h3>
        <span> {count} </span>
        <button onClick={this.dispatchAdd}> dispatchAdd </button>
        <button onClick={add}> add </button>
      </div>
    );
  }
}
export default ReactReduxPage;
