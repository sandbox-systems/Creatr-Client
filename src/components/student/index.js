import React, { Component } from "react";
import { Route } from 'react-router-dom'
import { Row, Col, Layout, Menu, Breadcrumb, Icon, Card } from "antd";
import subscribe from "unstated-subscribe-hoc";
import StudentContainer from "../../containers/StudentContainer";
import {
  MdVideoLibrary,
  MdVideocam,
  MdAssignment,
  MdInsertInvitation,
} from "react-icons/md";
import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";
import VideoArchive from "./VideoArchive"
import {default as ContentPage} from "./Content"
import TileNav from "./TileNav"
import Live from "./Live"
import Schedule from "./Schedule";

const { Content } = Layout;

class Student extends Component {
  state = {
    current: "video"
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
          <AppHeader />
          <Content style={{ padding: "0 32px" }}>
            <Breadcrumb className="breadcrumb" style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Student</Breadcrumb.Item>
              <Breadcrumb.Item>Course Access Portal</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 50, minHeight:"calc(100vh - 225px)" }}>
              <Route exact path='/portal/' component={TileNav}/>
              <Route path='/portal/videos' component={VideoArchive}/>
              <Route path='/portal/bulletin' component={ContentPage}/>
              <Route path='/portal/schedule' component={Schedule}/>
              <Route path='/portal/live' component={Live}/>
            </div>
            <br />
            {/* {this.state.current == "user" && <UserManager />}
            {this.state.current == "video" && <VideoManager />} */}
          </Content>
          <AppFooter />
        </Layout>
      </div>
    );
  }
}

export default subscribe(Student, { studentStore: StudentContainer });
