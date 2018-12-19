import React from "react";
import { Modal, List, Card, Icon, Popconfirm, Menu, Dropdown, Button } from "antd";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import YouTube from "react-youtube";
import "../../styles/App.css";

const confirm = Modal.confirm;

const showDeleteConfirm = ({_id, name},adminStore) => {
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
  <Menu>
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
  </Menu>
);

const VideoGrid = ({adminStore, cols, videos}) => (
  <div>
    <List
      grid={{ column: cols, size: "large", gutter: "16" }}
      dataSource={videos}
      loading = {adminStore.state.isLoading}
      renderItem={item => (
        <List.Item>
          <Card
            title={item.name}
            // actions={[DeleteVideo(item._id, props), <Icon type="edit" />]}
            extra={
              <Dropdown overlay={actionList(item, adminStore)} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
              <Icon type="delete" />
              More
              </a>
            </Dropdown>
            }  
          >
            <YouTube
              videoId={item.vid ? item.vid: null}
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  modestbranding: "1",
                  iv_load_policy: "3"
                  // controls:'0'
                }
              }}
            />
          </Card>
        </List.Item>
      )}
    />
    ,
  </div>
);

export default subscribe(VideoGrid, { adminStore: AdminContainer });
