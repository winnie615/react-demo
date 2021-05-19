/*
 * @Author: Winnie
 * @Date: 2021-04-10 20:43:54
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 16:34:40
 * @Description: 作用
 * @FilePath: /demo/src/pages/react/lesson2/MyRcForm.js
 */
import React, { Component } from 'react'
import Input from '.././../../components/Input';
// import {createForm} from 'rc-form'
import createForm from './my-rc-form';

const nameRules = {required: true, message: '请输入姓名'};
const passwordRules = {required: true, message: '请输入密码'};

@createForm
class MyRCForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    componentDidMount() {
        this.props.form.setFieldsValue({username: 'default'})
    }
    submit = () => {
        const {getFieldsValue,validateFields} = this.props.form;
        validateFields((err,val) => {
            if(err) {
                console.log(err);
            } else {
                console.log('success',val);
            }
        })

    }
   render() {
    const {getFieldDecorator}  = this.props.form;
    console.log('props',this.props);
       return (
           <div>
                <h3>MyRCForm</h3>
                {getFieldDecorator('username',{rules: [nameRules]})(<Input placeholder="UserName"/>)}
                {getFieldDecorator('password',{rules: [passwordRules]})(<Input placeholder="PassWord"/>)}
                <button onClick={this.submit}>submit</button>
           </div>
       )
   }
}
export default MyRCForm
