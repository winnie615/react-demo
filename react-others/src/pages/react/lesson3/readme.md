<!--
 * @Author: Winnie
 * @Date: 2021-04-15 14:20:11
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 16:30:06
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson3/readme.md
-->
antd4的表单实现
- antd4的表单基于rc-ﬁeld-form，[github源码地址](https://github.com/react-component/field-form)。
- 安装rc-ﬁeld-form，yarn add rc-field-form。
- 使用useForm，仅限function

实现方式
> 以MyRCFieldForm文件为例

- 首先，创建my-rc-field-form中各个文件，将组件向下传递

```js
// useForm.js
const useForm = () => {
  return [];
};
export default useForm;
// FieldContext.js
import React from "react";

const FieldContext = React.createContext();

export default FieldContext;
// Form.js
import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
const Form = ({ children }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};
export default Form;
// Field.js
import React, { Component } from "react";
import FieldContext from "./FieldContext";
export class Field extends Component {
  static contextType = FieldContext;
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
export default Field;
```
- 创建FormStore，保存form的数据

```js

```
- 处理useForm，将formStore挂载到ref上
- 文件调用

```js
const [form] = Form.useForm(null);
```
- 视图更新

```js
// Field.js
onStoreChange = () => {
    this.forceUpdate();
  };
  componentDidMount() {
    this.unRegisterEntity = this.context.registerEntity(this);
  }
  componentWillUnmount() {
    if(this.unRegisterEntity) {
        this.unRegisterEntity();
    }
  }
//  useForm.js 
registerEntity = (entity) => {
    this.fieldEntities = {
      ...this.fieldEntities,
      [entity.props.name]: entity,
    };
    // 取消注册
    return () => {
      delete this.fieldEntities[entity.props.name];
    };
  };
  setFieldValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    // 数据更新
    Object.keys(newStore).forEach((name) => {
      this.fieldEntities[name].onStoreChange();
    });
  };
```
- 数据处理

```js
validate = () => {
    let errs = [];
    Object.keys(this.fieldEntities).forEach((key) => {
      const entity = this.fieldEntities[key];
      const rules = entity.props.rules;
      const rule = rules && rules[0];
      if (rule && rule.required && !this.store[key]) {
        errs.push({
          [key]: rule.message,
        });
      }
    });
    return errs;
  };
  setCallbacks = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };
  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    let errs = this.validate();
    if (errs.length === 0) {
      onFinish && onFinish({ ...this.store });
    } else {
      onFinishFailed && onFinishFailed(errs, { ...this.store });
    }
  };
```

```html
<form onSubmit={(e) => {
      e.preventDefault();
      formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
</form>
```

