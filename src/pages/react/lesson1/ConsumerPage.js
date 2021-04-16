/*
 * @Author: Winnie
 * @Date: 2021-04-12 21:43:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-12 21:49:21
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson1/ConsumerPage.js
 */
import React, { Component } from 'react'
import {ThemeConsumer} from '../../../Context';
export class ThemeConsumerPage extends Component {
   render() {
       return (
           <div>
                ThemeConsumerPage
                <ThemeConsumer>
                {themeContext => <div style={{color:themeContext.themeColor}}>{themeContext.themeColor}</div>}
                </ThemeConsumer>
           </div>
       )
   }
}
export default ThemeConsumerPage