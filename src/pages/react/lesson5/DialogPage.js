/*
 * @Author: Winnie
 * @Date: 2021-04-15 11:14:25
 * @LastEditors: Winnie
 * @LastEditTime: 2021-04-15 13:56:56
 * @Description: 作用
 * @FilePath: /demo/src/pages/lesson5/DialogPage.js
 */
import React, { useState } from "react";
import Dialog from "./Dialog";
const DialogPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const hideDialog = () => {
    setShowDialog(false)
  }
  return (
    <div>
      <h3>DialogPage</h3>
      <button
        onClick={() => {
          setShowDialog(!showDialog);
        }}
      >
        toggle
      </button>
      {showDialog && <Dialog hideDialog={hideDialog}/>}
    </div>
  );
};
export default DialogPage;
