import React, { Component } from "react";
import AdminContainer from "../../containers/AuthContainer";
import subscribe from "unstated-subscribe-hoc";
import {
  Row,
  Col,
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Tab,
  Carousel,
  Tabs,
  Spin
} from "antd";
import ReactQuill from 'react-quill';
import AuthRedirect from "../common/AuthRedirect";
import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";
import Banner1 from "../../images/banner-1.jpg";
import Banner2 from "../../images/banner-2.jpg";

import LoginForm from "./LoginForm";
import LeadContent from "./LeadContent";
import RegisterForm from "./RegisterForm";
import AuthContainer from "../../containers/AuthContainer";

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

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
                <img className="banner-image" src={Banner1} />
                <img className="banner-image" src={Banner2} />
              </Carousel>
            </Col>
          </Row>
          <Content style={{ padding: "32px 32px" }}>
            <div style={{ background: "#fff", padding: 50 }}>
              <Row gutter={64}>
                <Col span={16}>
                {/* <ReactQuill 
  readOnly
    toolbar="false"
    className="editor readonly" 
    value={this.props.authStore.state.landingContent} 
  /> */}
    <div dangerouslySetInnerHTML={{__html:this.props.authStore.state.landingContent}}/>
      {/* <div className="spin-container">
       <Spin size="large"  />
      </div> */}

                  {/* <h2>Welcome to Creatr!</h2>
                  <p>
                    Hello and welcome to Creatr! Creatr is an all-in-one
                    tutoring platform built for the modern age. Through realtime
                    video streams and an interactive chat, Creatr strives to
                    provide students with the tools they need to succeed. If you
                    are trying to access a course or one of our free live
                    streams, please login now. If you do not already have an
                    account you can create one for free by clicking the
                    “register” button.
                  </p>
                  <h3>Who am I?</h3>
                  <p>
                    My name is Daniel Whiteside, CEO and founder of Creatr. I am
                    very excited to announce the launching of creatrclasses.com
                    and the online classes we will be able to provide – this
                    landmark means a lot to me personally as well as for
                    education as a whole. I have personally worked as a tutor,
                    test prep instructor, and educational coach since 2011, and
                    even way back then I knew online educational platforms would
                    change the way people learn. Now I get to be part of that
                    process and contribute something important to my field.
                  </p>
                  <h3>My Philosophy as an Educator</h3>
                  <p>
                    One of the core pillars in my application of educational
                    techniques is based on Self-Regulated Learning theory –
                    ultimately the aim of SRL is to teach students the
                    metacognitive skills required for academic success. As
                    students transition to high school and college, a greater
                    degree of self regulation is required to match the increase
                    in responsibility and cognitive workloads associated with
                    higher education. Generally this mean getting the students
                    involved in the process identifying learning goals, creating
                    action plans, and analyzing the effectiveness of the
                    implemented plan.
                  </p>
                  <h3>What Creatr Offers – SAT and ACT Preparation</h3>
                  <p>
                    Creatr currently offers rich and interactive SAT and ACT
                    prep courses – courses that in the past have helped my
                    students get the scores they need to pursue a meaningful
                    college career. The test prep classes we offer start at the
                    “ground level,” addressing first why these tests exist and
                    how they are used by colleges, and proceeding to an overview
                    of the importance that motivation and goal-setting play in
                    preparing for such a difficult test. Once the student
                    understands why the test is used, how it works, and their
                    individual test score goals, we will proceed to an overview
                    of the test content for each section.
                  </p>
                  <p>
                    Be sure to check out our free weekly live SAT & ACT Question
                    and Answer sessions on Thursdays at 8:00pm CST. I will spend
                    about 30-45 minutes answering any questions that come up
                    from the audience each week, completely for free! All you
                    have to do is register for a free account, and then log in
                    on Thursday nights for the broadcasts. If you'd like to ask
                    your questions in advance, send an email with the subject
                    line “SAT & ACT Question and Answer on (date of broadcast)”
                    to my email address listed at the bottom of this page. I
                    will answer as many questions as I can get to in the
                    allotted time.
                  </p>
                  <p>
                    A variety of educational content including tutoring help for
                    AP math and science classes, standardized test prep, college
                    coaching, and goal setting workshops will be coming soon –
                    but for right now, Creatr is still just getting off the
                    ground. Check back soon as we continue to add site features,
                    additional courses and even free content! I intend to pilot
                    online Pre-Calculus, Calculus, and AP Physics live tutoring
                    sessions within the next couple of months. Stay tuned for
                    the updates and make sure you sign up for a free account to
                    get on the mailing list! We are still in the process of
                    building our online platform and growing our customer base,
                    and since we are still in the beginning stages of our
                    operation we love to hear comments and questions from our
                    customers. If you have any comments, requests for courses,
                    or comments about what we do, please send us an email!
                  </p>
                  Thank you and I hope to see you in class soon! <br />
                  Daniel Whiteside <br />
                  CEO – Creatr <br />
                  <br />
                  For additional questions or support, please email us at{" "}
                  <a href="mailtto:creatrclasses@gmail.com">
                    creatrclasses@gmail.com{" "}
                  </a> */}
                  {/* <LeadContent /> */}
                </Col>
                <Col span={8}>
                  <Tabs className="tabs" defaultActiveKey="1" size="large">
                    <TabPane tab="Login" key="1">
                      <LoginForm />
                    </TabPane>
                    <TabPane tab="Register" key="2">
                      <RegisterForm />
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </div>
    );
  }
}

export default subscribe(Home, { authStore: AuthContainer });
