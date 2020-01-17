import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';

import { MENULIST } from '../../common/constant'
import loadable from '../../utils/loadable'

import './index.less'

const { Header, Content, Footer, Sider } = Layout;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

/**
 * 获取当前显示内容对应的菜单序号
 *
 * @returns
 */
const getCurrentMenuIndex = () => {
  const urlArr = window.location.pathname.split('/');
  let key = urlArr.length > 1 ? urlArr[1] : Object.keys(MENULIST)[0];
  return MENULIST[key].index;
}

interface Props {
  match: {url: string}
}

const DefaultLayout: React.FC<Props> = (props: Props) => {  
  const { match } = props;
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[getCurrentMenuIndex()]}>
          {
            Object.keys(MENULIST).map((key) => (
              <Menu.Item key={MENULIST[key].index}>
                <Link to={key==='dashboard' ? '/' : `/${key}`}>
                  <IconFont type={MENULIST[key].icon} />
                  <span className="nav-text">{MENULIST[key].cName}</span>
                </Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content>
          <div className="mainCon">
            {
              Object.keys(MENULIST).map((key: string) => {
                const path=`${match.url}${key==='dashboard' ? '' : key}`;                  
                const comp = loadable(()=>import(`../../components/${MENULIST[key].comp}`));
                return <Route 
                  key={ key } 
                  path={ path }  
                  component={ comp } 
                  exact
                />
              })
            }
          </div>
        </Content>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

interface State {}

export default DefaultLayout;
