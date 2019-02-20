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
                <p>
                  Hello and welcome to Creatr! My name is Daniel Whiteside, CEO and founder of Creatr Classes. I am very excited to announce the launching of creatrclasses.com and the online classes we will be able to provide – this landmark means a lot to me personally as well as for education as a whole. I have personally worked as a tutor, test prep instructor, and educational coach since 2011, and even way back then I knew online educational platforms would change the way people learn. Now I get to be part of that process and contribute something important to the field. Creatr is an all-in-one tutoring platform built for the modern age. Through realtime video streams and interactive livechats, Creatr strives to provide students with the tools they need to succeed.
                </p>
                <h4>My Philosophy as an Educator</h4>
                <p>

     I believe education is more important to the unfolding of the future because what you know and how you think about the world determines how you perceive the world at a very deep level. The level of awareness and understanding that you carry with you into life – whatever the situation may be – determines how the future will proceed for yourself and those around you. An old philosophical aphorism goes: “we see things not as they are, but as we are.” I take this truth quite seriously, and so my teaching style is fundamentally centered not around abstractions, ideologies, rote memorization, or the preservation of traditional beliefs, but rather the individual students understanding.
     My job as an educator is to provide students not only with information, but with understanding. Your own understanding is the only understanding that will ever do you any good – after all, it won't do you any good to think that somewhere, someone else understands what is going on. Thinking that you should leave the solutions of the worlds problems to someone else is the reason we still have so many problems, and the reason most of us fail to reach our full potential.
     My approach is to make sure each and every one of my students learns something for themselves, cultivates their own understanding of the world, and works on solving problems on a level that works for them. This means quite a bit more than memorizing a list of vocabulary words or remembering historical dates on which important events occurred. True understanding means you know not only what things are but what they mean, what to do, how to solve practical problems first for yourself and then for your friends, your family, and ultimately the global human community which we are now part of.
     </p>

      <h4>What Creatr Offers – SAT and ACT Preparation</h4>
      <p>

     Creatr currently offers rich and interactive SAT and ACT prep courses – courses that in the past have helped my students get the scores they need to pursue a meaningful college career. The test prep classes we offer start at the “ground level,” addressing first why these tests exist and how they are used by colleges, and proceeding to an overview of the importance that motivation and goal-setting play in preparing for such a difficult test. Once the student understands why the test is used, how it works, and their individual test score goals, I will then provide an overview of the test content. Due to the time constraints, technological barriers, and to accommodate students of all skill levels, I will not be able to teach in detail every single aspect of actual test content (this would amount to teaching everything you should have learned in high school in only a few hours). It will be up to the individual student to practice the skills they lack on their own – however, I will provide information and tools for the student to practice each and every question type on their own, keep themselves accountable, and monitor progress towards their goals.
     </p>

        <p>

     Be sure to check out our free weekly live SAT & ACT Question and Answer sessions on Thursdays at 8:00pm CST. I will spend about 30-45 minutes answering any questions that come up from the audience each week, completely for free! All you have to do is register for a free account, and then tune in on Thursday nights for the broadcasts. If you'd like to ask your questions in advance, send an email with the subject line “SAT & ACT Question and Answer on (date of broadcast)” to my email address listed at the bottom of this page. I will answer as many questions as I can get to in the allotted time.
     </p>
     <p>

     A variety of educational content including tutoring help for AP math and science classes, standardized test prep, college coaching, and goal setting workshops will be coming soon – but for right now, Creatr is still just getting off the ground. Check back soon as we continue to add site features, additional courses and even free content! I intend to pilot online Pre-Calculus, Calculus, and AP Physics live tutoring sessions within the next couple of months. Stay tuned for the updates and make sure you sign up for a free account to get on the mailing list! We are still in the process of building our online platform and growing our customer base, and since we are still in the beginning stages of our operation we love to hear comments and questions from our customers. If you have any comments, requests for courses, or comments about what we do, please send us an email!
     </p>

 Thank you and I hope to see you in class soon! <br/>
 Daniel Whiteside<br/>
 CEO – Creatr<br/>
  
 For additional questions or support, please contact Daniel at <a href="mailto:creatrclasses@gmail.com"> creatrclasses@gmail.com</a>   
          
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
