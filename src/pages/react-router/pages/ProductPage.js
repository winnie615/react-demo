/*
 * @Author: Winnie
 * @Date: 2021-05-04 18:01:35
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-05 21:39:16
 * @Description: 作用
 * @FilePath: /demo/src/pages/react-router/pages/ProductPage.js
 */
import React from 'react';
// import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';
// import { useHistory, useLocation, useParams, useRouteMatch } from '../k-react-router-dom';
import { Link, Route, Prompt } from 'react-router-dom';
const ProductPage = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const match = useRouteMatch();
    // const params = useParams();
    // const {id} = params
    // const {url}  =  match;

  return <div>
              <h1>ProductPage</h1>
              {/* <Link  to={url+'/detail'}>详情</Link>
              <Route path={url+'/detail'}  component={Detail}/> */}
              <Prompt
                when={true}
                message='are'
              />
         </div>
}
export default ProductPage;

function Detail() {
    return <h1>Detail</h1>
}