/*
 * @Author: Winnie
 * @Date: 2021-04-27 11:40:23
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-06 20:56:55
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux-saga/pages/LoginPage.js
 */
import React, { Component } from 'react'
import {connect} from "react-redux";

@connect(
    state => (
        {}
    ),{
    login: () => ({type: 'LOGIN_SUCCESS'})
})
class LoginPage extends Component {
   render() {
    const {isLogin,login,location,loading} = this.props;
       return (
           <div>
                <h1>LoginPage</h1>
                <button onClick={() => login()}>
                    {loading?  'loading......': 'click login'}
                </button>
           </div>
       )
   }
}
export default LoginPage