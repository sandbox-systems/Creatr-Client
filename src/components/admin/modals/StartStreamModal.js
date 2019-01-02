import React, { Component } from "react";
import axios from "axios";
import AdminContainer from "../../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Modal, Form, Button, Upload, Icon, Input, DatePicker, Select } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;


class StartStreaModal extends Component {

  handleSubmit = () => {
    const { adminStore } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        adminStore.startStream(values.video);
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
          title="Start a Live Stream"
          centered
          visible={this.props.visible}
          onOk={() => this.handleSubmit()}
          onCancel={() => this.props.close()}
        >
          <Form autocomplete="off" onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Streams">
              {getFieldDecorator("video", {
                rules: [
                  {
                    required: true,
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
                    videos.filter(item => item.state=="scheduled").map( item => (
                      <Option value={item._id}>{item.name}</Option>
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

export default subscribe(Form.create()(StartStreaModal), {
  adminStore: AdminContainer
});
