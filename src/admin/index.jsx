import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useSchemaData } from './hook/useSchemaData';
import { initAuthClient, getAuthClient } from '@authing/react-ui-components'
import request from '../common/request';
import store from './store';
import { parseJsonByString } from '../common/utils';
import { getLoginStatus,cleanLoginData } from './util/login';
import HomeManagement from './container/HomeManagement';
import BasicSetting from './container/BasicSetting';
import Login from './container/Login';
import styles from './style.module.scss';

import 'normalize.css'
import 'antd/dist/antd.min.css';
import './style.scss'

const { Header, Sider, Content } = Layout;

initAuthClient({
  appId: '62caacf7ffbf580e257a31d5',
})

const useCollapsed = () => {
  const [ collapsed, setCollapsed ]  = useState(false);
  const toggleCollapsed = () => { setCollapsed(!collapsed) };
  return { collapsed, toggleCollapsed }
}

const Wrapper = () => {
  const handleHomePageRedirect = () => {window.location.href = "/"}
  const { collapsed, toggleCollapsed } = useCollapsed();
  const { changeSchema } = useSchemaData();
  const login = getLoginStatus();
  const photo = window.localStorage.photo;

  useEffect(() => {
    request.get('/api/schema/getLatestOne').then((response) => {
      const data = response?.data;
      data && changeSchema(parseJsonByString(data.schema, {}));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleLogout = () => {
    getAuthClient().logout();
    cleanLoginData();
    window.location.reload();
  }

  return login ? (
    <Router>
      <Layout>
        <Sider className={styles.sidebar} trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
            <Menu.Item key="admin-home">
              <Link to="/">
                <span className="iconfont">&#xe64d;</span>??????????????????
              </Link>
            </Menu.Item>
            <Menu.Item key="admin-setting">
              <Link to="/setting">
                <span className="iconfont">&#xe64d;</span>??????????????????
              </Link>
            </Menu.Item>
            <Menu.Item key="admin-back" onClick={handleHomePageRedirect}>
              <span className="iconfont">&#xe601;</span>??????????????????
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            {
              collapsed
                ? <span className='iconfont' onClick={toggleCollapsed}>&#xe62c;</span>
                : <span className='iconfont' onClick={toggleCollapsed}>&#xe629;</span>
            }
            <img className={styles.avatar} src={photo} alt='avatar' onClick={handleLogout}/>
          </Header>
          <Content className={styles.content}>
            <Switch>
              <Route path='/' component={HomeManagement} exact />
              <Route path='/setting' component={BasicSetting} exact />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  ): <Login />
}

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>
  ,document.getElementById('root')
);