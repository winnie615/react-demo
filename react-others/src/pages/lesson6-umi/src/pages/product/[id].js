/*
 * @Author: Winnie
 * @Date: 2021-05-18 21:10:17
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-18 21:15:45
 * @Description: 作用
 * @FilePath: /lesson6-umi/src/pages/product/[id].js
 */
import React from 'react';
import styles from './[id].css';

const Product = props => {
  console.log('%c 🍷 props: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', props.match.params);
  return (
    <div>
      <h1 className={styles.title}>Page product/[id]</h1>
    </div>
  );
}
export default Product;
