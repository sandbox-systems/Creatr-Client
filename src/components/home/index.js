import React, { Component } from "react";
import { Row, Col, Layout, Menu, Breadcrumb, Icon, Tabs } from "antd";
import AuthRedirect from "../common/AuthRedirect";
import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";

import LoginForm from "./LoginForm";
import LeadContent from "./LeadContent";

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs

class Home extends Component {
  render() {
    return (
      <div className="home">
        <AuthRedirect />
        <Layout>
          <AppHeader />
          <Content style={{ padding: "32px 32px" }}>
            <div style={{ background: "#fff", padding: 50 }}>
              <Row gutter={64}>
                <Col span={16}>
                  <LeadContent />
                </Col>
                <Col span={8}>
                <Tabs className="tabs" defaultActiveKey="1" size="large">
                  <TabPane tab="Login" key="1">
                    <LoginForm/>
                  </TabPane>
                  <TabPane tab="Register" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                </Tabs>
                </Col>
              </Row>
            </div>
          </Content>
          <AppFooter/>
        </Layout>
      </div>
    );
  }
}

export default Home;
