/*
 * @Author: Winnie
 * @Date: 2021-05-16 11:34:25
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 11:36:58
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/action/rootSaga.js
 */
import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';

export default function *rootSaga() {
    yield all([loginSaga()])
}