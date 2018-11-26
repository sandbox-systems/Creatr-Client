import React, { Component } from "react";
import { Row, Col, Layout, Menu, Breadcrumb, Icon } from "antd";
import "./App.css";
import axios from 'axios'
import UserList from "./UserList.js";
import VideoGrid from "./VideoGrid.js";

const { Header, Content, Sider } = Layout;
const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}
class Admin extends Component {
  state = {
    current: "users",
    users: {},
    videos: {}
  };
  componentDidMount = () => {
    this.getData();
  };
  getData = () => {
    axios.all([
      axios.get("http://localhost:3000/api/v1/users", config),
      axios.get("http://localhost:3000/api/v1/videos", config)
    ])
    .then(axios.spread((userRes, videoRes) => {
      this.setState({ users: userRes.data.result, videos: videoRes.data.result });
    }))
    .catch(error => {
      console.log(error);
    })
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Row>
              <Col span={24}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                >
                  <Menu.Item key="user">
                    <Icon type="user" />
                    Users
                  </Menu.Item>
                  <Menu.Item key="content">
                    <Icon type="file-add" />
                    Manage Content
                  </Menu.Item>
                  <Menu.Item key="video">
                    <Icon type="video-camera" />
                    Video Archive
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={16}>
                {this.state.current == "user"  && <UserList users={this.state.users}/>}
                {this.state.current == "video" && 
                  <VideoGrid 
                    videos={this.state.videos}
                    cols={1}
                  />
                }

              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Admin;
