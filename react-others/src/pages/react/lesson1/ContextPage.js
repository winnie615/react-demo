/*
 * @Author: Winnie
 * @Date: 2021-04-10 10:00:13
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-12 21:48:10
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson1/ContextPage.js
 */
import React, { Component } from 'react'
import HomePage from './HomePage';
import {ThemeProvider} from '../../Context';
class ContextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                themeColor: 'red'
            }
        }
    }
    changeColor = () => {
        const {themeColor} = this.state.theme
        this.setState({
            theme: {themeColor: themeColor === 'red'?'green':'red'}
        })
    }
    render() {
        const {theme} = this.state;
        return (
            <div>
                <button onClick={this.changeColor}>一键换肤</button>
                ContextPage
                <ThemeProvider value={theme}>
                    <HomePage />
                </ThemeProvider>
            </div>
        )
    }
}

export default ContextPage
