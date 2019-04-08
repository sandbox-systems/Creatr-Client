import React, { Component } from "react";
import { Row, Col, Button, Icon, Affix, Select } from "antd";
import { EditorState } from "draft-js";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import ContentEditor from "../common/Editor";
import NewContentModal from "./modals/NewContentModal";

const Option = Select.Option;

class ContentManager extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    currentContent: {},
    newContentModal: false
  };
  onEditorChange = editorState => this.setState({ editorState });
  onSelectChange = (value) => {
    // this.setState(currentContent:c)
  }
  render() {
    const { adminStore } = this.props;
    return (
      <div>
        <Row gutter={32}>
          <Col span={18}>
            <ContentEditor
              editorState={this.state.editorState}
              onChange={this.onEditorChange}
            />
          </Col>
          <Col span={6}>
            <Affix offsetTop={100}>
              <NewContentModal
                visible={this.state.newContentModal}
                editorContent={this.state.editorState}
                close={() => this.setState({ newContentModal: false })}
              />
               <Select
                onChange={ 
                  ()=>{}
                }
                size="large"
                placeholder="Select content..."
                style={{width:'100%'}}
              >
                {this.state.currentContent && <Option value="new" key={0}>New...</Option>}
                {adminStore.state.content.map(i => (
                  <Option value={i} key={i._id}>{i.title}</Option>
                ))}
              </Select>
              <br/>
              <br/>

              <Button
                onClick={() => this.setState({ newContentModal: true })}
                size="large"
                type="primary"
                style={{ marginBottom: 8 }}
                block
              >
                Save
                <Icon type="download" theme="filled" />
              </Button>
             
            </Affix>
          </Col>
        </Row>
      </div>
    );
  }
}

export default subscribe(ContentManager, { adminStore: AdminContainer });
