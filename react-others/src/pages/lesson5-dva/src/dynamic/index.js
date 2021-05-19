/*
 * @Author: Winnie
 * @Date: 2021-05-17 23:40:02
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-17 23:46:56
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/dynamic/index.js
 */
import dynamic from 'dva/dynamic'
import {app} from '../index';

export const UserPageDynamic = dynamic({
    app, 
    models: () => [import('../models/user')],
    component: () => import ('../routes/UserPage')
})
