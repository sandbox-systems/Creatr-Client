import React from "react";
import {List } from "antd";
import "../../styles/App.css";

const UserList = props => (
  <div>
    <List
      bordered
      itemLayout="horizontal"
      dataSource={props.users}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a>{ `${item.firstname} ${item.lastname}`}</a>}
            description={item.email}
          />
          {/* <div>{item.role}</div> */ }
        </List.Item>
      )}
    />
  </div>
);

export default UserList;
