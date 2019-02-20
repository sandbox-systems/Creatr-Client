import React, { Component } from "react";
import AdminContainer from "../../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Modal, Form, Input, Select } from "antd";

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
    const sections = [...new Set(adminStore.state.users.map(e => e.section).flat())];

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
              
            <FormItem {...formItemLayout} label="Class Section">
              {getFieldDecorator("section", {
                rules: [
                  { 
                    required: true,
                    message: "Pick a Stream!"
                  }
                ]
              })
              (  
                <Select
                mode="tags"
                style={{ width: '100%' }}
                tokenSeparators={[',']}
                handleaChange={()=>{}}
              >
              {
                sections.map( (e, i) => (
                  <Select.Option value={e} key={i}> {e} </Select.Option>
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
