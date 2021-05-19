/*
 * @Author: Winnie
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-17 23:22:14
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/models/example.js
 */

import { getProductData } from "../services/product";

export default {
  namespace: "example",

  state: {
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      console.log('example subscriptions');
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
    *getProductData({ payload }, { call, put }) {
      // eslint-disable-line
      const res = yield call(getProductData, payload);
      yield put({ type: "productData", payload: res.data });
    },
  },

  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
    productData(state, action) {
      return { ...state, data: action.payload.data };
    },
  },
};
