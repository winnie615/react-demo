/*
 * @Author: Winnie
 * @Date: 2021-04-11 22:05:50
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 16:35:04
 * @Description: 作用
 * @FilePath: /demo/src/pages/react/lesson4/MyRCFieldForm.js
 */
import React, { Component } from "react";
// import Form, {Field} from "rc-field-form";
import Form, { Field } from "./components";
import Input from "../../../components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

// * Form 收集数据
// * 数据存在哪儿？  Form State(antd3) 或者  class FormStore（antd4）

export default class MyRCFieldForm extends Component {
  formRef = React.createRef();
  componentDidMount() {
    console.log("form", this.formRef.current); //sy-log
    this.formRef.current.setFieldValue({ username: "default" });
  }

  onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  onFinishFailed = (errs, val) => {
    console.log("onFinishFailed", errs); //sy-log
  };
  render() {
    return (
      <div>
        <h3>MyRCFieldForm</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="Username" />
          </Field>
          <Field name="password" rules={[passwordRules]}>
            <Input placeholder="Password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
