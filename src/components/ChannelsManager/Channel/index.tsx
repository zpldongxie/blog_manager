/**!
 * @description: 栏目组件
 * @author: zpl
 * @Date: 2020-02-25 20:00:39
 * @LastEditTime: 2020-02-25 22:54:04
 * @LastEditors: zpl
 */
import React from 'react'
import { Collapse, Empty } from 'antd';

import ChannelProps from '../channel.interfice';
import './index.less';

const { Panel } = Collapse;

const Channel: React.SFC<{ channels: ChannelProps[] }> = (props) => {
  const { channels = [] } = props;

  if (channels.length) {
    return <Collapse bordered={false}>
      {
        channels.map((channel: ChannelProps) => {
          const {
            id,
            title,
            desc = '',
            level,
            children = []
          } = channel;
          const PanelHeader = <div>{title}<span className='desc'>{desc}</span></div>

          return (<Panel
            key={id}
            header={PanelHeader}
            showArrow={children.length > 0}
            className={`channel-${level}`}
          >
            {children.length && <Channel channels={children} />}
          </Panel>)
        })
      }
    </Collapse>
  } else {
    return <Empty />
  }
}

export default Channel;