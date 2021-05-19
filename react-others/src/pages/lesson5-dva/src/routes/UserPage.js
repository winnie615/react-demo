/*
 * @Author: Winnie
 * @Date: 2021-05-17 23:29:12
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-17 23:36:25
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/routes/UserPage.js
 */
import React from 'react';
import { connect } from "dva";

const UserPage = (props) => {
  console.log(props.user);
  return <div>
              UserPage
              {props.user.name}
         </div>
}
export default connect(
  ({user}) => ({user})
)(UserPage);