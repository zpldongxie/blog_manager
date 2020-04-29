import React, {useContext, useReducer} from 'react';
import {Layout, Breadcrumb, Divider} from 'antd';
import {Route, Link} from 'react-router-dom';

import {loading} from '../../components/Util';
import CommonNav from '../../components/CommonNav';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';
import {COMMON_MENU_LIST} from '../../common/constant';

import NavContext from './nav.store';
import NavState from './nav.state';
import NavAction from './nav.action';

import {flatMenu, convertByKeyPath} from '../../utils/menu';
import './index.less';

const {Content, Sider} = Layout;

const FlatedMenuList = flatMenu(COMMON_MENU_LIST);

const reducer = (state: NavState, action: NavAction): NavState => {
  switch (action.type) {
    case 'init':
      return action.state || state;
    case 'change':
      const vstate: NavState = JSON.parse(JSON.stringify(state));
      vstate.keyPath = action.keyPath || [];
      return vstate;
    default:
      return state;
  }
};

interface Props {
  match: { url: string };
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  const {match} = props;
  const [state, dispatch] = useReducer(reducer, useContext(NavContext).state);
  const menuPathArr = convertByKeyPath(state.keyPath);

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
          <NavContext.Provider value={{state: state, dispatch: dispatch}}>
            <CommonNav />
          </NavContext.Provider>
        </Sider>
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/'>首页</Link>
            </Breadcrumb.Item>
            {
              menuPathArr.map((menu) => (
                <Breadcrumb.Item key={menu.key}>{menu.cName}</Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
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


