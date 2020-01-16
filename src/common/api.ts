/*
 * @description: 统一配置请求接口
 * @author: zpl
 * @Date: 2020-01-13 14:11:20
 * @LastEditTime : 2020-01-13 14:37:32
 * @LastEditors  : zpl
 */

let baseUrl = '/api';
if(process.env.NODE_ENV === 'development'){
  baseUrl = '/mock/api';
}

export default {
  baseUrl: baseUrl,
  postLogin: '/login',
  postGetList: '/getList',
  postGetContent: '/getContent'
};