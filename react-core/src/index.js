/*
 * @Author: Winnie
 * @Date: 2020-03-07 22:18:02
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-24 21:55:49
 * @Description: 作用
 * @FilePath: /react-core/src/index.js
 */
import React from "react";
// import ReactDOM from "react-dom";
// import React from "./kreact/";
// import Component from "./kreact/Component";

import ReactDOM from "./my-react/react-dom";
import Component from "./my-react/Component";

import "./index.css";
console.log(React.version);
function FunctionComponent({name}) {
  return (
    <div className="border function">
      {name}
    </div>
  );
}

class ClassComponent extends Component {
  render() {
    const {name} = this.props;
    return <div className="border function">{name}</div>;
  }
}

const jsx = (
  <div className="border">
    <p>这是一个文本</p>
    <a href="https://kaikeba.com/">开课吧</a>
    {/* <div className="border">
      <h5>hello</h5>
    </div> */}
    <FunctionComponent name="function" />
    <ClassComponent name="class" />
    {/* <React.Fragment>
      <h1>
        111
      </h1>
      <h1>
        222
      </h1>
    </React.Fragment> */}

    {/* {[1, 2, 3].map(item => {
      return (
        <div className="border" key={item}>
          <p>{item}</p>
          <p>{item}</p>
        </div>
      );
    })} */}
    <>
    <h1>231312</h1>
    <h1>2342432</h1>
    </>
  </div>
);

// element， container
// vnode->node , 把node渲染更新到container
ReactDOM.render(jsx, document.getElementById("root"));

// !节点类型
// 文本节点
// html标签节点
// class componet
// function component
// fragment

// jsx=>createElement(生成element，就是我们需要的虚拟dom)=>render(vnode->node, 再把node渲染到container)
// vnode->node的流程注意下节点的区分，不同节点处理方式不同




