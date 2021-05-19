/*
 * @Author: Winnie
 * @Date: 2021-05-06 20:22:17
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-06 20:57:12
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux-saga/store/mySaga.js
 */
// saga 是一个用于管理应用程序副作用的库，类比redux-thunk
// 调用异步操作
// 状态更新（dispatch）
// 监听
import {call,put,takeEvery} from 'redux-saga/effects'
// worker saga
function  * loginHandle(props) {
    console.log('+++++++++++++++++++++');
    console.log('loginHandle');
    console.log('----------------------');
}
// watcher saga
function * mySaga(props) {
    console.log('+++++++++++++++++++++');
    console.log('mySaga');
    console.log('----------------------');
    yield takeEvery('login', loginHandle)
}

export default mySaga;