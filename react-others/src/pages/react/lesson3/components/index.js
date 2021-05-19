/*
 * @Author: Winnie
 * @Date: 2021-04-12 22:16:46
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-13 21:32:38
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson3/components/index.js
 */
import Form from "./my-rc-field-form/Form";
import Field from "./my-rc-field-form/Field";
import useForm from "./my-rc-field-form/useForm";

Form.useForm = useForm;

export { Field };
export default Form;
