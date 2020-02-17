import React, { useState } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Divider } from 'antd';
import { Route, Link } from 'react-router-dom';

import { SCRIPTURL, MENULIST } from '../../common/constant';
import loadable from '../../utils/loadable';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';

import './index.less'

const { Content, Sider } = Layout;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: SCRIPTURL,
});

/**
 * 获取当前显示内容对应的菜单序号
 *
 * @returns
 */
const getCurrentMenuKey = () => {
  let key = window.location.pathname.split('/')[1];
  return key === "" ? Object.keys(MENULIST)[0] : key;
}
interface Props {
  match: { url: string }
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  const { match } = props;
  const [menuKey, setMenuKey] = useState(getCurrentMenuKey());

  // 面包屑
  const CurrentBreadcrumb = <Breadcrumb>
    <Breadcrumb.Item onClick={() => { setMenuKey(Object.keys(MENULIST)[0]) }}>
      <Link to='/'>首页</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>{MENULIST[menuKey].cName}</Breadcrumb.Item>
  </Breadcrumb>

  return (
    <Layout id="defaultLayout">
      <CustomHeader />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img src="/user.jpeg" alt='' />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[menuKey]}
            onClick={({ key }) => {
              setMenuKey(key)
            }}
          >
            {
              Object.keys(MENULIST).map((key) => (
                <Menu.Item key={key}>
                  <Link to={key === 'dashboard' ? '/' : `/${key}`}>
                    <IconFont type={MENULIST[key].icon} />
                    <span className="nav-text">{MENULIST[key].cName}</span>
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
          <Content>
            {CurrentBreadcrumb}
            <Divider style={{ margin: '10px 0' }} />
            <div className="mainCon">
              {
                Object.keys(MENULIST).map((key: string) => {
                  const path = `${match.url}${key === 'dashboard' ? '' : key}`;
                  const comp = loadable(() => import(`../../components/${MENULIST[key].comp}`));
                  return <Route
                    key={key}
                    path={path}
                    component={comp}
                    exact
                  />
                })
              }
            </div>
          </Content>
      </Layout>
          <CustomFooter />
    </Layout>
  )
}

export default DefaultLayout;


