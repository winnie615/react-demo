/*
 * @Author: Winnie
 * @Date: 2021-04-10 22:04:34
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-10 22:42:34
 * @Description: 作用
 * @FilePath: /lesson1/src/components/my-rc-form/index.js
 */
import React, {Component} from 'react';
export default function createForm(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }
        handleChange = (e) => {
            const {name,value} = e.target
            this.setState({
                [name]:value
            })
        }
        getFieldDecorator = (field, option) =>InputCmp  => {
            this.options[field] = option;
           return React.cloneElement(InputCmp, {
               name: field,
               value: this.state[field] || '',
               onChange: this.handleChange
           })
        }
        setFieldsValue = (newStore) => {
            this.setState(newStore)
        }
        getFieldsValue=() => {
            return this.state;
        }
        validateFields=(callback) => {
            let errs = [];
            for(let field in this.options) {
                // 判断state[field]是否是undefined
                // 如果是undefined，err.push({[field]: 'err'})
                if(!this.state[field] && this.options[field].rules[0].required) {
                    errs.push({
                        [field]:this.options[field].rules[0].message
                    })
                }
            }
            if(errs.length === 0) {
                callback(null,this.state)
            } else {
                callback(errs,this.state)
            }
        }
        getForm(){
            return {
                form :{
                    getFieldDecorator:this.getFieldDecorator,
                    setFieldsValue: this.setFieldsValue,
                    getFieldsValue: this.getFieldsValue,
                    validateFields: this.validateFields
                }
            }
        }
        render() {
            return <Cmp {...this.props} {...this.getForm()}/>
        }
    }
}