/*
 * @description: 菜单相关方法
 * @author: zpl
 * @Date: 2020-03-05 11:36:28
 * @LastEditTime: 2020-03-16 12:30:49
 * @LastEditors: zpl
 */
import {COMMON_MENU_LIST} from '../common/constant';

import MenuInfo from '../common/menu.interface';

/**
 * 把多级数组展开成一维数组
 *
 * @param {MenuInfo[]} arr 待展开Menu数据
 * @return {MenuInfo[]} 展开后的数组
 */
const flatMenu = (arr?: MenuInfo[]): MenuInfo[] => {
  const oldMenuList = arr || COMMON_MENU_LIST;
  let menuList: MenuInfo[] = [];
  oldMenuList.forEach((item) => {
    if (item.children && item.children.length) {
      menuList = menuList.concat(flatMenu(item.children));
    } else {
      menuList.push({
        key: item.key,
        cName: item.cName,
        icon: item.icon,
        link: item.link,
        comp: item.comp,
      });
    }
  });

  return menuList;
};

/**
 * 获取当前显示内容对应的菜单路径
 *
 * @param {string} [link] 可选，当前链接，不传则从window.locagion.pathname中获取
 * @return {string[]} 解析后返回keyPath路径
 */
const getCurrentKeyPath = (link?: string): string[] => {
  const name = link || window.location.pathname.split('/')[1];
  const keyPath: string[] = [];

  COMMON_MENU_LIST.some((menu) => {
    if (menu.link === name) {
      keyPath.push(menu.key);
      return true;
    } else if (menu.children && menu.children.length) {
      const subItem = menu.children.find((subMenu) => {
        return subMenu.link === name;
      });
      if (subItem) {
        keyPath.push(subItem.key);
        keyPath.push(menu.key);
        return true;
      }
    }
    return false;
  });

  if (!keyPath.length) {
    keyPath.push(COMMON_MENU_LIST[0].key);
  }
  return keyPath;
};

/**
 * 根据key查找菜单
 *
 * @param {string} key
 * @param {MenuInfo[]} list
 * @return {(MenuInfo | undefined)}
 */
const findByKey = (key: string, list?: MenuInfo[]): MenuInfo | undefined => {
  const currentList = list || COMMON_MENU_LIST;
  let returnItem: MenuInfo | undefined;
  const finded = currentList.some((item) => {
    if (item.key === key) {
      returnItem = item;
      return true;
    } else if (item.children && item.children.length) {
      const child = findByKey(key, item.children);
      if (child !== undefined) {
        returnItem = child;
        return true;
      }
      return false;
    }
    return false;
  });
  finded || (returnItem = COMMON_MENU_LIST[0]);
  return returnItem;
};

/**
 * 根据keyPath转换菜单数组
 *
 * @param {string[]} keyPath
 * @return {MenuInfo[]}
 */
const convertByKeyPath = (keyPath: string[]): MenuInfo[] => {
  const list: MenuInfo[] = [];
  keyPath.forEach((key) => {
    const item = findByKey(key);
    item !== undefined && list.push(item);
  });
  return list.reverse();
};

export {
  flatMenu,
  getCurrentKeyPath,
  convertByKeyPath,
};
