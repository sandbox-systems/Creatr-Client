import React, { Component } from "react";
import axios from 'axios'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import DashboardRedirect from '../common/DashboardRedirect';
const FormItem = Form.Item;

class LoginForm extends Component {
  state = {
    loggedIn: false
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values)      
      }
    });
  }
  login = values => {
    axios.post('/api/v1/login/', values)
    .then( response => {
      localStorage.setItem('token', `Bearer ${response.data.token}`);
      localStorage.setItem('role', response.data.result.role);
      this.setState({loggedIn:true}) 
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.state.loggedIn && <DashboardRedirect/>}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true}],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}


export default Form.create()(LoginForm);