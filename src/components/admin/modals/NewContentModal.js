import React, { Component } from "react";
import axios from "axios";
import AdminContainer from "../../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Modal, Form, Button, Upload, Icon, Input, DatePicker, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const FormItem = Form.Item;

class NewContentModal extends Component {

  handleSubmit = () => {
    const { adminStore, editorContent } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.data = editorContent
        console.log(values.data, editorContent)
        adminStore.addContent(values);
        console.log(values)
        this.props.close()
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      colon: false
    };
    const {adminStore} = this.props
    const {videos} = adminStore.state
    return (
      <div>
        <Modal
          title="Publish Content"
          centered
          visible={this.props.visible}
          onOk={() => this.handleSubmit()}
          onCancel={() => this.props.close()}
        >
          <Form autocomplete="off" onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title for your content!"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Description">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: false,
                  }
                ]
              })(<TextArea />)}
            </FormItem>
              
            <FormItem {...formItemLayout} label="Video">
              {getFieldDecorator("video", {
                rules: [
                  {
                    message: "Pick a Stream!"
                  }
                ]
              })
              (  
                <Select
                  showSearch
                  placeholder="Select a video"
                  optionFilterProp="children"
                  notFoundContent="No scheduled streams"
                  // filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {
                    videos.map( item => (
                      <Option key={item._id} value={item._id}>{item.name}</Option>
                    ))
                  }
                </Select>
            )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default subscribe(Form.create()(NewContentModal), {
  adminStore: AdminContainer
});
