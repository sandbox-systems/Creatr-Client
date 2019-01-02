import React, { Component } from "react";
import axios from "axios";
import AdminContainer from "../../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Modal, Form, Button, Upload, Icon, Input, DatePicker } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

class NewVideoModal extends Component {

  handleSubmit = () => {
    const { adminStore } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.date = values.date.toISOString();
        adminStore.addVideo(values);
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
    return (
      <div>
        <Modal
          title="Schedule a Live Stream"
          centered
          visible={this.props.visible}
          onOk={() => this.handleSubmit()}
          onCancel={() => this.props.close()}
        >
          <Form autocomplete="off" onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Title">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title for your video!"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Video Desciption">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: false,
                    message: "Please input the desciption for your video!"
                  }
                ]
              })(<TextArea />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Broadcast Time">
              {getFieldDecorator("date", {
                rules: [
                  {
                    required: true,
                    message: "Please input the broadcast time for your video!"
                  }
                ]
              })(<DatePicker showTime format="MMM Do YY, h:mm A" use12Hours />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Thumbnail">
              {getFieldDecorator("thumbnail", {
                valuePropName: "fileList",
                getValueFromEvent: this.normFile
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button disabled>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default subscribe(Form.create()(NewVideoModal), {
  adminStore: AdminContainer
});
