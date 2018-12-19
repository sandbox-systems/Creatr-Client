import React, { Component } from "react";
import { Row, Col, Button, Icon, Affix } from "antd";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import VideoGrid from "./VideoGrid";
import NewVideoModal from "./NewVideoModal";
import UserList from "../common/UserList";

class UserManager extends Component {
  render() {
    const { adminStore } = this.props;
    return (
      <div>
        <Row gutter={32}>
          <Col span={18}>
            <UserList users={adminStore.state.users} />
          </Col>
          <Col span={6}>
            <Affix offsetTop={10}>
              <Button
                disabled
                size="large"
                type="primary"
                style={{ marginBottom: 8 }}
                block
              >
                Export Users
                <Icon type="download" theme="filled" />
              </Button>
            </Affix>
          </Col>
        </Row>
      </div>
    );
  }
}
export default subscribe(UserManager, { adminStore: AdminContainer });
