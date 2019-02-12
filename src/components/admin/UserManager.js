import React, { Component } from "react";
import { Row, Col, Button, Icon, Affix } from "antd";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import UserList from "../common/UserList";
import UserModal from "./modals/UserModal";

class UserManager extends Component {
  state = {
    userModal: false,
    currentUser: "",
  };

  render() {
    const { adminStore } = this.props;
    return (
      <div>
        <UserModal 
          visible={this.state.userModal}
          user={this.state.currentUser}
          close={() => this.setState({ userModal: false })}
        />
        <Row gutter={32}>
          <Col span={18}>
            <UserList 
              isLoading={adminStore.state.isLoading}
              users={adminStore.state.users} 
              select={(id)=>this.setState({currentUser: id, userModal:true})}
            />
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
