/*
 * @Author: Winnie
 * @Date: 2021-05-18 21:18:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-18 21:21:17
 * @Description: 作用
 * @FilePath: /lesson6-umi/src/pages/product/_layout.js
 */
import React from 'react';

export default function Page(props) {
  return (
    <div style={{ color: 'red' }}>
      <h1>layout</h1>
      {props.children}
    </div>
  );
}
