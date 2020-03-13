/*
 * @description: 导航状态定义
 * @author: zpl
 * @Date: 2020-03-12 10:31:32
 * @LastEditTime: 2020-03-13 08:59:02
 * @LastEditors: zpl
 */

interface NavState {
   /**
    * 当前选择路径
    *
    * @type {string[]}
    * @memberof NavState
    */
   keyPath: string[];
   /**
    * 默认选中的菜单
    *
    * @type {string[]}
    * @memberof NavState
    */
   defaultSelectedKeys: string[];
   /**
    * 默认展开的节点
    *
    * @type {string[]}
    * @memberof NavState
    */
   defaultOpenKeys: string[];
}

export default NavState;
