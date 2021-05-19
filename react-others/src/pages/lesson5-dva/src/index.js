/*
 * @Author: Winnie
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-17 23:42:11
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/index.js
 */
import dva from "dva";
import "./index.css";
// const createHistory = require("history").createBrowserHistory;
// 1. Initialize
export const app =
  dva();
  // {
  // history: createHistory()
  // }

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/example").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
