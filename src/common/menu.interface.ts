/*
 * @description: 菜单结构定义
 * @author: zpl
 * @Date: 2020-03-05 12:22:34
 * @LastEditTime: 2020-03-05 13:01:25
 * @LastEditors: zpl
 */

interface MenuInfo {
  key: string;
  link?: string;
  comp?: string;
  cName: string;
  icon: string;
  children?: MenuInfo[];
};

export default MenuInfo;
