/*
 * @Author: Winnie
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 22:18:38
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/router.js
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ExamplePage from './routes/ExamplePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/example" exact component={ExamplePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
