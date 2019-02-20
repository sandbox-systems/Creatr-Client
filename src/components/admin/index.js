import { Breadcrumb, Col, Icon, Layout, Menu, Row } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from 'react-router-dom'
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
    // current: "user",
    users: {},
    videos: {}
  };
  componentDidMount = () => {
    const { adminStore } = this.props;
    console.log("mounted!")
    adminStore.getData();
  };

  handleClick = e => {
    // this.setState({
    //   current: e.key
    // });
    this.props.history.push('/admin/'+e.key)
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
                  selectedKeys={[this.props.location.pathname.split('/').slice(-1)[0]]}
                  mode="horizontal"
                  className="menu"
                >
                  <Menu.Item key="users">
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
            <Route exact path='/admin/' component={UserManager}/>
            <Route path='/admin/users' component={UserManager}/>
            <Route path='/admin/content' component={ContentManager}/>
            <Route path='/admin/video' component={VideoManager}/>
            {/* {this.state.current == "user" && <UserManager />}
            {this.state.current == "content" && <ContentManager />}
            {this.state.current == "video" && <VideoManager />} */}
            </div>
          </Content>
          <AppFooter/>
        </Layout>
      </div>
    );
  }
}

export default withRouter(subscribe(Admin, { adminStore: AdminContainer }));
