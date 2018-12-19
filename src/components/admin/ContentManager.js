import React, { Component } from "react";
import { Row, Col, Button, Icon, Affix } from "antd";
import { EditorState } from "draft-js";
import AdminContainer from "../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import ContentEditor from "../common/Editor"


class ContentManager extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onEditorChange = (editorState) => this.setState({editorState});

  render() {
    const { adminStore } = this.props;
    return (
      <div>
        <Row gutter={32}>
          <Col span={18}>
            <ContentEditor editorState={this.state.editorState} onChange={this.onEditorChange} />
          </Col>
          <Col span={6}>
            <Affix offsetTop={10}>
              <Button
                disabled
                size="large"
                type="primary"
                style={{ marginBottom: 8 }}
                block
              >
                Export Users
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
