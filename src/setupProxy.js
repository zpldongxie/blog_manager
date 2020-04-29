/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*
 * @description: 设置反向代理
 * @author: zpl
 * @Date: 2019-12-04 10:52:57
 * @LastEditTime: 2020-04-03 10:01:33
 * @LastEditors: zpl
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    target: 'http://49.234.158.74:3000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/',
    },
  }));
};
