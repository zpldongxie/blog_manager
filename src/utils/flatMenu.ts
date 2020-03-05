/*
 * @description: 把多级数组展开成一维数组
 * @author: zpl
 * @Date: 2020-03-05 11:36:28
 * @LastEditTime: 2020-03-05 13:31:42
 * @LastEditors: zpl
 */

import MenuInfo from '../common/menu.interface';

const flatMenu = (arr: MenuInfo[]): MenuInfo[] => {
  let menuList: MenuInfo[] = [];
  arr.forEach((item) => {
    if (item.children && item.children.length) {
      menuList = menuList.concat(flatMenu(item.children));
    } else {
      console.log('-----------' + item.comp);
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

export default flatMenu;
