import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col, Card } from "antd";
import {
  MdVideoLibrary,
  MdVideocam,
  MdAssignment,
  MdInsertInvitation,
} from "react-icons/md";

function TileNav() {
  return (
    <div>
      <Row gutter={50} type="flex" justify="center" align="center">
        <Col span={8}>
          <Link to={"/portal/live"}>
            <Card
              hoverable
              className="menu-card"
              title="Live Stream"
            >
              <MdVideocam className="icon" />
              <div>Current Livestream</div>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to={"/portal/videos"}>
            <Card hoverable className="menu-card" title="Video Archive">
              <MdVideoLibrary className="icon" />
              <div>Access Completed Livestreams</div>
            </Card>
          </Link>  
        </Col>
      </Row>
      <div style={{ height: "50px" }} />
      <Row gutter={50} type="flex" justify="center" align="center">
        <Col span={8}>
          <Link to={"/portal/bulletin"}>
            <Card hoverable className="menu-card" title="Bulletin">
              <MdAssignment className="icon" />
              <div>Access Instructor Messages </div>
            </Card>
          </Link>   
        </Col>
        <Col span={8}>
        <Link to={"/portal/schedule"}>
          <Card hoverable className="menu-card" title="My Schedule">
            <MdInsertInvitation className="icon" />
            <div>See Upcoming Livestreams and Events</div>
          </Card>
        </Link>  
        </Col>
      </Row>
    </div>
  );
}


export default TileNav;