/*
 * @Author: Winnie
 * @Date: 2021-04-10 21:01:51
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-10 21:02:43
 * @Description: 作用
 * @FilePath: /lesson1/src/components/Input.js
 */
import React from "react";

const Input = props => {
  return <input {...props} />;
};

class CustomizeInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const {value = "", ...otherProps} = this.props;
      return (
        <div style={{padding: 10}}>
          <Input style={{outline: "none"}} value={value} {...otherProps} />
        </div>
      );
    }
  }
  
  export default CustomizeInput;
  