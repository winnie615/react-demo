/*
 * @Author: Winnie
 * @Date: 2021-04-26 13:53:28
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-07 22:25:20
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/pages/UserPage.js
 */
import React from 'react';
import { connect } from 'react-redux';

const UserPage = (props) => {
  const {user} = props;
  const {userInfo} = user;
  return <div>
              <h1>UserPage</h1>
              <p>name:{userInfo.name}</p>
              <p>id: {userInfo.id}</p>
              <p>score: {userInfo.score}</p>
         </div>
}
export default connect(({user}) => ({user}))(UserPage);