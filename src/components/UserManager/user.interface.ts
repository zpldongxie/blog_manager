/*
 * @description: 用户信息定义
 * @author: zpl
 * @Date: 2020-03-06 15:50:12
 * @LastEditTime: 2020-03-06 15:52:16
 * @LastEditors: zpl
 */

import {sex, role} from '../../common/dictionary';

 interface UserInfo {
  _id?: string;
  userName: string;
  name: string;
  sex: sex;
  mobilePhone: string;
  role: role;
  email: string;
 }

export default UserInfo;
