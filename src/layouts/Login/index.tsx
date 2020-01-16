import React from 'react';
import Login from '../../components/Login';

const LoginLayout: React.FC = () => (
  <Login
    visible
    handleCancel={() => { window.location.href = '/'; }}
    loginSuccess={(data: Array<any>) => {
      console.dir(data);
     }}
    loginFailure={() => { }}
  />
);

export default LoginLayout;