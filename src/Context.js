/*
 * @Author: Winnie
 * @Date: 2021-04-10 10:10:57
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-12 21:45:57
 * @Description: 作用
 * @FilePath: /demo/src/Context.js
 */
import React from 'react'

const ThemeContext  = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer  = ThemeContext.Consumer;

export {ThemeContext,ThemeProvider,ThemeConsumer}