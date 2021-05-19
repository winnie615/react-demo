import React, { Component } from "react";
import FieldContext from "./FieldContext";
export class Field extends Component {
  static contextType = FieldContext;
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
  getControlled() {
    const { setFieldValue, getFieldValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue(name),
      onChange(e) {
        const newVal = e.target.value;
        setFieldValue({
          [name]: newVal,
        });
      },
    };
  }

  render() {
    const { children } = this.props;
    return <div>{React.cloneElement(children, this.getControlled())}</div>;
  }
}
export default Field;
