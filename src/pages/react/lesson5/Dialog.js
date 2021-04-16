/*
 * @Author: Winnie
 * @Date: 2021-04-15 11:16:26
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 13:58:46
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/Dialog.js
 */
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
const Dialog = ({ children, hideDialog }) => {
  const [node, setNode] = useState(null);
  useEffect(() => {
    const doc = window.document;
    const n = doc.createElement("div");
    setNode(n)
    if (doc && n) {
      doc.body.appendChild(n);
    }
    return () => {
      window.document.body.removeChild(n);
    };
  }, []);
  return (
    node &&
    createPortal(
      <div className="dialog">
        {children}
        Dialog
        {typeof hideDialog === "function" && (
          <button onClick={hideDialog}>close</button>
        )}
      </div>,
      node
    )
  );
};
export default Dialog;
