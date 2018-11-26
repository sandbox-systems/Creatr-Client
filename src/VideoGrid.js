import React from "react";
import {List, Card, Icon} from "antd";
import YouTube from 'react-youtube';
import "./App.css";

const UserList = props => (
  <div>
    <List
    grid={{ column: props.cols, size: 'large', gutter:'16'}}
    dataSource={props.videos}
    renderItem={item => (
      <List.Item>
        <Card 
            title={item.name}
            actions={[<Icon onClick={() => alert("foo")} type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
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
