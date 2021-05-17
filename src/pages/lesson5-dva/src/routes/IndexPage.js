/*
 * @Author: Winnie
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 22:19:29
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/routes/IndexPage.js
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Link} from 'dva/router'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <Link to='/example'>to example</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
