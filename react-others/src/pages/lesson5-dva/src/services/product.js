/*
 * @Author: Winnie
 * @Date: 2021-05-16 22:27:41
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-16 22:33:52
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/services/product.js
 */
import request from "../utils/request";

export async function getProductData(params) {
  return request("/api/getProductData", {
    data: params,
    method: "post",
  });
}
