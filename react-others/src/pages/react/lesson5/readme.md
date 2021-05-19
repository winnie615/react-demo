<!--
 * @Author: Winnie
 * @Date: 2021-04-15 16:27:07
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 16:28:24
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/readme.md
-->
## createPortal的使用
弹窗类组件的要求弹窗内容在A处声明，却在B处展示。react中相当于弹窗内容看起来被render到一个组件里面去，实际改变的是网页上另一处的DOM结构，这个显然不符合正常逻辑。但是通过使用框架提供的特定API创建组件实例并指定挂载目标仍可完成任务。

具体实现: Portal

传送门，react v16之后出现的portal可以实现内容传送功能。

> Dialog做得事情是通过调用createPortal把要画的东西画在DOM树上另一个角落。