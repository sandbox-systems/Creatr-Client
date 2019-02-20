import React, { Component } from "react";
import axios from "axios";
import AdminContainer from "../../../containers/AdminContainer";
import subscribe from "unstated-subscribe-hoc";
import { Modal, Form, Button, Select, Icon, Input, DatePicker } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

class UserModal extends Component {
  state = {
    dirty: true
  }
  mapPropsToFields = (props) => {
    const { firstname, lastname, role, email, section} = props.user;
  
    return {
      firstname: Form.createFormField({ value: firstname }),
      lastname:  Form.createFormField({ value: lastname }),
      role:      Form.createFormField({ value: role }),
      email:     Form.createFormField({ value: email }),
      section:   Form.createFormField({ value: section }),
    };
  };
  
  handleSubmit = () => {
    const { adminStore, user } = this.props;
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err  && this.state.dirty) {
        adminStore.updateUser({...values, _id:user._id});
      }
    });
    this.props.close()  

  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { adminStore } = this.props;
    const sections = [...new Set(adminStore.state.users.map(e => e.section).flat())];
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      colon: false
    };
    return (
      <div>
        <Modal
          title="User"
          centered
          visible={this.props.visible}
          // onOk={() => this.handleSubmit()}
          onCancel={() => this.props.close()}
          footer={[
            <Button key="cancel" onClick={() => this.props.close()}>Cancel</Button>,
            <Button key="submit" onClick={() => this.handleSubmit()} type="primary" >
              {this.state.dirty ? "Update" : "Ok"}
            </Button>,
          ]}
        >
          <Form autocomplete="off" onSubmit={this.handleSubmit} onChange={() => this.setState({dirty:true})}>
            <FormItem {...formItemLayout} label="First Name">
              {getFieldDecorator("firstname", {
                rules: [
                  {
                  }
                ]
              })(<Input value="adwe"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="Last Name">
              {getFieldDecorator("lastname", {
                rules: [
                  {
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Role">
              {getFieldDecorator("role", {
                rules: [
                  {

                  }
                ]
              })(
                <Select>
                  <Select.Option value="admin">Admin</Select.Option>
                  <Select.Option value="student">Student</Select.Option>
                </Select>
            )}
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator("email", {
                rules: [
                  {

                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Class Section">
              {getFieldDecorator("section", {
                rules: [
                  {
                    type: 'array'
                  }
                ]
              })( <Select
                mode="tags"
                style={{ width: '100%' }}
                tokenSeparators={[',']}
                handleChange={()=>{}}
              >
               {
                  sections.map( (e, i) => (
                    <Select.Option value={e} key={i}> {e} </Select.Option>
                  ))
                }
              </Select>      )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

// todo: make hoc to fix this clusterfuck
export default subscribe(
  Form.create( {mapPropsToFields(props){
    const { firstname, lastname, role, email, section } = props.user;
  
    return {
      firstname: Form.createFormField({ value: firstname }),
      lastname:  Form.createFormField({ value: lastname }),
      role:      Form.createFormField({ value: role }),
      email:     Form.createFormField({ value: email }),
      section:   Form.createFormField({ value: section }),
    };
  }} )
  (UserModal), {  adminStore: AdminContainer}
);
