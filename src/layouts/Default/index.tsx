import React from 'react';
import { Layout, Menu, Icon, Divider } from 'antd';
import { Route, Link } from 'react-router-dom';

import { SCRIPTURL, MENULIST } from '../../common/constant'
import loadable from '../../utils/loadable'

import './index.less'

const { Header, Content, Footer, Sider } = Layout;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: SCRIPTURL,
});

/**
 * 获取当前显示内容对应的菜单序号
 *
 * @returns
 */
const getCurrentMenuIndex = () => {
  let key = window.location.pathname.split('/')[1];
  key = key === "" ? Object.keys(MENULIST)[0] : key;
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
        <Footer>
          <a href="https://blog.zhupengliang.cn" target="_blank" rel="noopener noreferrer">blog</a>
          <Divider type="vertical" />
          <a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">Ant Design</a>
          <br/>
          Zhu Pengliang ©{new Date().getFullYear()} Created by Ant Design <br/>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;
