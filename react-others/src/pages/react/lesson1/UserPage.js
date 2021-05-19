/*
 * @Author: Winnie
 * @Date: 2021-04-10 10:16:24
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-10 21:06:50
 * @Description: 作用
 * @FilePath: /lesson1/src/pages/lesson1/UserPage.js
 */
import React,{useContext} from 'react'
import { ThemeContext } from '../../../Context'

const UserPage = () => {
    const context = useContext(ThemeContext)
    console.log('%c 🥡 context: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', context);
    return (
        <div style={{color: context.themeColor}}>
            UserPage
        </div>
    )
}

export default UserPage
