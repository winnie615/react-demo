/*
 * @Author: Winnie
 * @Date: 2021-05-16 22:18:12
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-17 23:33:28
 * @Description: 作用
 * @FilePath: /lesson5-dva/src/routes/ExamplePage.js
 */
import { Button, Table } from "antd";
import { connect } from "dva";
import React, { Component } from "react";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "city",
    key: "city",
  },
];

export class ExamplePage extends Component {
  dataSearch = () => {
    // 异步获取数据
    this.props.getProductData();
  };
  render() {
    console.log(this.props);
    const { data } = this.props.example;
    return (
      <div>
        ExamplePage
        <Button onClick={this.dataSearch}>search</Button>
        <Table columns={columns} dataSource={data} rowKey="id" />
      </div>
    );
  }
}
export default connect(
  (state) => {
    console.log(
      "%c 🍱 state: ",
      "font-size:20px;background-color: #7F2B82;color:#fff;",
      state
    );
    return { example: state.example };
  },
  {
    getProductData: (payload) => ({ type: "example/getProductData", payload }),
  }
)(ExamplePage);
