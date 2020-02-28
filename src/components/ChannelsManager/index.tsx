/**!
 * @description: 栏目管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-02-25 22:50:13
 * @LastEditors: zpl
 */
import React from 'react';
import { Collapse } from 'antd';

import Channel from './Channel';
import ChannelProps from './channel.interfice';

const ChannelsManager: React.FC = () => {
  const testData: ChannelProps[] = [{
    id: '1',
    title: '栏目1',
    desc: 't1',
    level: 1,
    children: [
      {
        id: '2',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: []
      },
      {
        id: '3',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: []
      }
    ]
  },{
    id: '4',
    title: '栏目2',
    desc: 't1',
    level: 1,
    children: [
      {
        id: '5',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: []
      },
      {
        id: '6',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: []
      }
    ]
  }];

  return (
    <Channel channels={testData} />
  )
}

export default ChannelsManager;
