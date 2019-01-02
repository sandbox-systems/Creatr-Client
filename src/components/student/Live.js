import React, { Component } from "react";
import { List, Row, Col } from "antd";
import YouTube from "react-youtube";
import StudentContainer from "../../containers/StudentContainer";
import subscribe from "unstated-subscribe-hoc";

class Live extends Component {
  render() {
    const { studentStore } = this.props;
    const { stream, isLoading } = studentStore.state;
    console.log(studentStore)
    return (
      <div>
        { stream ? 
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
          :
          <span>No current livestreams. Check back later.</span>
        }  
      </div>
    );
  }
}

export default subscribe(Live, { studentStore: StudentContainer });
