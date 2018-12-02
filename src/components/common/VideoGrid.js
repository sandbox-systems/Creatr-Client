import React from "react";
import {List, Card, Icon, Popconfirm, message,  Button } from "antd";
import YouTube from 'react-youtube';
import "../../styles/App.css";

const DeleteVideo = () => (
  <div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="top" title="Delete video?" onConfirm={()=>alert()} okText="Yes" cancelText="No">
        <Icon type="delete" />
      </Popconfirm>
    </div>
);

const UserList = props => (
  <div>
    <List
    grid={{ column: props.cols, size: 'large', gutter:'16'}}
    dataSource={props.videos}
    renderItem={item => (
      <List.Item>
        <Card 
            title={item.name}
            actions={[DeleteVideo(), <Icon type="edit" />]}
        >
            <YouTube
                videoId={item.vid}
                opts={
                  { height: '100%', 
                    width: '100%', 
                    playerVars: {
                      modestbranding:'1',
                      iv_load_policy:'3'
                      // controls:'0'
                    }
                  }
                }
            />
        </Card>
      </List.Item>
    )}
  />,
  </div>
);

export default UserList;
