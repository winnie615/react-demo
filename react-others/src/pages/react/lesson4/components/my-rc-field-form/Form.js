/*
 * @Author: Winnie
 * @Date: 2021-04-14 16:13:56
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-14 16:31:20
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson4/components/my-rc-field-form/Form.js
 */
import React, { useImperativeHandle } from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
const Form = ({ children, onFinish, onFinishFailed, form }, ref) => {
  const [formInstance] = useForm(form);
  useImperativeHandle(ref, () => formInstance);
  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};
export default Form;
