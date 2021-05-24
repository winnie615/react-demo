/*
 * @Author: Winnie
 * @Date: 2021-05-22 21:55:20
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-24 22:10:44
 * @Description: 作用
 * @FilePath: /react-core/src/my-react/react-dom.js
 */
// vnode：虚拟dom节点
// node：真实dom节点
function render(vnode, container) {
  console.log(
    "%c 🍮 vnode: ",
    "font-size:20px;background-color: #4b4b4b;color:#fff;",
    vnode
  );
  // step1:vnode -》 node
  const node = creatNode(vnode);
  // step2:container.appendChild
  container.appendChild(node);
}
function creatNode(vnode) {
  let node = null;
  const { type } = vnode;
  if (typeof type === "string") {
    node = updateHostComponent(vnode);
  } else if (typeof type === "function") {
    node = type.prototype.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode);
  } else if (typeof type === 'symbol'){
    node = document.createDocumentFragment();
    updateFragment(vnode,node)
  }
  return node;
}
// fragment
function updateFragment(vnode,node) {
  const { props } = vnode;
  if (typeof props.children === "string") {
    let childText = document.createTextNode(props.children);
    node.appendChild(childText);
  } else {
    reconcileChildren(props.children, node);
  }
  updateNode(node, node);
  return node;
}
// 原生标签节点处理
function updateHostComponent(vnode) {
  const { type, props } = vnode;
  let node = document.createElement(type);
  if (typeof props.children === "string") {
    let childText = document.createTextNode(props.children);
    node.appendChild(childText);
  } else {
    reconcileChildren(props.children, node);
  }
  updateNode(node, props);
  return node;
}
// 函数组件处理
function updateFunctionComponent(vnode) {
  const { type, props } = vnode;
  const vvnode = type(props);
  const node = creatNode(vvnode);
  return node;
}
// 类组件
function updateClassComponent(vnode) {
  const { type, props } = vnode;
  const instance = new type(props)
  const vvnode = instance.render();
  const node = creatNode(vvnode);
  return node;
}
// 更新属性
// todo：加一下属性的具体处理，比如style
function updateNode(node, nextValue) {
  Object.keys(nextValue)
    .filter((k) => k !== "children")
    .forEach((k) => {
      node[k] = nextValue[k];
    });
}
// vnode => node,插入到dom节点里
function reconcileChildren(children, node) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      render(child, node);
    }
  } else {
    render(children, node);
  }
}
const ReactDOM = {
  render,
};
export default ReactDOM;
