/*
 * @Author: Winnie
 * @Date: 2021-04-12 22:16:46
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-14 16:18:08
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson4/components/index.js
 */
import React from 'react'
import _Form from "./my-rc-field-form/Form";
import Field from "./my-rc-field-form/Field";
import useForm from "./my-rc-field-form/useForm";

const Form = React.forwardRef(_Form);
Form.useForm = useForm;

export { Field };
export default Form;
