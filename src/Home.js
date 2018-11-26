import React, { Component } from 'react';
import { Row, Col, Layout, Menu, Breadcrumb, Icon } from "antd";
import LoginForm from './LoginForm'
import HomeLeadContent from './HomeLeadContent'
const { Header, Content, Sider } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ padding: "0 24px 24px" }}>
        <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Row gutter={64}>
              <Col span={16}>
                <HomeLeadContent/>
              </Col>
              <Col span={8}>
                <LoginForm/>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Home;

