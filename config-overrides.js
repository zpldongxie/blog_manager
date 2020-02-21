/*
 * @description: 通过react-app-rewired实现覆盖默认配置
 * @author: zpl
 * @Date: 2020-01-13 11:42:37
 * @LastEditTime: 2020-02-18 11:31:15
 * @LastEditors: zpl
 */

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { '@primary-color': '#1DA57A' },
  }),
);