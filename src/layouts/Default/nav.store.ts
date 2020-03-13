/*
 * @description: 导航状态，全局管理
 * @author: zpl
 * @Date: 2020-03-11 15:39:35
 * @LastEditTime: 2020-03-13 09:00:16
 * @LastEditors: zpl
 */

import {createContext, Dispatch} from 'react';
import NavState from './nav.state';
import NavAction from './nav.action';
import {getCurrentKeyPath} from '../../utils/menu';

const defaultContext: {
  state: NavState;
  dispatch?: Dispatch<NavAction>;
} = {
  state: {
    keyPath: getCurrentKeyPath(),
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['2'],
  },
};

export default createContext(defaultContext);
