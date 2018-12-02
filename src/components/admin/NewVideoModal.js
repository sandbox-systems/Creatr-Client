import React, { Component } from "react";
import axios from 'axios'
import {
  Modal,
  Form,
  Select,
  Radio,
  Button,
  Upload,
  Icon,
  Input,
  DatePicker,
  TimePicker
} from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const config = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}


class NewVideoModal extends Component {
  // static contextType = A;
  handleSubmit = e => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.date = values.date.toISOString();
        console.log(values)
        axios
          .post("/api/v1/videos/", values, config)
          .then(response => {
            this.setState({ loggedIn: true });
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
    // this.context.update();
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
            {/* <FormItem {...formItemLayout} label="Broadcast Time" >
              {getFieldDecorator("time", {
                rules: [
                  { required: true, message: "Please input the broadcast time for your video!" }
                ]
              })(
                <TimePicker use12Hours format="h:mm A"/>
              )}
            </FormItem> */}
            {/* <FormItem {...formItemLayout} label="Broadcast Time" >
              {getFieldDecorator("tags", {
                rules: [
                  { required: true, message: "Please input the broadcast date for your video!" }
                ]
              })(
                <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['Educational']}
  >
  </Select>
              )}
            </FormItem> */}
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

export default Form.create()(NewVideoModal);
