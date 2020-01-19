/*
 * @description: 统一配置请求接口
 * @author: zpl
 * @Date: 2020-01-13 14:11:20
 * @LastEditTime : 2020-01-18 17:33:05
 * @LastEditors  : zpl
 */

let baseUrl = '/api';
console.log(`process.env: ${JSON.stringify(process.env)}`);
if(process.env.REACT_APP_ENV === 'development'){
  baseUrl = '/mock/api';
}

export default {
  baseUrl: baseUrl,
  postLogin: '/login',
  postLogout: '/logout',
  getUsers: '/users',
  getList: '/getList',
  getContent: '/getContent'
};