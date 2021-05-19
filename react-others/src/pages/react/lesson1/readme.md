<!--
 * @Author: Winnie
 * @Date: 2021-04-15 14:04:51
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 14:05:03
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson1/readme.md
-->
## 如何使用context
1，创建一个context对象

```js
const ThemeContext  = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer  = ThemeContext.Consumer;
```

2，最外层提供要跨层级传递的数据Provider

```html
<ThemeProvider value={theme}>
    <HomePage />
</ThemeProvider>
```

3，使用context
- contextType：只用用在类组件中，只能只用单一的context数据源

```js
// 取值
static contextType = ThemeContext;
// 使用
const {themeColor} = this.context;
```
- useContext：只能用在函数组件中，可以使用多个context数据源

```js
const context = useContext(ThemeContext)
```
- Consumer：类组件和函数组件都可以使用，也可以使用多个context数据源

```html
 <ThemeConsumer>
    {themeContext => <div style={{color:themeContext.themeColor}}>{themeContext.themeColor}</div>}
</ThemeConsumer>
```

## context与redux
context是子孙组件与祖先组件之间的跨层级通信，redux是组件之间的数据共享，不受层级的限制。