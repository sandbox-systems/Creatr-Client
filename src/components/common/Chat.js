import React, { Component } from 'react';
import { Comment, Tooltip, List, Input } from 'antd';
import axios from "axios";
import socketIOClient from "socket.io-client";
import moment from 'moment';
import StudentContainer from "../../containers/StudentContainer";
import subscribe from "unstated-subscribe-hoc";

const Chatbar = Input.Search;

class Chat extends Component {
  state =  {
    messages: [],
  }

  async componentDidMount() {
    const socket = socketIOClient("/");
    socket.on("message", data => this.addMessage(data));
    const {video, getConfig } = this.props
      try {
        const res = await axios.get("/api/v1/messages/"+video, getConfig());
        this.setState({messages:res.data.result})
        return res.data.result;
      } catch (error) {
        console.error("Error:", error);
    }
  
  }

  getMessages = async (video=this.props.video) => {
    const {getConfig} = this.props
    try {
      const res = await axios.get("/api/v1/messages/"+video, getConfig());
      // this.getData()
      console.log(res);
      this.setState({messages:res.data.result})
      return res.data.result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  sendMessage = async (message) => {
    const {video, getConfig} = this.props

    try {
      const res = await axios.post("/api/v1/messages/", {video, message}, getConfig());
    } catch (error) {
      console.error("Error:", error);
    }
  }
  addMessage = async (res) => {
    if(res.video == this.props.video){
     this.setState({messages:[res, ...this.state.messages]})
    }
  }
  render() {
    const {messages} = this.state
    return (
      <div>
        <Chatbar
          placeholder="send a message"
          enterButton="Send"
          onSearch={this.sendMessage}
        />
        { messages.length > 0 && 
        <List
          className="comment-list"
          header="Livechat"
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={item => (
            <Comment
              author={item.author.firstname}
              // avatar={item.avatar}
              content={item.message}
              datetime={moment(item.date).fromNow()}
            />
          )}
        />
        }
        
      </div>
    );
  }
}

export default subscribe(Chat, { studentStore: StudentContainer });
