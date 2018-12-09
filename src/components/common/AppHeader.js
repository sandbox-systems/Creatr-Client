import React from "react";
import { Row, Col, Layout, Button, Icon, Affix, Menu, Dropdown } from "antd";
import AuthContainer from "../../containers/AuthContainer";
import subscribe from "unstated-subscribe-hoc";
import "../../styles/App.css";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a
      href="#"
      style={{textAlign:"center"}}
      >
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const AppHeader = ({ authStore }) => (
  <div>
    <Affix>
      <Header className="app-header">
        <div className="logo" />
        {/* <Menu
          theme="light"
          mode="horizontal"
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="2">Arvind Balaji</Menu.Item>
        </Menu> */}
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Arvind Balaji <Icon type="down" />
          </a>
        </Dropdown>
      </Header>
    </Affix>
  </div>
);

export default subscribe(AppHeader, { authStore: AuthContainer });
