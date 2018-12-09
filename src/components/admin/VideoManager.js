import React, { Component } from "react";
import { Row, Col, Button, Icon, Affix } from "antd";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import VideoGrid from "./VideoGrid";
import NewVideoModal from "./NewVideoModal";

class VideoManager extends Component {
  state = {
    newVideoModal: false
  };
  render() {
    const { adminStore } = this.props;
    return (
      <div>
        <Row gutter={32} >
          <Col span={18}>
            <VideoGrid cols={3} videos={adminStore.state.videos} />
          </Col>
          <Col span={6}>
            <NewVideoModal
              visible={adminStore.state.modal.newVideoModal}
              close={() => this.setState({ newVideoModal: false })}
            />
            <Affix offsetTop={100} >
              <Button
                onClick={() => adminStore.openModal("newVideoModal")}
                size="large"
                type="primary"
                style={{ marginBottom: 8 }}
                block
              >
                Schedule Stream
                <Icon type="sliders" theme="filled" />
              </Button>
              <Button
                size="large"
                type="dashed"
                style={{ marginBottom: 8 }}
                block
              >
                Start Livestream
                <Icon type="thunderbolt" theme="filled" />
              </Button>
            </Affix>
          </Col>
        </Row>
      </div>
    );
  }
}
export default subscribe(VideoManager, { adminStore: AdminContainer });
