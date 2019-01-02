import React, { Component } from "react";
import axios from "axios";
import subscribe from "unstated-subscribe-hoc";
import AuthContainer from "../../containers/AuthContainer";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

class LoginForm extends Component {
  state = {
    loggedIn: false,
    loginFailed: false
  };
  handleSubmit = e => {
    const { authStore } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        authStore.login(values).catch(err => {
          this.setState({ loginFailed: true });
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input a valid email!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            {this.state.loginFailed && (
              <div className="submit-failed">
                Incorrect Username/Password. Try Again.
              </div>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default subscribe(Form.create()(LoginForm), {
  authStore: AuthContainer
});
