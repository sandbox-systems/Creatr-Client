import { Breadcrumb, Col, Icon, Layout, Menu, Row } from "antd";
import React, { Component } from "react";
import subscribe from "unstated-subscribe-hoc";
import AdminContainer from "../../containers/AdminContainer";
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import ContentManager from "./ContentManager";
import UserManager from "./UserManager";
import VideoManager from "./VideoManager";

const { Content, Footer } = Layout;

class Admin extends Component {
  state = {
    current: "content",
    users: {},
    videos: {}
  };
  componentDidMount = () => {
    const { adminStore } = this.props;
    console.log("mounted!")
   adminStore.getData();
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { adminStore } = this.props;
    return (
      <div className="admin">
        <Layout>
          <AppHeader/>
          <Content
            style={{ padding: '0 50px' }}
          >
          <Breadcrumb className="breadcrumb" style={{ margin: "16px 0"}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, }}>
            <Row>
              <Col span={24}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  className="menu"
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
            <br />
            {this.state.current == "user" && <UserManager />}
            {this.state.current == "content" && <ContentManager />}
            {this.state.current == "video" && <VideoManager />}
            </div>
          </Content>
          <AppFooter/>
        </Layout>
      </div>
    );
  }
}

export default subscribe(Admin, { adminStore: AdminContainer });
