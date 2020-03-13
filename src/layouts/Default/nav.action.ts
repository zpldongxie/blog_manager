/*
 * @description: 导航动作定义
 * @author: zpl
 * @Date: 2020-03-12 10:31:41
 * @LastEditTime: 2020-03-12 12:19:43
 * @LastEditors: zpl
 */

import NavState from './nav.state';

 interface NavAction {
  type: 'init' | 'change';
  keyPath?: string[];
  state?: NavState;
 }

export default NavAction;
