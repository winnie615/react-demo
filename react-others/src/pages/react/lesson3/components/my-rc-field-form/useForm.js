import React from "react";
class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = {};
    this.callbacks = {};
  }
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
  getFieldValue = (name) => {
    const v = this.store[name];
    return v;
  };
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
  getForm() {
    return {
      setFieldValue: this.setFieldValue,
      getFieldValue: this.getFieldValue,
      registerEntity: this.registerEntity,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
    };
  }
}
const useForm = (form) => {
  const formRef = React.useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
};
export default useForm;
