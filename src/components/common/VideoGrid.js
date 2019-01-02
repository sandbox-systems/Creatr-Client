import React from "react";
import { Modal, List, Card, Icon, Popconfirm, Menu, Dropdown, Button } from "antd";
import Plyr from 'react-plyr';
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import YouTube from "react-youtube";
import "../../styles/App.css";

const confirm = Modal.confirm;

const showDeleteConfirm = ({_id, name}, adminStore) => {
  confirm({
    title: 'Are you sure delete this video?',
    content: name,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      adminStore.deleteVideo(_id);
    }
  });
}

const actionList = (item, adminStore) => (
  <Dropdown 
    overlay={ <Menu>
      <Menu.Item key="0">
        <a href="#">Action 1</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Action 2</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
          <div 
            style={{textAlign:'center', color:'#f5222d'}} 
            onClick={()=> showDeleteConfirm(item, adminStore)}
          >
            Delete
          </div>
      </Menu.Item>
    </Menu>} 
  trigger={['click']}>
  <a className="ant-dropdown-link" href="#">
  <Icon type="down" style={{ fontSize: '16px', color: '#08c' }} />
  </a>
</Dropdown>

 
);

const VideoGrid = ({adminStore, cols, videos, isLoading, showActions}) => (
  <div>
    <List
      grid={{ column: cols, size: "large", gutter: "16" }}
      dataSource={videos}
      loading = {isLoading}
      renderItem={item => (
        <List.Item key={item._id}>
          <Card
            title={item.name}
            // actions={[DeleteVideo(item._id, props), <Icon type="edit" />]}
            extra={showActions && actionList(item, adminStore)}

          >
            <YouTube
              videoId={item.vid}
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  modestbranding: "1",
                  frameborder:"0",
                  rel:"0",
                  // controls:'0'
                }
              }}
            />
             {/* <Plyr
                type="youtube" // or "vimeo"
                videoId={item.vid}
              >
              </Plyr> */}
          </Card>
        </List.Item>
      )}
    />
  </div>
);

export default subscribe(VideoGrid, { adminStore: AdminContainer });
