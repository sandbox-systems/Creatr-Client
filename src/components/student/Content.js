import React, { Component } from "react";
import { List, Row, Col } from "antd";
import StudentContainer from "../../containers/StudentContainer";
import subscribe from "unstated-subscribe-hoc";
import ContentView from './ContentView';

class Content extends Component {
  state = {
    currentItem: null
  }
  render() {
    const { studentStore } = this.props;
    const { content, isLoading } = studentStore.state;
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <List
              itemLayout="horizontal"
              dataSource={content}
              renderItem={item => (
                <List.Item
                  onClick= {()=>this.setState({currentItem:item.data})}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
              <ContentView data={this.state.currentItem}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default subscribe(Content, { studentStore: StudentContainer });
