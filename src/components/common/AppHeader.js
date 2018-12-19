import React from "react";
import { Row, Col, Layout, Button, Affix, Menu, Dropdown } from "antd";
import { MdPerson } from "react-icons/md";
import AuthContainer from "../../containers/AuthContainer";
import subscribe from "unstated-subscribe-hoc";
import "../../styles/App.css";

const { Header } = Layout;

const menu = ({ logout }) => (
  <Menu>
    <Menu.Item>
      <a style={{ textAlign: "center" }} onClick={()=>logout()} >Logout</a>
    </Menu.Item>
    <Menu.Item>
      <a style={{ textAlign: "center" }}>Settings</a>
    </Menu.Item>
  </Menu>
);

const AppHeader = ({ authStore }) => (
  <div>
    <Affix>
      <Header className="app-header">
        <Row gutter={32}>
          <Col span={2}>
            <div className="creatr-logo">Creatr</div>
          </Col>
          <Col span={16} />
          <Col span={6}>
            <Dropdown overlay={menu(authStore)}>
              <a className="user-dropdown" href="#">
                <MdPerson className="user-icon" />
                {`${authStore.state.firstname} ${authStore.state.lastname}`}
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    </Affix>
  </div>
);

export default subscribe(AppHeader, { authStore: AuthContainer });
