/**!
 * @description: 自定义页头
 * @author: zpl
 * @Date: 2020-02-17 19:05:04
 * @LastEditTime: 2020-02-17 19:29:08
 * @LastEditors: zpl
 */
import React from 'react';
import { Layout } from 'antd';
import { APP_NAME } from '../../common/constant';

import  './index.less';

const { Header } = Layout;

const CustomFooter: React.FC = () => (
  <Header><span className='blogTitle'>{APP_NAME}</span></Header>
)

export default CustomFooter;