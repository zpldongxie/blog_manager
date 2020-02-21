/*
 * @description: 全局常量
 * @author: zpl
 * @Date: 2020-01-17 13:30:02
 * @LastEditTime: 2020-02-19 17:53:07
 * @LastEditors: zpl
 */

const APP_NAME = '无为博客管理系统'

// antd createFromIconfontCN方法引入iconfont.cn的项目图标链接
const SCRIPTURL = "//at.alicdn.com/t/font_1617351_j1d06816829.js";

// 菜单配置
const MENULIST: any = {
  "dashboard": {
    "index": "1",
    "comp": "Dashboard",
    "cName": "仪表盘",
    "icon": "icon-yibiaopan"
  },
  "articleManager": {
    "index": "2",
    "comp": "ArticleManager",
    "cName": "文章管理",
    "icon": "icon-wenzhangguanli"
  },
  "commentManager": {
    "index": "3",
    "comp": "CommentManager",
    "cName": "评论管理",
    "icon": "icon-pinglun"
  },
  "lableManager": {
    "index": "4",
    "comp": "LableManager",
    "cName": "分类/标签管理",
    "icon": "icon-iconset0169"
  },
  "fileManager": {
    "index": "5",
    "comp": "FileManager",
    "cName": "文件管理",
    "icon": "icon-wenjian"
  },
  "userManager": {
    "index": "6",
    "comp": "UserManager",
    "cName": "用户管理",
    "icon": "icon-yonhu"
  },
  "sysManager": {
    "index": "7",
    "comp": "SysManager",
    "cName": "系统管理",
    "icon": "icon-xitong"
  }
}

// 友链
const FREND_LINK = [{
  name: 'blog',
  link: 'https://blog.zhupengliang.cn'
}, {
  name: 'Ant Design',
  link: 'https://ant.design/index-cn'
}, {
  name: 'AntV',
  link: 'https://antv.vision/zh'
}, {
  name: 'BizCharts',
  link: 'https://bizcharts.net/products/bizCharts'
}]

export {
  APP_NAME,
  SCRIPTURL,
  MENULIST,
  FREND_LINK
};