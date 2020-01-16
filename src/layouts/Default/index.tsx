import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route } from 'react-router-dom';

import Dashboard from '../../components/Dashboard'
import ArticleManager from '../../components/ArticleManager'
import CommentManager from '../../components/CommentManager'
import LableManager from '../../components/LableManager'
import FileManager from '../../components/FileManager'
import SysManager from '../../components/SysManager'


import './index.less'

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  match: {url: string}
}

interface State {}

export default class DefaultLayout extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <Layout id="defaultLayout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content>
            <div className="mainCon">
              <Route path={match.url} component={Dashboard} exact />
              <Route path={`${match.url}articleManager`} component={ArticleManager} />
              <Route path={`${match.url}commentManager`} component={CommentManager} />
              <Route path={`${match.url}lableManager`} component={LableManager} />
              <Route path={`${match.url}fileManager`} component={FileManager} />
              <Route path={`${match.url}sysManager`} component={SysManager} />
            </div>
          </Content>
          <Footer>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
