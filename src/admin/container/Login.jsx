import React from 'react'
import { AuthingGuard } from '@authing/react-ui-components';
import { setLoginData } from '../util/login';

import '@authing/react-ui-components/lib/index.min.css'

const Login = () => {
  const appId = '62caacf7ffbf580e257a31d5'
  const onLogin = (userInfo) => {
    const { token, tokenExpiredAt, photo } = userInfo;
    setLoginData(token, tokenExpiredAt, photo);
    window.location.reload();
  }
  return <AuthingGuard appId={appId} onLogin={onLogin} />
}

export default Login;