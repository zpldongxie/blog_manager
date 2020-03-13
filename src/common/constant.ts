/*
 * @description: 全局常量
 * @author: zpl
 * @Date: 2020-01-17 13:30:02
 * @LastEditTime: 2020-03-13 10:57:55
 * @LastEditors: zpl
 */

import MenuInfo from './menu.interface';

const APP_NAME = '无为博客管理系统';

// antd createFromIconfontCN方法引入iconfont.cn的项目图标链接
const SCRIPTURL = '//at.alicdn.com/t/font_1617351_pk2is4ve4ge.js';

// 公共菜单，渲染层目前最多支持二级
const COMMON_MENU_LIST: MenuInfo[] = [
  {
    key: '1',
    link: 'dashboard',
    comp: 'Dashboard',
    cName: '仪表盘',
    icon: 'icon-yibiaopan',
  },
  {
    key: '2',
    cName: '文章管理',
    icon: 'icon-wenzhangguanli',
    children: [{
      key: '2-1',
      link: 'articleManager',
      comp: 'ArticleManager',
      cName: '文章管理',
      icon: 'icon-wenzhangguanli',
    }, {
      key: '2-2',
      link: 'commentManager',
      comp: 'CommentManager',
      cName: '评论管理',
      icon: 'icon-pinglun',
    }, {
      key: '2-3',
      link: 'lableManager',
      comp: 'LableManager',
      cName: '分类-标签管理',
      icon: 'icon-iconset0169',
    }],
  },
  {
    key: '3',
    link: 'channelsManager',
    comp: 'ChannelsManager',
    cName: '栏目管理',
    icon: 'icon-neirongguanli-lanmuguanli',
  }, {
    key: '4',
    link: 'fileManager',
    comp: 'FileManager',
    cName: '文件管理',
    icon: 'icon-wenjian',
  }, {
    key: '5',
    link: 'userManager',
    comp: 'UserManager',
    cName: '用户管理',
    icon: 'icon-yonhu',
  }, {
    key: '6',
    link: 'sysManager',
    comp: 'SysManager',
    cName: '系统管理',
    icon: 'icon-xitong',
  },
];

// 友链
const FREND_LINK = [{
  name: 'blog',
  link: 'https://blog.zhupengliang.cn',
}, {
  name: 'Ant Design',
  link: 'https://ant.design/index-cn',
}, {
  name: 'AntV',
  link: 'https://antv.vision/zh',
}, {
  name: 'BizCharts',
  link: 'https://bizcharts.net/products/bizCharts',
}];

export {
  APP_NAME,
  SCRIPTURL,
  COMMON_MENU_LIST,
  FREND_LINK,
};
