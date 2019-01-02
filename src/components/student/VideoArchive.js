import React, { Component } from 'react';
import VideoGrid from '../common/VideoGrid'
import StudentContainer from '../../containers/StudentContainer'
import subscribe from "unstated-subscribe-hoc";

class VideoArchive extends Component {
  render() {
    const {studentStore} = this.props
    const {videos, isLoading} = studentStore.state
    return (
      <div>
        <VideoGrid 
          videos={videos} 
          cols={3} 
          videos={videos.filter(item => item.state!="scheduled")} 
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default subscribe(VideoArchive, { studentStore: StudentContainer });
