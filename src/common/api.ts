/*
 * @description: 统一配置请求接口
 * @author: zpl
 * @Date: 2020-01-13 14:11:20
 * @LastEditTime: 2020-03-16 14:09:02
 * @LastEditors: zpl
 */

let baseUrl = '/api';
console.log(`process.env: ${JSON.stringify(process.env)}`);
if (process.env.REACT_APP_ENV === 'development') {
  baseUrl = '/mock/api';
}

export default {
  baseUrl: baseUrl,
  postLogin: '/login',
  postLogout: '/logout',
  getUsers: '/users',
  getList: '/getList',
  getContent: '/getContent',
  getAllTypes: '/type',
  addType: '/type',
  delOneType: '/type',
  changeTypeNameUrl: '/type/changeName',
  changeTypeColorUrl: '/type/changeColor',
  getAllLables: '/lable',
  addLable: '/lable',
  delOneLable: '/lable',
  changeLableNameUrl: '/lable/changeName',
  changeLableColorUrl: '/lable/changeColor',
  getAllChannels: '/channels',
  addChannel: '/channel',
  delOneChannel: '/channels',
};
