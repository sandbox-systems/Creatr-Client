import React, { Component } from "react";
import { Row, Col, Button, Icon, Affix } from "antd";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import VideoGrid from "./VideoGrid";
import NewVideoModal from "./NewVideoModal";
import LiveStreamWindow from "./LiveStreamWindow";
import StartStreamModal from "./StartStreamModal";

class VideoManager extends Component {
  state = {
    newVideoModal: false,
    startStreamModal: false,
  };
  render() {
    const { adminStore } = this.props;
    return (
      <div>
        <Row gutter={32} >
          {/* <LiveStreamWindow/> */}
          <Col span={18}>
            <VideoGrid cols={3} videos={adminStore.state.videos.filter(item => item.state!="scheduled")} />
          </Col>
          <Col span={6}>
            <NewVideoModal
              visible={this.state.newVideoModal}
              close={() => this.setState({ newVideoModal: false })}
            />
            <StartStreamModal
              visible={this.state.startStreamModal}
              close={() => this.setState({ startStreamModal: false })}
            />
            <Affix offsetTop={100} >
              <Button
                onClick={() => this.setState({newVideoModal:true})}
                size="large"
                type="primary"
                style={{ marginBottom: 8 }}
                block
              >
                Schedule Stream
                <Icon type="sliders" theme="filled" />
              </Button>
              <Button
                onClick={() => this.setState({startStreamModal:true})}
                size="large"
                type="dashed"
                style={{ marginBottom: 32 }}
                block
              >
                Start Livestream
                <Icon type="thunderbolt" theme="filled" />
              </Button>
              <Button
                onClick={() => adminStore.stopStream(adminStore.state.stream._id)}
                size="large"
                hidden={!adminStore.state.stream}
                type="danger"
                style={{ marginBottom: 8 }}
                block
              >
                Stop Livestream
                {/* <Icon type="thunderbolt" theme="filled" /> */}
              </Button>
            </Affix>
          </Col>
        </Row>
      </div>
    );
  }
}
export default subscribe(VideoManager, { adminStore: AdminContainer });
