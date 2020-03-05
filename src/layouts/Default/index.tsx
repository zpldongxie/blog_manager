import React from 'react';
import {Layout, Breadcrumb, Divider} from 'antd';
import {Route, Link} from 'react-router-dom';

import {loading} from '../../components/Util';
import CommonNav from '../../components/CommonNav';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';

import './index.less';
import {COMMON_MENU_LIST} from '../../common/constant';
import flatMenu from '../../utils/flatMenu';

const {Content, Sider} = Layout;

const FlatedMenuList = flatMenu(COMMON_MENU_LIST);

interface Props {
  match: { url: string };
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  const {match} = props;

  // 面包屑
  const CurrentBreadcrumb = <Breadcrumb>
    <Breadcrumb.Item>
      <Link to='/'>首页</Link>
    </Breadcrumb.Item>
    {/* <Breadcrumb.Item>{MENULIST[menuKey].cName}</Breadcrumb.Item> */}
  </Breadcrumb>;

  return (
    <Layout id="defaultLayout">
      <CustomHeader />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo">
            <img src="/user.jpeg" alt='' />
          </div>
          <CommonNav />
        </Sider>
        <Content>
          {CurrentBreadcrumb}
          <Divider style={{margin: '10px 0'}} />
          <div className="mainCon">
            {
              FlatedMenuList.map((item) => {
                const path = `${match.url}${item.key === '1' ? '' : item.link}`;
                const comp = loading(() => import(`../../components/${item.comp}`));
                return <Route
                  key={item.key}
                  path={path}
                  component={comp}
                  exact
                />;
              })
            }
          </div>
        </Content>
      </Layout>
      <CustomFooter />
    </Layout>
  );
};

export default DefaultLayout;


