/*
 * @Author: Winnie
 * @Date: 2021-04-10 10:00:13
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-12 21:48:56
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson1/HomePage.js
 */
import React, { Component } from 'react'
import {ThemeContext} from '../../../Context';
import UserPage from './UserPage';
import ThemeConsumerPage from './ConsumerPage';
class HomePage extends Component {
    // static contextType = ThemeContext;
    render() {
        const {themeColor} = this.context;
        console.log(this);
        return (
            <div style={{padding: '20px'}}>
                <div style={{color: themeColor}}>
                    HomePage
                </div>
                <UserPage/>
                <ThemeConsumerPage/>

            </div>
        )
    }
}
HomePage.contextType = ThemeContext;
export default HomePage
