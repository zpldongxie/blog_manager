import React, { Component } from 'react';
import {
  Modal, Input, Icon, message, Button,
} from 'antd';
import api from '../../common/api'
import https from '../../utils/https'


interface LoginInfo {
  email: string,
  password: string,
}

interface Props {
  visible: boolean,
  handleCancel: () => void,
  loginSuccess: (data: Array<any>) => void,
  loginFailure: (err: any) => void,
}

interface State {
  email: string,
  password: string
}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login({ email, password }: LoginInfo) {
    const { handleCancel, loginSuccess, loginFailure } = this.props;
    https.post(
      api.postLogin,
      {
        email,
        password,
      },
      { withCredentials: true },
    ).then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        loginSuccess(res.data);
        const userInfo = {
          _id: res.data.data.id,
          name: res.data.data.name,
          avatar: res.data.data.avatar,
        };
        window.sessionStorage.userInfo = JSON.stringify(userInfo);
        message.success(res.data.message, 1);
        handleCancel();
        this.setState({
          email: '',
          password: '',
        });
      } else {
        loginFailure(res.data.message);
        message.error(res.data.message, 1);
      }
    }).catch((err) => {
      // TODO: 应遵循eslint规范，此处不使用console，改用其他方式记录错误
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }

  handleOk() {
    const { email, password } = this.state;
    const reg = new RegExp(
      '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
    );
    if (!email) {
      message.warn('邮箱不能为空！');
    } else if (!reg.test(email)) {
      message.warn('请输入格式正确的邮箱！');
    } else if (!password) {
      message.warn('密码不能为空');
    } else {
      this.login(this.state);
    }
  }

  handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    switch(name){
      case 'email':
        this.setState({
          email: value
        });
        break;
      case 'password':
        this.setState({
          password: value
        });
        break;
    }
  }

  render() {
    const { visible, handleCancel } = this.props;
    const { email, password } = this.state;
    return (
      <Modal
        title="登录"
        style={{ top: '25%' }}
        visible={visible}
        onCancel={handleCancel}
        width={400}
        footer={null}
      >
        <div className="login-input">
          <Input
            style={{ marginBottom: 20 }}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            style={{ marginBottom: 40 }}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="login-submit">
          <Button
            style={{ width: '100%', marginBottom: '20px' }}
            type="primary"
            onClick={() => { this.handleOk(); }}
          >
            登录
          </Button>
        </div>
      </Modal>
    );
  }
}