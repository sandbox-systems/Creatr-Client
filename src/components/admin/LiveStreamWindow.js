import React from "react";
import { Row, Col, Button, Layout } from "antd";
import WindowPortal from "../common/WindowPortal";
import Iframe from 'react-iframe'
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import "../../styles/App.css";
const { Content } = Layout;

const LiveStreamWindow = ({ adminStore }) => (
  <div>
    <WindowPortal title="Live Stream">
      <Layout>
        <Content>
          <Row gutter={32}>
            <Col span={24}>
              <h1>{adminStore.state.stream ? "Live" : "Offline"}</h1>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col span={18} >
            <Iframe url={`https://www.youtube.com/live_chat?is_popout=1&v=${"HIY2eMYScW0"}&embed_domain=www.localhost `}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
            </Col>
            <Col span={6}>
              <Button
                onClick={() =>
                  adminStore.stopStream(adminStore.state.stream._id)
                }
                size="large"
                type="primary"
                style={{ marginBottom: 8 }}
                block
              >
                Stop Stream
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </WindowPortal>
  </div>
);

export default subscribe(LiveStreamWindow, { adminStore: AdminContainer });
