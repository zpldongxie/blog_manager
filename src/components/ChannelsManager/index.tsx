/** !
 * @description: 栏目管理
 * @author: zpl
 * @Date: 2020-01-16 12:20:36
 * @LastEditTime: 2020-03-06 08:43:17
 * @LastEditors: zpl
 */
import React, {useState} from 'react';
import {Row, Col, Button, Tooltip} from 'antd';
import {AxiosResponse} from 'axios';

import api from '../../common/api';
import https from '../../utils/https';
import {showError} from '../Util';
import Channel from './Channel';
import ChannelProps from './channel.interfice';

const ChannelsManager: React.FC = () => {
  const [openState, setOpenState] = useState<'open'|'close'|'default'>('default');
  const [openIcon, setOpenIcon] = useState<'fullscreen' | 'fullscreen-exit'>('fullscreen');
  const testData: ChannelProps[] = [{
    id: '1',
    title: '技术分享',
    desc: '分享最新最前沿的优质技术贴',
    level: 1,
    children: [
      {
        id: '2',
        title: 'nodeJs',
        desc: '分享nodeJs相关技术贴',
        level: 2,
        children: [],
      },
      {
        id: '3',
        title: 'React',
        desc: '分享React相关技术贴',
        level: 2,
        children: [],
      },
    ],
  }, {
    id: '4',
    title: '教程整理',
    desc: '按体系获取教程、API文档、包括翻译国外英文资料',
    level: 1,
    children: [
      {
        id: '5',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: [],
      },
      {
        id: '6',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: [],
      },
    ],
  }, {
    id: '7',
    title: '学习记录',
    desc: '详细记录各种开发语言及框架的学习过程，为自己温习及后来者学习提供参考',
    level: 1,
    children: [
      {
        id: '8',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: [],
      },
      {
        id: '9',
        title: 't1',
        desc: 'desc1',
        level: 2,
        children: [],
      },
    ],
  }];

  const addChannel = () => {
    https.post(api.addChannel, {name: '', color: ''}).then((res: AxiosResponse<unknown>) => {
      if (res.status === 201) {
        // getList();
      } else {
        showError(`新增失败。`);
      }
    }).catch((err) => {
      showError(`新增失败。${JSON.stringify(err.response.data.message[0].constraints)}`);
    });
  };

  return (
    <div>
      <Row type="flex">
        <Col><Tooltip title={openIcon === 'fullscreen' ? '全部展开' : '全部收起'}>
          <Button icon={openIcon} onClick={(): void => {
            setOpenState(openIcon === 'fullscreen' ? 'open' : 'close');
            setOpenIcon(openIcon === 'fullscreen' ? 'fullscreen-exit' : 'fullscreen');
          }} />
        </Tooltip></Col>
      </Row>
      <Channel id='-1.' list={testData} openState={openState} setOpenState = {setOpenState}/>
    </div>
  );
};

export default ChannelsManager;
