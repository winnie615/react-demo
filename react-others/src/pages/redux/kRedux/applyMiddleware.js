/*
 * @Author: Winnie
 * @Date: 2021-04-16 22:40:57
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-18 20:28:53
 * @Description: 作用
 * @FilePath: /demo/src/pages/redux/kRedux/applyMiddleware.js
 */
function compose(...funcs)  {
    return  funcs.reduce((a,b) => (...args) => a(b(...args)))
    
}
const applyMiddleware = (...middleWares) => {
    return createStore => reducer => {
        const store = createStore(reducer);
        let dispatch = store.dispatch;
        // 加强store的dispatch
        const  midApi  = {
            getState: store.getState,
            dispatch:  (action) => dispatch(action) //  这样写，可以让函数与当前作用域相关
        }
        const middleWaresChain  =  middleWares.map(middleWare => middleWare(midApi));
        dispatch =  compose(...middleWaresChain)(store.dispatch)
        return {
            ...store,
            dispatch

        }
    }
}

export default applyMiddleware;