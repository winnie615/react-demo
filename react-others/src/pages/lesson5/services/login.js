/*
 * @Author: Winnie
 * @Date: 2021-05-12 23:13:53
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-12 23:17:55
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/services/login.js
 */
const LoginService = {
  login(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.name === "winnie") {
          resolve({ id: 123, name: "omg原来是winnie" });
        } else {
          reject({ err: { msg: "用户名或者密码错误" } });
        }
      }, 1000);
    });
  },
  getMoreUserInfo(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.id === 123) {
          resolve({ ...userInfo, score: "100" });
        } else {
          reject({ msg: "获取详细信息错误" });
        }
      }, 1000);
    });
  },
};

export default LoginService;
