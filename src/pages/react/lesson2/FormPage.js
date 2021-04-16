/*
 * @Author: Winnie
 * @Date: 2021-04-10 22:43:45
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-10 22:55:02
 * @Description: 作用
 * @FilePath: /lesson1/src/pages/lesson2/FormPage.js
 */
import React, { Component, useEffect } from 'react'
import {Form,Input,Button} from 'antd';
const FormItem  = Form.Item;

const nameRules = {required: true, message: "请输入姓名！"}; 
const passwordRules = {required: true, message: "请输入密码！"};

export class FormPage extends Component {
    formRef  = React.createRef;
    componentDidMount() {
        // this.formRef.current.setFieldsValue({name: 'default'});
        console.log('%c 🍕 this.formRef.current: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', this.formRef.current);
    }

   render() {
       return (
           <div style={{padding: '60px'}}>
                <Form
                    ref={this.formRef}
                >
                    <FormItem label="姓名" name="name" rules={[nameRules]}> 
                        <Input placeholder="name input placeholder" /> 
                    </FormItem> 
                    <FormItem label="密码" name="password" rules={[passwordRules]}> 
                        <Input placeholder="password input placeholder" /> 
                    </FormItem> 
                    <FormItem> 
                        <Button type="primary" size="large" htmlType="submit"> Submit </Button>
                    </FormItem>
                    <FormItem> 
                        <Button type="default" size="large" htmlType="reset"> Reset </Button> 
                    </FormItem>
                </Form>
           </div>
       )
   }
}
export default FormPage