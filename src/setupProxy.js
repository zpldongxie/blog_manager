/*
 * @description: 设置反向代理
 * @author: zpl
 * @Date: 2019-12-04 10:52:57
 * @LastEditTime : 2020-01-18 17:31:57
 * @LastEditors  : zpl
 */
const proxy = require('http-proxy-middleware');

/**
 * 开发环境接口转发
 *
 * @param {*} app
 */
module.exports = (app) => {
  app.use(proxy('/mock/api', {
    target: 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: {
      '^/mock/api': '/',
    },
  }));

  app.use(proxy('/api', {
    target: 'http://39.105.69.209:3000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/',
    },
  }));
};
