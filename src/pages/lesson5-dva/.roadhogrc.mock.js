/*
 * @Author: Winnie
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 22:27:05
 * @Description: 作用
 * @FilePath: /lesson5-dva/.roadhogrc.mock.js
 */

// export default {
// };
const fs = require("fs");
const path = require("path");
const mockPath = path.join(__dirname + "/mock");

const mock = {};
fs.readdirSync(mockPath).forEach(file => {
  Object.assign(mock, require("./mock/" + file));
});

module.exports = mock;