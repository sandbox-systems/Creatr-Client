import React, { Component } from "react";
import { List, Row, Col, Collapse } from "antd";
import StudentContainer from "../../containers/StudentContainer";
import subscribe from "unstated-subscribe-hoc";
import ContentView from './ContentView';

const Panel = Collapse.Panel;

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
          <Col span={24}>
          <Collapse defaultActiveKey={['0']} onChange={()=>{}}>
          { !isLoading && content.map( (e, i) => 
            <Panel header={e.title} key={i}>
              <>
              {/* <i>{e.description}</i> */}
              <ContentView toolbar={false} data={e.data}/>
              </>
            </Panel>
          )}
            </Collapse>
            {/* <List
              itemLayout="horizontal"
              size="large"
              bordered
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
            /> */}
          </Col>
          {/* <Col span={12}>
              <ContentView toolbar={false} data={this.state.currentItem}/>
          </Col> */}
        </Row>
      </div>
    );
  }
}

export default subscribe(Content, { studentStore: StudentContainer });
