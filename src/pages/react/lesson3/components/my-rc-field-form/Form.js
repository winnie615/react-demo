import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
const Form = ({ children, onFinish, onFinishFailed, form }) => {
  const [formInstance] = useForm(form);
  formInstance.setCallbacks({
    onFinish,
    onFinishFailed
  })
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};
export default Form;
