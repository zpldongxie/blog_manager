/*
 * @description: 
 * @author: zpl
 * @Date: 2020-01-13 14:09:12
 * @LastEditTime : 2020-01-13 14:52:00
 * @LastEditors  : zpl
 */
import axios from 'axios';
import api from '../common/api';

// 创建axios实例
const service = axios.create({
  baseURL: api.baseUrl, // api的base_url
  timeout: 50000, // 请求超时时间
});

// request拦截器 axios的一些配置
service.interceptors.request.use(
  (config) => config,
  (error) => {
    // Do something with request error
    console.error('error:', error); // for debug
    Promise.reject(error);
  },
);

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(`error:${error}`); // for debug
    return Promise.reject(error);
  },
);

export default { ...service };