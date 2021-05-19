/*
 * @Author: Winnie
 * @Date: 2021-04-10 10:28:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-10 10:51:18
 * @Description: 作用
 * @FilePath: /lesson1/config-overrides.js
 */
const { override,addDecoratorsLegacy } = require("customize-cra"); 
module.exports = override(
  addDecoratorsLegacy( [
    "@babel/plugin-proposal-decorators",
    {
        "legacy": true
    }
]),//配置装饰器 
  );