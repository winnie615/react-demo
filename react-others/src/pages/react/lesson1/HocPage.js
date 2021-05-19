/*
 * @Author: Winnie
 * @Date: 2021-04-10 10:21:52
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-10 10:46:38
 * @Description: 作用
 * @FilePath: /lesson1/src/pages/HocPage.js
 */
import React, { Component } from 'react'

const foo = (Cmp) => props =>{
    return <div className='border'>
        <Cmp {...props}/>
    </div>
}

// function Child(props) {
//     return <div className='border'>Child-{props.name}</div>
// }
@foo
class Child extends Component{
    render() {
        return <div className='border'>Child-{this.props.name}</div>
    }
}
// const Foo = foo(Child);
export class HocPage extends Component {
    render() {
        return (
            <div>
                HOCPage
                <Child name='winnie'/>
            </div>
        )
    }
}

export default HocPage;
