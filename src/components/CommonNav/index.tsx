import React, {useState} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

import {SCRIPTURL, COMMON_MENU_LIST} from '../../common/constant';
import './index.less';

const {SubMenu} = Menu;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: SCRIPTURL,
});

/**
 * 获取当前显示内容对应的菜单序号
 *
 * @param {string} [link]
 * @return {[string, string]}
 */
const getCurrentMenuKey = (link?: string): [string, string] => {
  const name = link || window.location.pathname.split('/')[1];
  let keyOne: string = COMMON_MENU_LIST[0].key;
  let keyTow = '';
  COMMON_MENU_LIST.some((menu) => {
    if (menu.link === name) {
      keyOne = menu.key;
      return true;
    } else if (menu.children && menu.children.length) {
      const subItem = menu.children.find((subMenu) => {
        return subMenu.link === name;
      });
      if (subItem) {
        keyOne = menu.key;
        keyTow = subItem.key;
        return true;
      }
    }
    return false;
  });

  return [keyOne, keyTow];
};

const CommonNav: React.SFC<{}> = () => {
  const [menuKey] = useState(getCurrentMenuKey());

  return <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={[menuKey[1] || menuKey[0]]}
    defaultOpenKeys={[menuKey[1] ? menuKey[0] : '']}
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
