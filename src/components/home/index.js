import React, { Component } from "react";
import { Row, Col, Layout, Menu, Breadcrumb, Icon, Tab, Carousel, Tabs } from "antd";
import AuthRedirect from "../common/AuthRedirect";
import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";
import Banner1 from "../../images/banner-1.jpg"
import Banner2 from "../../images/banner-2.jpg"

import LoginForm from "./LoginForm";
import LeadContent from "./LeadContent";
import RegisterForm from "./RegisterForm";

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs

class Home extends Component {
  render() {
    return (
      <div className="home">
        <AuthRedirect />
        <Layout>
          <AppHeader />
          <Row>
            <Col span={24}>
              <Carousel autoplay>
                  <img className="banner-image" src={Banner1}/>
                  <img className="banner-image" src={Banner2}/>
              </Carousel>
            </Col>    
          </Row>
          <Content style={{ padding: "32px 32px" }}>
            <div style={{ background: "#fff", padding: 50 }}>
              <Row gutter={64}>
                <Col span={16}>
                  <h2>
                    What We Are
                  </h2>  
                  <p>
                    Creatr is an all-in-one tutoring platform built for the modern age. Through realtime video streams and interactive livechats, Creatr strives to provide students with the tools they  need to succeed.
                  </p>  
                  <h2>
                    Our Mission
                  </h2>  
                  <p>

                  </p>  
                  {/* <LeadContent /> */}
                </Col>
                <Col span={8}>
                <Tabs className="tabs" defaultActiveKey="1" size="large">
                  <TabPane tab="Login" key="1">
                    <LoginForm/>
                  </TabPane>
                  <TabPane tab="Register" key="2">
                    <RegisterForm/>
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
