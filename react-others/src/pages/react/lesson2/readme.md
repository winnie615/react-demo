<!--
 * @Author: Winnie
 * @Date: 2021-04-15 14:05:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 16:29:37
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson2/readme.md
-->
## 手动实现一个my-rc-form
> antd3的form表单实现方式，基于rc-form

antd3的form数据存储，是类组件实现，数据是存储在state中。

antd3的数据收集，校验，提交等，是通过高阶组件扩展的（getFieldDecorator）

- 不建议在render中使用HOC

React的diﬀ算法（称为协调）使用组件标识来确定它是应该更新现有子树还是将其丢弃并挂载新子树。如果从render返回的组件与前一个渲染中的组件相同（===），则React通过将子树与新子树进行区分来递归更新子树。如果它们不相等，则完全卸载前一个子树。

```js
render(){
    //每次调用render函数都会创建一个新的EnhancedComponent  //EnhancedComponent1!==EnhancedComponent2 
 constEnhancedComponent=enhance(MyComponent);
 //这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
 return<EnhancedComponent/>;
```
这不仅仅师兄性能的问题-重新挂载组件会导致该组件及其所有子组件的状态丢失。


antd3表单组件设计思路

- 表单组件要求实现数据收集、校验、提交等特性，可通过高阶组件扩展
- 高阶组件给表单组件传递一个input组件包装函数接管其输入事件并统一管理表单数据
- 高阶组件给表单组件传递一个校验函数使其具备数据校验功能


form实现
- 见代码
