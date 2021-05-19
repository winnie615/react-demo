/*
 * @Author: Winnie
 * @Date: 2021-05-17 23:31:35
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-17 23:32:06
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/models/user.js
 */
export default {
    namespace: "user",
    state: {
      name: "winnie"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {
        // eslint-disable-line
        console.log("user subscriptions"); //sy-log
      }
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        yield put({ type: "save" });
      }
    },
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      }
    }
  };
  