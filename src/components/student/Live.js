import React, { Component } from "react";
import { List, Row, Col } from "antd";
import YouTube from "react-youtube";
import StudentContainer from "../../containers/StudentContainer";
import subscribe from "unstated-subscribe-hoc";
import Chat from "../common/Chat";

class Live extends Component {
  render() {
    const { studentStore } = this.props;
    const { stream, isLoading } = studentStore.state;
    console.log(studentStore)
    return (
      <div>
        { (!isLoading && stream) &&
         <Row gutter={32}>
          <Col span={18}>
            <YouTube
              videoId={stream.vid}
              opts={{
                height: "500px",
                width: "100%",
                playerVars: {
                  modestbranding: "1",
                  frameborder:"0",
                  rel:"0",
                  // controls:'0'
                }
              }}
            />
          </Col>
          <Col span={6}>
              <Chat
                getConfig = {studentStore.getConfig}
                video = {stream._id}
              />
          </Col>
         </Row>
         
        } 
        { !stream &&
          <p>There's not a live stream right now, please check back later</p>
        }
      </div>
    );
  }
}

export default subscribe(Live, { studentStore: StudentContainer });
