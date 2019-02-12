import React from "react";
import {List, Icon } from "antd";
import "../../styles/App.css";

const UserList = ({select, users, isLoading}) => (
  <div>
    <List
      loading = {isLoading}
      bordered
      itemLayout="horizontal"
      dataSource={users}
      renderItem={item => (
        <List.Item 
          actions={[<a><Icon type="info-circle" onClick={()=>select(item)}/></a>]}
        >
          <List.Item.Meta
            title={<a>{ `${item.firstname} ${item.lastname}`}</a>}
            description={item.email}
          />
           <div>{item.role}</div> 
        </List.Item>
      )}
    />
  </div>
);

export default UserList;
