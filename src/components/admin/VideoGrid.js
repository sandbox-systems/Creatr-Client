import React from "react";
import { Modal, List, Card, Icon, Popconfirm, Menu, Dropdown, Button } from "antd";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import YouTube from "react-youtube";
import "../../styles/App.css";

const confirm = Modal.confirm;

const showDeleteConfirm = ({_id, name},{adminStore}) => {
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

const actionList = (item, props) => (
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
          onClick={()=> showDeleteConfirm(item, props)}
        >
          Delete
        </div>
    </Menu.Item>
  </Menu>
);

const actionMenu = (item, props) => (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const VideoGrid = props => (
  <div>
    <List
      grid={{ column: props.cols, size: "large", gutter: "16" }}
      dataSource={props.videos}
      renderItem={item => (
        <List.Item>
          <Card
            title={item.name}
            // actions={[DeleteVideo(item._id, props), <Icon type="edit" />]}
            extra={
              <Dropdown overlay={actionList(item, props)} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
              <Icon type="ellipsis" />
              </a>
            </Dropdown>
            }  
          >
            <YouTube
              videoId={item.vid}
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
