import React, {useContext} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

import {SCRIPTURL, COMMON_MENU_LIST} from '../../common/constant';
import NavContext from '../../layouts/Default/nav.store';
import './index.less';

const {SubMenu} = Menu;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: SCRIPTURL,
});

const CommonNav: React.SFC<{}> = () => {
  const {
    state: {
      keyPath,
      defaultSelectedKeys,
      defaultOpenKeys,
    },
    dispatch = (): void =>{
      // do something
    },
  } = useContext(NavContext);

  return <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={keyPath.length ? [keyPath[0]] : defaultSelectedKeys}
    defaultOpenKeys={keyPath.length > 1 ? [keyPath[1]] : defaultOpenKeys}
    onClick={(item): void=>{
      dispatch({type: 'change', keyPath: item.keyPath});
    }}
  >
    {
      COMMON_MENU_LIST.map((menu) => {
        if (menu.children && menu.children.length) {
          return <SubMenu
            key={menu.key}
            title={
              <span>
                <IconFont type={menu.icon} />
                <span className='nav-text'>{menu.cName}</span>
              </span>
            }
          >
            {
              menu.children.map((subMenu) => {
                return (<Menu.Item key={subMenu.key}>
                  <Link to={subMenu.key === '1' ? '/' : `/${subMenu.link}`}>
                    <IconFont type={subMenu.icon} />
                    <span className="nav-text">{subMenu.cName}</span>
                  </Link>
                </Menu.Item>);
              })
            }
          </SubMenu>;
        } else {
          return <Menu.Item key={menu.key}>
            <Link to={menu.key === '1' ? '/' : `/${menu.link}`}>
              <IconFont type={menu.icon} />
              <span className="nav-text">{menu.cName}</span>
            </Link>
          </Menu.Item>;
        }
      })
    }
  </Menu>;
};

export default CommonNav;
