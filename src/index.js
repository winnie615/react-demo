/*
 * @Author: Winnie
 * @Date: 2021-04-10 09:58:06
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 23:51:24
 * @Description: 作用
 * @FilePath: /demo/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './pages/redux/store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
