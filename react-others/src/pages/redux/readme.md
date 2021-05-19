<!--
 * @Author: Winnie
 * @Date: 2021-04-18 21:58:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 22:18:02
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/readme.md
-->
## Reducer
什么是reducer？
- reducer就是一个纯函数，接收旧的state和action，返回新的state。
- 保持reducer的纯净非常重要，永远不要在reducer中做这些操作
    - 修改传入参数；
    - 执行有副作用的操作，如API请求和路由跳转；
    - 调用非纯函数，如`Date.now()`或`Math.random()`

redux上手
-  redux是js应用的状态容器。它保证程序行为一致性且易于测试。

使用方法
- 需要一个store来存储数据
- store里的reducer初始化state并定义state修改规则
- 通过dispatch一个action来提交对数据的修改
- action提交到reducer函数里，根据传入的action的type，返回新的state。

redux拓展
- 核心实现
    - 存储状态state
    - 获取状态getState
    - 更新状态dispatch
    - 变更订阅subscribe

异步
- redux只是个纯粹的状态管理器，默认只支持同步，实现异步任务，比如延迟，网络请求，需要中间件的支持。比如redux-thunk，redux-logger
- 中间件就是一个函数，对`store.dispatch`方法进行改造，在发出action和执行reducer之间，添加了其他功能。