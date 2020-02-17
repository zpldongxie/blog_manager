/**!
 * @description: 自定义页脚
 * @author: zpl
 * @Date: 2020-02-17 19:05:04
 * @LastEditTime: 2020-02-17 19:29:51
 * @LastEditors: zpl
 */
import React from 'react';
import { Layout, Divider } from 'antd';
import { FREND_LINK } from '../../common/constant';

import  './index.less';

const { Footer } = Layout;

const CustomFooter: React.FC = () => (
  <Footer>
    {
      FREND_LINK.map((item, index) => (<span key={item.name}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
        {index < FREND_LINK.length - 1 && <Divider type="vertical" />}
      </span>))
    }
    <br />
    Zhu Pengliang ©{new Date().getFullYear()} Created by Ant Design <br />
  </Footer>
)

export default CustomFooter;