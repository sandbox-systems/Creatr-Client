import React, { Component } from "react";
import { Row, Col, Layout, Menu, Breadcrumb, Icon } from "antd";
import subscribe from "unstated-subscribe-hoc";
import StudentContainer from "../../containers/StudentContainer";
import AppHeader from '../common/AppHeader'
import UserManager from "./UserManager";
import VideoManager from "./VideoManager";
const { Content } = Layout;

class Student extends Component {
  state = {
    current: "video",
    users: {},
    videos: {}
  };
  componentDidMount = () => {
    const { studentStore } = this.props;
    studentStore.getData();
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { studentStore } = this.props;
    return (
      <div className="student">
        <Layout>
          <AppHeader/>
          <Breadcrumb style={{ margin: "16px 0"}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Student</Breadcrumb.Item>
            <Breadcrumb.Item>Course Access Portal</Breadcrumb.Item>
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
            <br />
            {/* {this.state.current == "user" && <UserManager />}
            {this.state.current == "video" && <VideoManager />} */}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default subscribe(Student, { studentStore: StudentContainer });
